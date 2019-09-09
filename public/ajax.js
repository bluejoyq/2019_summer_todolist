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
            location.reload(); //차후 수정바람 //웨 reload 안뒈?
        },
        error : function(return_data){
            alert(return_data);
        }
    });
});

const do_delete=(index)=>{
    $.ajax({
        url:"/api/del",
        type:"POST",
        data: {"index":index},
        success : function(return_data){
            console.log('dd');
            location.reload();
        },
        error : function(return_data){
            alert(return_data);
        }
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
                $("#todo_list").append(`<tr><td>${db.memo}</td><td>${db.time}</td><td><input type="button" class="btn_del_db" value="삭제" onClick="do_delete(${temp_index})"></td></tr>`);
            });    
        },
        error : function(return_data){
            alert(return_data);
        }
    });
        
});