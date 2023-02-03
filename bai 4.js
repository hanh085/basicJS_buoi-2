// bai 4: 
// giải pt bậc 1: ax + b = 0
// (làm tròn kq đến 2 chữ só thập phân)

alert('pt bac 1: ax+b = 0');
var a = prompt('Nhap a: ');
var b = prompt('Nhap b: ');

// Kiểm tra a, b 
while (Check(a) == false) {
    a = prompt('Nhap a: ');
}
while (Check(b) == false) {
    b = prompt('Nhap b: ');
}

// console.log(a); console.log(typeof(a));  
// console.log(b); console.log(typeof(a));
a = Number(a); // string -> number
b = Number(b);
// console.log(a); console.log(typeof(a));  
// console.log(b); console.log(typeof(a));


if (a != 0 && b != 0) {
    var x = -b / a;
    console.log('x = ', x.toFixed(2));
}
else if (a == 0 && b == 0) {
    console.log('pt vo so nghiem')
}
else if (a == 0 && b != 0) {
    console.log('pt vo nghiem')
}


function Check(value) {
    if (value === '' || value === null) {
        console.log('giá trị rỗng');
        return false;
    }
    else if (isNaN(value)) {
        console.log('giá trị ko là định dạng số');
        return false;
    }

    return true;
}
