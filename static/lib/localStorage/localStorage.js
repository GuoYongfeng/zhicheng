// -----------------------------------------------------------
// ------------------------ 无聊的分割线 ------------------------
//
// 上部分：amd loader
// 下部分：localstorage
//
// -----------------------------------------------------------
// -----------------------------------------------------------



var head = document.getElementsByTagName('head')[0];
function globalEval(code) {
    var script;

    code = code.replace(/^\s+/, '').replace(/\s+$/, '');

    if (code) {
        var script = document.createElement("script");
        var code = "!function(){" + code + "\n}();";
        script.appendChild(document.createTextNode(code));
        document.head.appendChild(script);
        // if (code.indexOf('use strict') === 1) {
        //     script = document.createElement('script');
        //     script.text = code;
        //     head.appendChild(script).parentNode.removeChild(script);
        // } else {
        //     eval(code);
        // }
    }
}

function appendStyle(code) {
    var dom = document.createElement('style');
    dom.innerHTML = code;
    head.appendChild(dom);
}

function each(obj, iterator) {
    // is array?
    if (obj.splice) {
        obj.forEach(iterator);
    } else {
        for (var key in obj) {
            obj.hasOwnProperty(key) && iterator(obj[key], key);
        }
    }
}

function isEmpty(obj) {
    if (obj) {
        for (var key in obj) {
            return false;
        }
    }

    return true;
}

function extend(a, b) {
    var i, v;

    if (!a || !b || typeof b !== 'object') {
        return a;
    }

    each(b, function(v, i) {
        if (typeof v === 'object' && !v.splice) {
            extend(a[i] || (a[i] = {}), v);
        } else {
            a[i] = v;
        }
    });

    return a;
}

function ajax(url, cb, data) {
    var xhr = new(window.XMLHttpRequest || ActiveXObject)('Microsoft.XMLHTTP');

    xhr.onreadystatechange = function() {
        if (this.readyState == 4) {
            cb(this.responseText);
        }
    };
    xhr.open(data ? 'POST' : 'GET', url + '&t=' + ~~(Math.random() * 1e6), true);

    if (data) {
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    }
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send(data);
}

var storage = (function() {

    function Base() {
        var data = {};

        this.get = function(key) {
            return key ? data[key] : data;
        };

        this.set = function(key, val) {
            if (arguments.length == 1) {
                data = key;
            } else {
                data[key] = val;
                return val;
            }
        };

        //具体的(资源加载子类)实现存贮和初始化方案
        this.save = this.clear = this.init = function() {
            // implements this.
        };
    }

    function LocalStorage() {
        Base.apply(this, arguments);
        var me = this,
            inited = false,
            localStorage = window.localStorage;

        this.init = function() {

            // 避免重复初始化。
            if (inited) {
                return;
            }

            inited = true;

            var prefix = config.fid;

            each(localStorage, function(val, key) {
                if (key.substring(0, prefix.length) === prefix) {
                    me.set(key.substring(prefix.length), JSON.parse(val));
                }
                if (key.substring(0, 3) === 'pp-'){
                    delete localStorage[key];
                }
            });
        }

        this.save = function(id) {
            var obj = me.get(id);
            var prefix = config.fid;

            if (id) {
                var tmp = {};
                tmp[id] = obj;
                obj = tmp;
            }

            each(obj, function(val, key) {
                localStorage[prefix + key] = JSON.stringify(val);
            });
        };

        this.clear = function() {
            var prefix = config.fid;

            each(localStorage, function(val, key) {
                if (key.substring(0, prefix.length) === prefix) {
                    delete localStorage[key];
                }
            });
        };
    }

    function IndexedDB() {
        // 待调研
    }

    function Script(){
        Base.apply(this, arguments);
        var me = this,
            inited = false;

    }

    function factory() {
        //根据运行时能力来实例化一个最优的方案
        try{
            //localStorage禁用、隐私模式通过传统方案加载资源
            if(window.localStorage){
                window.localStorage.setItem("pp-localStorage-enable", true);
                return new LocalStorage();
            }
        }catch(e){
            return new Script();
        }        
    }

    return factory();
})();


var resource = (function(storage) {
    var api = {};

    api.getChangeList = function(pkgs, done) {
        var list = [];
        var ret = {};

        each(pkgs, function(item) {
            var pkg = storage.get(item.id);

            if (!pkg) {
                ret[item.id] = [];
            } else if (item.hash != pkg.hash) {
                ret[item.id] = [];
                list.push(item.id);
            }
        });

        if (list.length) {
            // 需要进一步检测
            ajax(config.listLink, function(response) {
                response = JSON.parse(response);
                var data = response.data;

                each(data, function(item, id) {
                    var pkg = storage.get(id) || storage.set(id, {});
                    var oldlist = pkg.list || [];

                    pkg.list = item.list.concat();
                    pkg.hash = item.hash;
                    pkg.type = item.type;
                    pkg.data = pkg.data || {};

                    each(item.list, function(hash) {
                        ~oldlist.indexOf(hash) || ret[id].push(hash);
                    });

                    if (!ret[id].length) {
                        delete ret[id];
                        storage.save(id);
                    }
                })

                done(ret);
            }, 'pids='+list.join(','));
        } else {
            done(ret);
        }
    };

    api.updatePkgs = function(data) {
        each(data, function(item, id) {
            var pkg = storage.get(id) || storage.set(id, {});
            var list = [];

            pkg.data = pkg.data || {};
            each(item.data, function(part) {
                list.push(part.hash);
                pkg.data[part.hash] = part.content;
            });

            pkg.hash = item.hash;
            pkg.type = item.type;
            (!pkg.list || !pkg.list.length) && (pkg.list = list);
        });

        storage.save();
    };

    api.fetchPkgs = function(obj, done) {
        var params = [];

        each(obj, function(list, id) {
            params.push('' + id + '=' + list.join(','));
        });

        ajax(config.dataLink, function(response) {
            response = JSON.parse(response);
            var data = response.data;
            api.updatePkgs(data);
            done();
        }, params.join('&'));
    };

    api.load = function(pkgs, done) {
        var ran = function() {
            var js = '';
            var css = '';

            each(pkgs, function(item) {
                var pkg = storage.get(item.id);
                var hashs = this.list || pkg.list;
                var content = '';

                each(hashs, function(hash) {
                    content += pkg.data[hash];
                });

                if (pkg.type === 'js') {
                    js += content;
                } else {
                    css += content;
                }
            });

            css && appendStyle(css);
            js && globalEval(js);
            done && done();
        };

        storage.init();

        api.getChangeList(pkgs, function(data) {
            if (!isEmpty(data)) {
                api.fetchPkgs(data, ran);
            } else {
                ran();
            }
        });
    }

    return api;
})(storage);

var config = {
    fid: 'fis-',
    rate: 0.01,
    listLink: '/fis-diff?type=list',
    dataLink: '/fis-diff?type=data',
    product : null
};

// expose
var F = resource.load;
F.load = F;

F.config = function(cfg) {
    return extend(config, cfg);
};

window.F = F;

// hack require.async
require.async = (function(older) {

    function findDeps(name, map, data) {
        var obj = map.res[name];
        var key = obj.key;
        var pkg = obj.pkg;

        if (pkg) {
            key = map.pkg[pkg].key;
        }

        var arr = data[key] || (data[key] = {id: key, hash: obj.hash});

        pkg && (arr.list || (arr.list = [])).push(obj.hash);

        obj.deps && obj.deps.length && each(obj.deps, function(dep) {
            findDeps(dep, map, data);
        });
    }

    return function(name, callback) {
        var map = config.ls_resourceMap;
        var args = arguments;

        if (typeof name === 'string') {
            name = [name];
        }

        var data = {};
        each(name, function(name) {
            findDeps(name, map, data)
        });

        resource.load(data, function() {
            older.apply(null, args);
        });
    };
})(require.async);
