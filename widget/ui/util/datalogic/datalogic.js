/**
 * 用于处理业务数据转化
 */

var Util = require('common:widget/ui/lib/until.js'),
	UtilDatetime = require('common:widget/ui/lib/datetime.js');

var DataLogic = {
	/**
	 * 格式化不可租数据，同时限制在27天
	 * @param  {[JSON]} 
	 * limits: {
	 *      startdate: '2015-04-25',
	 *		freetime: '111111100000111111111111111111111111111111111111111111111111',
	 *		ranges: {'2015-04-25': '10:00 - 24:00', '2015-04-26': '00:00 - 10:00', '2015-05-01': '10:00 - 24:00'}
	 *	}
	 * @return {[JSON]}
	 * obj: {
	 *     MSKEY: { //将freetime按startdate转化为以毫秒数，做为KEY
	 *         status: 0,  //0不可租，1部分可租，2全天可租
	 *         info: '10:00 - 24:00' //如果status为1，则info为不可租时段
	 *     }
	 * }
	 */
	formatLimitInfo: function (limits) {
		if (Util.isEmpty(limits)) {
			return null;
		}
		var obj = {};
		var startDate = UtilDatetime.parseStringToDatetime(limits.startdate);
		var arrFreeTime = limits.freetime.split('');
		var yyyy = startDate.getFullYear(),
			mm = startDate.getMonth(),
			dd = startDate.getDate();
		for (var i = 0, len = arrFreeTime.length; i < len; i++) {
			var itemDt = new Date(yyyy, mm, dd + i);
			var itemMs = itemDt.getTime(),				
				val = {status: 0};
			if (arrFreeTime[i] == '1') {
				var itemStr = UtilDatetime.parseDateToString(itemDt),
					info = limits.ranges ? limits.ranges[itemStr] : '';
				if (info) {
					info = info.replace(/\s/g, '');
					val.status = 1;
					val.info = info;
					val.parts = this.formatLimitTime(itemStr, info);
				} else {
					val.status = 2;
					val.info = '';
				}
			}
			obj[itemMs] = val;
		}
		return obj;
	},
	/**
	 * 将"00:00 - 10:00, 14:00 - 15:00"转化为对应的毫秒数表示
	 * {min: ms, max: ms}
	 * @param {[string]} strYYYYMMDD [2015-05-12]
	 * @param  {[string]} strInfo [description]
	 * @return {[type]}          [description]
	 */
	formatLimitTime: function (strYYYYMMDD, strInfo) {
		var obj = [];
		var arrParts = strInfo.split(',');
		for(var i=0, len=arrParts.length; i<len; i++) {
			var part = arrParts[i];
			var arrTimePoints = part ? part.split('-') : [];
			if (arrTimePoints.length) {
				var	tpMin = UtilDatetime.parseStringToDatetime(strYYYYMMDD + ' ' + arrTimePoints[0]),
					tpMax = UtilDatetime.parseStringToDatetime(strYYYYMMDD + ' ' + arrTimePoints[1]);
				obj.push({min: tpMin.getTime(), max: tpMax.getTime()});	
			}
		}
		return obj;
	}
};

module.exports = DataLogic;