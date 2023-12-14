const Afunction=(para)=>{
    console.log("输出传进来的参数",para);
    return para;
}
//定义一个函数Afunction，参数为para
let value=Afunction("!!你好啊!!");
//调用函数Afunction，传入参数"!!你好啊!!"
console.log(value);
let shuzu=[1,2,3];
var a=88;
shuzu.forEach((element)=>{
    console.log(element);
    var  b=100;
    a=b;
})
console.log(a);

function ceshi(url)
{
    //函数表达式存储在变量handler中
    let handler=function()
    {
        console.log("传来的参数:",url);
    }
    handler();
}
ceshi("iodjaoi");