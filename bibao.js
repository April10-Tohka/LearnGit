function add()
{
    let num=1;//按道理，add()执行完毕后，该变量num应该被销毁的
    //add()返回一个函数，在这个函数中，需要使用变量num,使得变量num不被销毁
    return function(){
        let b=100
        setTimeout(() => {
        b++;
        num++;
        console.log(num,b);
        
    }, 1000);
    return num;
}
    
    
}
let a=add();//变量a来接收add()返回的函数表达式
console.log(a);//输出变量a
a();
let c=a();
console.log(c);
console.log(a());
// a();//调用add()返回的函数
// a();
// a();
// a();



function test()
{
    let timer;
    clearTimeout(timer);
    timer=setTimeout(() => {
        console.log("计时器要做的事!");
    }, 1000);
    console.log("timer:",timer);
}

function ceshi(func,time)
{
    console.log(func,time);
}
ceshi(()=>{console.log("!!!")},1000);

// 验证手机号码合法
function VerifyPhone(phone)
{
    var reg = /^1[3456789]\d{9}$/;
    // ^1  以1开头
    // [3456789] 第2位，使用原子表里的任意一个原子都可以
    // \d{9}$  第三位  朝后可以是任意数字  并且最后结尾必须是数字
    
    if(reg.test(phone)){
        console.log('合法');
        return true;
    }
    else{
        // console.log('不合法');
        console.log('手机格式不正确');
        return false;
    }
}
VerifyPhone(13727851381);


