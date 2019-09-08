let todo_index;

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
            location.reload();
        },
        error : function(return_data){
            alert(return_data);
        }
    });
});

for(let index = 0; index < todo_index; index++){
    $(`#btn_del_db_${index}`).click((index)=>{
        $.ajax({
            url:"/api/del",
            type:"DELETE",
            data: {"index":index},
            success : function(return_data){
                location.reload();
            },
            error : function(return_data){
                alert(return_data);
            }
        });
    });
}

$(document).ready(()=>{
    $.ajax({
        url:"/api/load",
        type:"GET",
        data_type:"JSON",
        async: false,
        success : function(return_data){
            todo_index = return_data.db_index;
            return_data.db.forEach(db=>{
                let temp_index = (db.index).toString();
                $("#todo_list").append(`<tr><td>${db.memo}</td><td>${db.time}</td><td><input type="button" id="btn_del_db_${temp_index}" value="삭제"></td></tr>`);
            });    
        },
        error : function(return_data){
            alert(return_data);
        }
    });
});