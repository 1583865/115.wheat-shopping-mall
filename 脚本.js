/*调用时间 日期js*/
function tick() {
    var today=new Date();
    var month=today.getMonth()+1;
    var year,date, hours, minutes,seconds;
    var inHours,intMinutes,intSeconds;
    var week=new Array()
    week[0]="星期天";
    week[1]="星期一";
    week[2]="星期二";
    week[3]="星期三";
    week[4]="星期四";
    week[5]="星期五";
    week[6]="星期六";
    intHours = today.getHours();
    intMinutes = today.getMinutes();
    intSeconds = today.getSeconds();
    year=today.getFullYear();
    date=today.getDate();
    var time;
    if (intHours == 0){
        hours = "00:";
    }
    else  if (intHours < 10){
        hours = "0" + intHours+":";
    }
    else{
        hours = intHours + ":";
    }
    if (intMinutes < 10){
        minutes = "0"+intMinutes+":";
    }
    else{
        minutes = intMinutes+":";
    }
    if (intSeconds < 10){
        seconds = "0"+intSeconds+" ";
    }
    else{
        seconds = intSeconds+" ";
    }

    time="午夜好";
    if (today.getHours()<=22) time="晚上好";
    if (today.getHours()<=19) time="傍晚好";
    if (today.getHours()<=17) time="下午好";
    if (today.getHours()<=14) time="中午好";
    if (today.getHours()<=12) time="上午好";
    if (today.getHours()<=8) time="早上好";
    if (today.getHours()<=5) time="凌晨好";
    timeString="今天是:"+year+"年"+month+"月"+date+"日" +hours+minutes+seconds+week[today.getDate()]+time;
    Clock.innerHTML = timeString;
    window.setTimeout("tick();", 1000);


}
window.onload = tick;