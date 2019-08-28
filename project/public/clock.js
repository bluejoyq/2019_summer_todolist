function clock(){
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    let now_time= hour > 10 ? hour : "0" + hour;
    now_time+= ":"
    now_time+= minute > 10 ? minute : "0" + minute;
    now_time+= ":"
    now_time+= second > 10 ? second : "0" + second;
    $(".clock").text(now_time);
}

$(document).ready(function(){
	clock(); 
    setInterval(clock,1000);
});