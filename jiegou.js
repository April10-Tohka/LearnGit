// 数组的解构赋值

let [a,b,c]=[1,2,3];
console.log(a,b,c);
let [foo,[bar,baw],baz]=[10,[20,200],30];
console.log(foo,bar,baw,baz);//foo=10 bar=20 baz=30;
let [first,second,third]=[100,,300];
console.log(first,second,third);//first=100 second=undefined  third=300;
let [one,two,three]=[,,3];
console.log(one,two,three);//one=undefined two=undefined three=3;
let [head,...remain]=[1,2,3,4];
console.log(head,remain);//head=1  remain=[2,3,4];
console.log(remain[2]);

//数组解构可以有默认值
// 只有当对应的值是undefined，默认值才会生效
let [x,y=99]=[88];
console.log(x,y);


// 对象的解构赋值
let {fooa,bara}={fooa:'a',bara:'b'};
console.log(fooa,bara);
//数组解构跟对象解构不同，
// 在数组中，变量的值由位置决定，一一对应
// 在对象中，对象的属性是无序的，所以变量必须和属性名一致才能取到值
let {bian1,bian2,bian3}={bian2:'bbb',bian1:'aaa',bianthree:'ccc'};
console.log(bian1,bian2,bian3);