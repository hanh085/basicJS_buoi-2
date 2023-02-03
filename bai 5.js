// bai 5: 
// giải pt bậc 1: ax^2 + bx + c = 0
// (làm tròn kq đến 2 chữ só thập phân)

alert('pt bac 2: ax^2 + bx + c = 0'); 
var a = prompt('Nhap a:');  
var b = prompt('Nhap b:'); 
var c = prompt('Nhap c:'); 

while (Check(a) == false)
{
    a = prompt('Nhap a: ');  
}
while (Check(b) == false)
{
    b = prompt('Nhap b: ');  
}
while (Check(c) == false)
{
    c = prompt('Nhap c: ');  
}

// console.log(a); console.log(typeof(a));  
// console.log(b); console.log(typeof(a));
a= Number(a); // string -> number
b= Number(b); 
c= Number(c);  
// console.log(a); console.log(typeof(a));  
// console.log(b); console.log(typeof(a));


var delta = b**2 - 4*a*c; 
var k = Math.sqrt(delta); 
var x1,x2; 

if (delta > 0)
{
    x1 = (-b + k)/ 2/a; 
    x2 = (-b - k)/ 2/a; 
    console.log('pt co 2 nghiem phan biet: ')
    console.log('x1 = ', x1.toFixed(2)); 
    console.log('x2 = ', x2.toFixed(2)); 
}
else if(delta == 0)
{
    x1 = -b / 2/ a; 
    x2=x1; 
    console.log('pt co 1 nghiem: ');
    console.log('x1 = ', x1.toFixed(2));  
}
else{
    console.log('pt vo nghiem'); 
}


function Check(value)
{
    if(value === '' || value === null)
    {
        console.log('giá trị rỗng'); 
        return false; 
    }
    else if (isNaN(value))
    {
        console.log('giá trị ko là định dạng số'); 
        return false; 
    }

    return true; 
}
