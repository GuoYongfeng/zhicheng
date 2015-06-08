/**
 * 日期和时间处理工具类
 */

var UtilDatetime = {
    //格式化数字
    formatPadLeft: function (v) {
        v = v.toString();
        return (v.length >= 2 ? v : '0'+v);
    },
    /*
     * 计算时间差，返回毫秒数
     * 时间格式: YYYY-MM-DD HH:MM:SS
     */
    compareTimeByStringFormat: function (t1, t2) {
        var date1 = this.parseStringToDatetime(t1);
        var date2 = this.parseStringToDatetime(t2);
        return date1.getTime() - date2.getTime();
    },
    /*
     * 计算时间差，返回毫秒数
     * 返回json
     */
    pareseMsToTimeLag: function( ms ){
        var res = {};
        var gap = 24*60*60*1000;
        res.day = ~~(ms / gap);
        ms = ms % gap;
        gap = gap / 24;

        res.hour = ~~(ms / gap);
        ms = ms % gap;
        gap = gap / 60;

        res.min = ~~(ms / gap);
        ms = ms % gap;
        gap = gap / 60;

        res.sec = ~~(ms / gap);
        ms = ms % gap;

        return res
    },

    /*
     * 转化:yyyy-mm-dd HH:MM 或 yyyy-mm-dd
     * return Date()
     */
    parseStringToDatetime: function (str) {
        var arr = str ? str.split(/[-\/:\s]/) : [];
        var date = null;
        switch (arr.length){
            case 6:
            case 5:
                date = new Date(parseInt(arr[0], 10), parseInt(arr[1], 10) -1, parseInt(arr[2], 10), parseInt(arr[3], 10), parseInt(arr[4]),  (arr[5] && parseInt(arr[5])) || 10);
                break;
            case 3:
                date = new Date(parseInt(arr[0]), parseInt(arr[1], 10) - 1, parseInt(arr[2]), 10);
                break;
            default:
                date = new Date();
                break;
        }
        return date;
    },
    parseStringToJSON: function (str, needAdjust) {
        var date = this.parseStringToDatetime(str);
        //取最近的15分钟
        var adjustMin = needAdjust ? Math.ceil(date.getMinutes()/15)*15 : date.getMinutes();
        var adjust = new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            date.getHours(),
            adjustMin
        );
        return this.parseDatetimeToJSON(adjust);
    },
    /*
     * 转化：Date
     * return yyyy-mm-dd HH:MM
     */
    parseDatetimeToString: function (date, datespliter) {
        return this.parseDateToString(date, datespliter)+" "+this.formatPadLeft(date.getHours())+":"+this.formatPadLeft(date.getMinutes());
    },
    /*
     * 转化：Date(), 默认分隔符为中划线(-)
     * return yyyy-mm-dd
     */
    parseDateToString: function (date, spliter) {
        spliter = spliter || '-' ;
        return [date.getFullYear(), this.formatPadLeft((date.getMonth()+1),2), this.formatPadLeft(date.getDate())].join(spliter);
    },    
    /*
     * 将Date转化为分日期和时间的JSON格式
     */
    parseDatetimeToJSON: function (date) {
        var obj = null;
        if(date && date.getFullYear && date.getMinutes){ //尝试用两个方法判断是够是Date对象
            obj = {
                date: {//日期
                    year: date.getFullYear(),
                    month: date.getMonth(),
                    date: date.getDate(),
                    ms: (new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0)).getTime()
                },
                time: {//时间
                    hour: date.getHours(),
                    minute: date.getMinutes(),
                    ms: new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes()).getTime()
                }
            }
        }
        return obj;
    },
    parseJSONToDatetime: function (obj) {
        var d = {
            date: {
                year: 1900,
                month: 0,
                date: 1
            },
            time: {
                hour: 0,
                minute: 0
            }
        };
        d = $.extend(true, d, obj);
        return new Date(d.date.year, d.date.month, d.date.date, d.time.hour, d.time.minute);
    },
    parseJSONToString: function (obj) {
        var dt = this.parseJSONToDatetime(obj);
        return this.parseDatetimeToString(dt);
    },
    /**
     * 增加天数
     * @param {[type]} date   [description]
     * @param {[type]} number [description]
     */
    addDays: function (date, number) {
        return new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate() + number,
            date.getHours(),
            date.getMinutes()
        );
    },
    /**
     * 取最近的15分钟
     * @param  {Date} dt [description]
     * @return {[String]}    [YYYY-MM-DD HH:mm]
     */
    calTimeTo15mins: function (dt){
        var strNow = UtilDatetime.parseDatetimeToString(dt);
        //取最近的15分钟
        var objNow = UtilDatetime.parseStringToJSON(strNow, true);
        strNow = UtilDatetime.parseJSONToString(objNow);
        return strNow;
    }
};

module.exports = UtilDatetime;