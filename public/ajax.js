$("#btn_submit").click(()=>{
    const add_memo=$("#add_memo").val();
    const add_time=$("#add_time").val();
    $.ajax({
        url:"/add",
        data:{"memo":add_memo,"time":add_time},
        type:"POST",
        success : function(data){
        

        }
    });
});