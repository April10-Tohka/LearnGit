// setTimeout(()=>{
//     console.log("3s后输出");
//     setTimeout(()=>{
//         console.log("再等3s后输出");
//         setTimeout(()=>{
//             console.log("又要等3s后才输出");
//         },3000)
//     },3000)
// },3000)


// let p=new Promise((resolve,reject)=>{
//     console.log("new了一个promise");
//     setTimeout(() => {
//         console.log("2s后输出这句话");
//         resolve(88);
//     }, 2000);
// }).then((canshu)=>{
//     console.log("这里是第一个then的success,收到的参数：",canshu);
//     // console.log("第一个then如果返回一个值，不是promise对象，第二个then能收到这个参数并且执行吗");
//     // return 88;
//     console.log("第一个then如果返回一个promise对象，第二个then收到这个参数为");
//     return new Promise((resolve,reject)=>{
//         console.log("这里是第一个then返回的promise对象，这个promise对象是一个新的promise对象,后面的then是对这个promise进行操作!");
//         resolve(11);
//     })
// }).then((canshu)=>{
//     console.log("这里是第二个then的success,收到的参数：",canshu);
// })


// function myPromise()
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("2s后，resolve('good)");
//             resolve("good");
//         },2000);
//     })
// }
// myPromise().then((data)=>{
//     setTimeout(() => {
//         console.log("3s后，then输出");
//          console.log("第一个then收到的参数",data);
//     }, 3000);
   
// })
new Promise((resolve,reject)=>{
    console.log(x+2);
    resolve(66);
})
.then((data)=>{
    console.log("第一个then收到的参数",data);
})
.catch((err)=>{
    console.log("第一个promise的错误是",err);
})

new Promise((resolve,reject)=>{
    console.log("这是另一个promise");
    resolve("另一个promise");
}).then((data)=>{
    console.log("另一个then的输出:",data);
})

console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
console.log("6");

var foo={
    n:0,
    k:{
        n:0
    }
}
var bar =foo.k;
bar.n++;
bar={n:10}
bar=foo;
bar.n++;
bar=foo.n;
bar++;
console.log(`foo,n:${foo.n}, foo.k.n:${foo.k.n}`);


var foo={
    n:1
}
var arr=[foo];
function method1(arr)
{
    var bar=arr[0];
    arr.push(bar);
    bar.n++;
    arr=[bar];
    arr.push(bar);
    arr[1].n++;
}

function method2(foo)
{
    foo.n++;
}
function method3(n)
{
    n++;
}
method1(arr);
method2(foo);
method3(foo.n);
console.log(`foo.n:${foo.n}  ,arr.length:${arr.length}`);