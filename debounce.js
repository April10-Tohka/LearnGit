
//this的问题
function test()
{
    const context=this;
    let b=100;
    setTimeout(()=>{
        let a=1;
        let zhe=this;
        console.log("0.5s后输出a",a);
        console.log("settimeout函数里能访问到外面的变量吗",b);
        console.log("zhe===context?",context===zhe);
    },500);
    let c=this;
    console.log(c===context);
    // console.log("能访问到settimeout里的函数里的变量吗",a);

}
// test();


function box(para)
{
    const context=this;
    let a=1000;
    return function()
    {
        let inner=this;
        console.log("内部的函数能访问到外部的函数的变量吗?",a);
        console.log("内部的this===外部的this？",context===inner);
        setTimeout(()=>{
            let setthis=this;
            console.log("过1s后看看setthis===inner的this",setthis===inner,setthis===context);
            print(para)
        },1000)
    }
}
let limian=box(546353);
// limian();

function print(...para)
{
    console.log("para:",para);
    console.log("this.num:",this.num);
    console.log("this.zhi:",this.zhi);
    para.forEach((element)=>{
        console.log(element);
    })
}


// 要进行防抖处理的函数
function fangdou(func,time)
{
    let timer;
    let outerthis=this;
    this.zhi=55;
    return function(...shengyucanshu)
    {
        this.num=99;
        let innerargs=shengyucanshu;
        console.log("shengyucanshu:",shengyucanshu);
        console.log("输出innerargs:",innerargs);
        console.log("inner里的arguments:",innerargs[3]);
        let innerthis=this;
        console.log("outerthis===innerthis",outerthis===innerthis);
        // setTimeout(() => {
        //     let setthis=this;
        //     console.log("setthis===innerthis",setthis===innerthis);
        //     console.log("setthis===outerthis",setthis===outerthis);
        //     func.apply(innerthis,innerargs);
        // }, time);
        setTimeout(function(){
            // func.apply(outerthis,innerargs);
            func(innerargs);
        },time)
        
    }
}
// print();
// let q=fangdou(print,1000);
// q(1,2,3,4);

function dayin(params)
{
    console.log("要执行函数的this是不是全局变量？",this===globalThis);
    console.log("查看要执行函数的this",this);
    debugger;
}

function a(func)
{
    let outerthis=this;
    console.log(outerthis===globalThis);
    this.x=77;
    return function(...params)
    {
        let innerthis=this;
        this.y=55;
        console.log("outerthis===innerthis",outerthis===innerthis);
        console.log("inner函数的this和outer函数的this相同，那么能访问到outer的x",this.x);
        setTimeout(() => {
            let setthis=this;
            console.log(setthis===globalThis);
            console.log("setthis===innerthis",setthis===innerthis);
            console.log("setthis===outerthis",setthis===outerthis);
            func(params);
        }, 1000);
    }
}
// let test1=a(dayin);
// test1(1,2,3,4,5,6);


function sui()
{
    this.suinum=33;
    console.log("sui函数里的this",this);
}
function bian()
{
    console.log("bian函数里的this",this);
    console.log("sui跟bian函数的this都是全局对象,",this.suinum);
}
sui();
bian();

function iasjdo()
{
    return function(...params)
    {
        let th=this;
        // let args=arguments;
        let args=params;
        console.log(args);

    }
}
let sa=iasjdo();
sa(1,2,3,4,5,6,7,8,9);

function m()
{
    let jieguo;
    let timeid;
    timeid=setTimeout(() => {
        let result=true;
        console.log("延迟1s输出",result);
        
        // jieguo=result;//现在问题在于，jieguo局部变量，怎么将settimeout执行的函数的值赋给jieguo
    }, 1000);
    console.log(timeid);
    console.log("jieguo:",jieguo);
}
m();


function q()
{
    setTimeout((...canshu) => {
        console.log("能收到参数不",canshu);
    }, 1000,1,2,3,4,5,6,7);
}
q();







