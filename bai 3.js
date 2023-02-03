// bai 3: 
// Viết chương trình nhập 2 số a,b 
// Tính tổng, hiệu, tích, thương (chia lấy số thập phân, lấy phần dư) 

var a, b;
a = prompt('Nhap a: ');
b = prompt('Nhap b: ');

while (Check(a) == false) {
    a = prompt('Nhap a: ');
}
while (Check(b) == false) {
    b = prompt('Nhap b: ');
}
a = Number(a);
b = Number(b);

console.log('a =', a);
console.log('b =', b);

var tong = a + b;
var hieu = a - b;
var tich = a * b;
var thuong1 = a / b;
var thuong2 = a % b;
console.log(tong);
console.log(hieu);
console.log(tich);
console.log(thuong1);
console.log(thuong2);
// chỉnh dấu '' trong console ???? 


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
