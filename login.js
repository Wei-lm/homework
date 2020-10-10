define(['jquery', "jquery-cookie"], function($){
    function loginSend(){
        $("#button").click(function(){
            $.ajax({
                type: "post",
                url: "./php/login.php",
                data: {
                    username: $(".tel").val(),
                    password: $(".pwd").val()
                },
                success: function(result){
                    var obj = JSON.parse(result);
                    if(obj.code){
                        alert("登录失败")
                    }else{
                        alert("登录成功")
                        //将已经登录的用户名存储在cookie中
                        $.cookie("username", obj.username, {
                            expires: 7
                        })
                    }
                    $(".err_tip").show().find("span").html(obj.message);
                },
                error: function(msg){
                    console.log(msg);
                }
    
            })
        })
        
    }
    return {
        loginSend: loginSend
    }
})