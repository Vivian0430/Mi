/**
 * Created by student on 2018/10/15.
 */
function checkuname() {
    var uname=document.getElementById("username");
    var warn=document.getElementById("warning");
    if(uname!=null && uname.value==""){
        uname.focus();
        warn.innerHTML=" ！请输入账号";
        return false;
    }else{
        warn.innerHTML=" ";
        checkCorrect();
        return checkCorrect();
    }
}
function checkCorrect(){
    var reg1 = null;
    var reg2 = null;
    var warn=document.getElementById("warning");
    var uname=document.getElementById("username");
    reg1 = /^[1][3,4,5,7,8][0-9]{9}$/;
    reg2 = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
    if (!reg1.test(uname.value) && !reg2.test(uname.value)){
        warn.innerHTML = " ！用户名不正确";
        return false;
    }else{
        checkpwd();
        return checkpwd();
    }
}
function checkpwd() {
    var warn=document.getElementById("warning");
    var pwd=document.getElementById("pwd");
    var uname=document.getElementById("username");
    if(pwd!=null && pwd.value==""){
        pwd.focus();
        warn.innerHTML=" ！请输入密码";
        return false;
    }else{
        warn.innerHTML=" ";
        mima();
        return mima();
    }
}
function mima() {
    var warn=document.getElementById("warning");
    var pwd=document.getElementById("pwd");
    if(pwd.value=="123456"){
        return true;
    }else{
        warn.innerHTML=" ！密码错误";
        return false;
    }
}