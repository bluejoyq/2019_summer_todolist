const do_load=()=>{
    $.ajax({
        url:"/api/load",
        type:"GET",
        data_type:"JSON",
        async: false,
        success : function(return_data){
            todo_index = return_data.db_index;
            $("#todo_list").html("");
            $("#todo_list").append("<tr><td>할일</td><td>시간</td><td>삭제</td><td>수정</td></tr>");
            return_data.db.forEach(db=>{
                let temp_index = (db.index).toString();
                $("#todo_list").append(`<tr><td>${db.memo}</td><td>${db.time}</td><td><input type="button" class="btn_del_db" value="삭제" onClick="do_delete(${temp_index})"></td><td><input type="button" class="btn_edit_db" value="수정" onClick="do_edit(${temp_index})"></td></tr>`);
            });    
        },
        error : function(return_data){
            alert(return_data);
        }
    });
};

const do_delete=(index)=>{
    $.ajax({
        url:"/api/del",
        type:"POST",
        data: {"index":index},
        success : function(return_data){
            do_load();
        },
        error : function(return_data){
            alert(return_data);
        }
    });
};

let index_edit;
const do_edit=(index)=>{
    $("#edit-popup").attr('style','visibility:visible');
    index_edit = index;
};

$("#btn_edit").click(()=>{
    const edit_memo=$("#edit_memo").val();
    const edit_time=$("#edit_time").val();
    
    $.ajax({
        url:"/api/edit",
        type:"POST",
        data:{"index":index_edit,"memo":edit_memo,"time":edit_time},
        success : function(return_data){
            do_load();
            $("#edit-popup").attr('style','visibility:hidden');
        },
        error : function(return_data){
            alert(return_data);
        }
    });
});

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
            do_load();
        },
        error : function(return_data){
            alert(return_data);
        }
    });
}); 

$(document).ready(()=>{
    do_load();
});