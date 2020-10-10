define(["jquery"],function($){
    function registerSend(){
        $("#button").click(function(){
            $.ajax({
                type:"post",
                url:"./php/register.php",
                data:{
                    username:$(".tel").val(),
                    password:$(".pwd").val(),
                    repassword:$(".repwd").val(),
                    createTime:(new Date()).getTime()
                },
                success: function(result){
                    // alert(result);
                    var obj = JSON.parse(result);
                    if(obj.code){
                        alert("注册失败");
                    }else{
                        alert("注册成功");
                    }
                },
                error:function(msg){
                    console.log(msg);
                }
            })
        })
    }
    return{
        registerSend: registerSend
    }
})