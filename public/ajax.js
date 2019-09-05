$("#btn_submit").click(()=>{
    const add_memo=$("#add_memo").val();
    const add_time=$("#add_time").val();

    $(".box-2-popup").attr('style','visibility:hidden');
    $("#add_memo").val("");
    $("#add_time").val(new Date());
    
    if(add_time==""){
        alert("날짜를 다 채워주세요!");
        return false;
    }
    $.ajax({
        url:"/api/add",
        data:{"memo":add_memo,"time":add_time},
        type:"POST",
        success : function(return_data){
            alert("success");
        },
        error : function(return_data){
            alert(return_data);
        }
    });
});