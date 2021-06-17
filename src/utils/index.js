export function dateFormatYMD(date) {
    let ret;
    let fmt = "YYYY-mm-dd";
    const opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "m+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
    };
    return fmt;
}


export function getTimeStamp(date) {
    const week = [
        "周日",
        "周一",
        "周二",
        "周三",
        "周四",
        "周五",
        "周六",
    ];

    let temp_date = date.replace(/-/g, '/');
    let timeDate = new Date(temp_date);
    return {
        timeStamp: timeDate.getTime(),
        weekDay: week[timeDate.getDay()]
    };
}

export function dateFormat(fmt, date) {
    let ret;
    const opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "m+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "M+": date.getMinutes().toString(),         // 分
        "S+": date.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
    };
    return fmt;
}


export const cookie = {
    set: function (name, value, time) { //time 秒
        // console.log("时间",time);
        time || (time = 24 * 3600 * 1000);
        var exp = new Date();
        exp.setTime(exp.getTime() + time);
        // console.log("时间",exp.getTime() + time);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
    },
    get: function (name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        return (arr = document.cookie.match(reg)) ? unescape(arr[2]) : null;
    },
    del: function (name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = this.get(name);
        if (cval != null)
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    },
    updata: function (name, value, time, path) {
        time || (time = 24 * 3600 * 1000);
        var exp = new Date();
        exp.setTime(exp.getTime() + time);
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path =/";
    }
}


export function getUrlParam() {
    var search = window.location.search.substr(1);
    var mappers = search.split("&");
    var hash = {};
    for (var i in mappers) {
        var index = mappers[i].indexOf("=");
        hash[mappers[i].substring(0, index)] = mappers[i].substring(index + 1)
    }
    return hash;
}

export function getQueryParams(url) {
	let args = new Object();
	let query = url.substring(url.indexOf('?') + 1);
	let pairs = query.split("&");
	for (let i = 0; i < pairs.length; i++) {
		let pos = pairs[i].indexOf('=');
		if (pos == -1) continue;
		let argname = pairs[i].substring(0, pos);
		let value = pairs[i].substring(pos + 1);
		args[argname] = unescape(value);
	}
	args.home = url.split('?')[0]
	return args;
}