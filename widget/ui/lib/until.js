

module.exports = {        
    /**
     * 格式化文件大小, 输出成带单位的字符串
     * @method formatSize
     * @grammar Base.formatSize( size ) => String
     * @grammar Base.formatSize( size, pointLength ) => String
     * @grammar Base.formatSize( size, pointLength, units ) => String
     * @param {Number} size 文件大小
     * @param {Number} [pointLength=2] 精确到的小数点数。
     * @param {Array} [units=[ 'B', 'K', 'M', 'G', 'TB' ]] 单位数组。从字节，到千字节，一直往上指定。如果单位数组里面只指定了到了K(千字节)，同时文件大小大于M, 此方法的输出将还是显示成多少K.
     * @example
     * console.log( Base.formatSize( 100 ) );    // => 100B
     * console.log( Base.formatSize( 1024 ) );    // => 1.00K
     * console.log( Base.formatSize( 1024, 0 ) );    // => 1K
     * console.log( Base.formatSize( 1024 * 1024 ) );    // => 1.00M
     * console.log( Base.formatSize( 1024 * 1024 * 1024 ) );    // => 1.00G
     * console.log( Base.formatSize( 1024 * 1024 * 1024, 0, ['B', 'KB', 'MB'] ) );    // => 1024MB
     */
    formatSize: function( size, pointLength, units ) {
        var unit;

        units = units || [ 'B', 'K', 'M', 'G', 'TB' ];

        while ( (unit = units.shift()) && size > 1024 ) {
            size = size / 1024;
        }

        return (unit === 'B' ? size : size.toFixed( pointLength || 2 )) +
                unit;
    },
    getMailAddr : function(mail){
        mailAddr  = mail.split("@")[1];
        return mailAddr;
    },
    debug : function(){
        return false;
    },
    isEmpty: function (obj){
        for(var i in obj){
            if(obj.hasOwnProperty(i)){
                return false;
            }
        }
        return true;
    }
}