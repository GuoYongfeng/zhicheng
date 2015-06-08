var noop = function() {},
    call = Function.call;

// http://jsperf.com/uncurrythis
// 反科里化
function uncurryThis( fn ) {
    return function() {
        return call.apply( fn, arguments );
    };
}

function bindFn( fn, context ) {
    return function() {
        return fn.apply( context, arguments );
    };
}

function createObject( proto ) {
	var f;

	if ( Object.create ) {
	    return Object.create( proto );
	} else {
	    f = function() {};
	    f.prototype = proto;
	    return new f();
	}
}

module.exports = {
    /**
     * 返回一个新的方法，此方法将已指定的`context`来执行。
     * @grammar Base.bindFn( fn, context ) => Function
     * @method bindFn
     * @example
     * var doSomething = function() {
     *         console.log( this.name );
     *     },
     *     obj = {
     *         name: 'Object Name'
     *     },
     *     aliasFn = Base.bind( doSomething, obj );
     *
     *  aliasFn();    // => Object Name
     *
     */
    bindFn: bindFn,
    /**
     * 一个不做任何事情的方法。可以用来赋值给默认的callback.
     * @method noop
     */
    noop: noop,
    /**
     * 被[uncurrythis](http://www.2ality.com/2011/11/uncurrying-this.html)的数组slice方法。
     * 将用来将非数组对象转化成数组对象。
     * @grammar Base.slice( target, start[, end] ) => Array
     * @method slice
     * @example
     * function doSomthing() {
     *     var args = Base.slice( arguments, 1 );
     *     console.log( args );
     * }
     *
     * doSomthing( 'ignored', 'arg2', 'arg3' );    // => Array ["arg2", "arg3"]
     */
    slice: uncurryThis( [].slice ),
    /**
     * 引用Console.log如果存在的话，否则引用一个[空函数noop](#WebUploader:Base.noop)。
     * @grammar Base.log( args... ) => undefined
     * @method log
     */
    log: (function() {
        if ( window.console ) {
            return bindFn( console.log, console );
        }
        return noop;
    })(),

    /**
     * 生成唯一的ID
     * @method guid
     * @grammar Base.guid() => String
     * @grammar Base.guid( prefx ) => String
     */
    guid: (function() {
        var counter = 0;

        return function( prefix ) {
            var guid = (+new Date()).toString( 32 ),
                i = 0;

            for ( ; i < 5; i++ ) {
                guid += Math.floor( Math.random() * 65535 ).toString( 32 );
            }

            return (prefix || 'ui-') + guid + (counter++).toString( 32 );
        };
    })(),
	/**
     * 实现类与类之间的继承。
     * @method extend
     * @grammar Base.extend( super ) => child
     * @grammar Base.extend( super, protos ) => child
     * @grammar Base.extend( super, protos, statics ) => child
     * @param  {Class} super 父类
     * @param  {Object | Function} [protos] 子类或者对象。如果对象中包含constructor，子类将是用此属性值。
     * @param  {Function} [protos.constructor] 子类构造器，不指定的话将创建个临时的直接执行父类构造器的方法。
     * @param  {Object} [statics] 静态属性或方法。
     * @return {Class} 返回子类。
     * @example
     * function Person() {
     *     console.log( 'Super' );
     * }
     * Person.prototype.hello = function() {
     *     console.log( 'hello' );
     * };
     *
     * var Manager = Base.extend( Person, {
     *     world: function() {
     *         console.log( 'World' );
     *     }
     * });
     *
     * // 因为没有指定构造器，父类的构造器将会执行。
     * var instance = new Manager();    // => Super
     *
     * // 继承子父类的方法
     * instance.hello();    // => hello
     * instance.world();    // => World
     *
     * // 子类的__super__属性指向父类
     * console.log( Manager.__super__ === Person );    // => true
     */
    extend: function( Super, protos, staticProtos ) {
        var child;
        if ( typeof protos === 'function' ) {
            child = protos;
            protos = null;
        } else if ( protos && protos.hasOwnProperty('constructor') ) {
            child = protos.constructor;
        } else {
            child = function() {
                return Super.apply( this, arguments );
            };
        }

        // 复制静态方法
        $.extend( true, child, Super, staticProtos || {} );

        /* jshint camelcase: false */
        // 让子类的__super__属性指向父类。
        child.__super__ = Super.prototype;

        // 构建原型，添加原型方法或属性。
        // 暂时用Object.create实现。
        child.prototype = createObject( Super.prototype );
        protos && $.extend( true, child.prototype, protos );

        return child;
    }
};