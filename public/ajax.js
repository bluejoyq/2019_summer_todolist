const do_load=()=>{
    $.ajax({
        url:"/api/load",
        type:"GET",
        data_type:"JSON",
        async: false,
        success : function(return_data){
            todo_index = return_data.db_index;
            $("#todo-list").html("");
            $("#todo-list").append("<tr><td>할일</td><td>메모</td><td>시간</td><td>삭제</td><td>수정</td></tr>");
            return_data.db.forEach(db=>{
                let temp_index = (db.index).toString();
                $("#todo-list").append(`<tr><td><span class="db-text" id="db-title-${temp_index}">${db.title}</span></td>
                <td><span class="db-text" id="db-memo-${temp_index}">${db.memo}</span></td>
                <td><span class="db-text" id="db-time-${temp_index}">${db.time}</span></td>
                <td><input type="button" class="btn-mini" value="삭제" onClick="do_delete(${temp_index})"></td>
                <td><input type="button" class="btn-mini" value="수정" onClick="do_edit(${temp_index})"></td></tr>`);
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
    $(".box-add-popup").attr('style','visibility:visible');
    $("#popup-main").text("수정하기");
    $("#btn-submit").val("수정");
    $("#add-title").val($(`#db-title-${index}`).text());
    $("#add-memo").val($(`#db-memo-${index}`).text());
    $("#add-time").val($(`#db-time-${index}`).text());
    index_edit = index;
};

$("#btn-submit").click(()=>{
    const title=$("#add-title").val();
    const memo=$("#add-memo").val();
    const time=$("#add-time").val();
    
    $(".box-add-popup").attr('style','visibility:hidden');
    $("#add-title").val("");
    $("#add-memo").val("");
    $("#add-time").val("");
    
    if(time==""){
        alert("날짜를 채워주세요!");
        return false;
    }

    if($("#popup-main").text()=="추가하기"){
        $.ajax({
            url:"/api/add",
            data:{"title":title,"memo":memo,"time":time},
            type:"POST",
            success : function(return_data){
                do_load();
            },
            error : function(return_data){
                alert(return_data);
            }
        });
    }
    else{
        $.ajax({
            url:"/api/edit",
            type:"POST",
            data:{"index":index_edit,"title":title,"memo":memo,"time":time},
            success : function(return_data){
                do_load();
            },
            error : function(return_data){
                alert(return_data);
            }
        });
    }
    
}); 

$(document).ready(()=>{
    do_load();
});