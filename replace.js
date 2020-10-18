/**
 * 获取 URL 中的参数
 * 示例 URL：http://www.runoob.com/index.php?id=1&image=awesome.jpg
 * getUrlParam("id") 会返回 1
 * getUrlParam("image") 会返回 "awesome.jpg"
 */
function getUrlParam(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}

/**
 * 获取系统当前时间并格式化
 * @returns yyyy-MM-dd HH:mm
 */
function getCurrentFormatDate() {
    // 系统当前时间格式化
    var currentFormatDate = "";
    // 获取系统当前日期
    var date = new Date();
    // 获取当前年
    var currentYear = date.getFullYear();
    // 获取当前月
    var currentMonth = date.getMonth() + 1;
    currentMonth = (currentMonth <= 9)?"0" + currentMonth:currentMonth;
    // 获取当前日
    var currentDay = date.getDate();
    currentDay = (currentDay <= 9)?"0" + currentDay:currentDay;
    // 时
    var currentHours = date.getHours();
    // 分
    var currentMinutes = date.getMinutes();
    // yyyy-MM-dd HH:mm
    currentFormatDate = currentYear + "-" + currentMonth + "-" + currentDay + " " + currentHours + ":" + currentMinutes;
    return currentFormatDate;
}

/**
 * 替换文本内容，自动替换对应 id 的元素内容
 */
function replace() {
    var name = document.getElementById("xm"); // 找到姓名变量
    name.innerHTML = decodeURI(getUrlParam("name"));   // 替换姓名变量内容为 URL 中的参数
    var xh = document.getElementById("xh"); // 找到学号变量
    xh.innerHTML = getUrlParam("xh");   // 替换学号变量内容为 URL 中的参数
    var date = getCurrentFormatDate();  // 获取当前时间并格式化
    var skrq = document.getElementById("skrq"); // 找到 date1 变量
    var date2 = document.getElementById("date2"); // 找到 date2 变量
    skrq.innerHTML = date;   // 替换 date1 变量内容
    date2.innerHTML = date;   // 替换 date2 变量内容
}