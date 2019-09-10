const date = new Date();
const week = ["일","월","화","수","목","금","토"];

function clock(){
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    let now_time= hour >= 10 ? hour : "0" + hour;
    now_time+= ":";
    now_time+= minute >= 10 ? minute : "0" + minute;
    now_time+= ":";
    now_time+= second >= 10 ? second : "0" + second;

    if(hour == 0 && minute == 0 && second ==0) 
        day_count(date);
    $("#clock").text(now_time);
}

function day_count(date){
    const day = date.getDate();
    const month = date.getMonth();
    const years = date.getFullYear();
    const days = date.getDay();

    let now_day = years + "/" + (month+1) + "/" + day + " " + week[days];
    $("#date").text(now_day);
    //$("#add_date").val(years+"-"+(month+1)+"-"+day);
};


$(document).ready(function(){
    clock(); 
    day_count(date);
    setInterval(clock,1000);
});

$("#btn_add").click(()=>{
    $(".box-2-popup").attr('style','visibility:visible');
}); 

$("#btn_hide").click(()=>{
    $(".box-2-popup").attr('style','visibility:hidden');
}); 

$("#btn_hide_edit").click(()=>{
    $("#edit-popup").attr('style','visibility:hidden');
});