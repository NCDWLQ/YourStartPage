//创建一个Date对象
var obj = new Date();

//从对象中获取当前的时间
var hour = obj.getHours();
var min = obj.getMinutes();
var fin_hour = 0;
var fin_min = 0;
//如果小于10，在前面添加一个0，增强美观性
if (hour < 10) {
    var fin_hour = '0' + hour;
}
if (min < 10) {
    var fin_min = '0' + min;
}

//合并时间
var fin_time = fin_hour + ":" + fin_min;

//输出
document.getElementById('timeshow').innerHTML=fin_time;