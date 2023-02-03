// Bài 10: Viết chương trình nhập 1 số và kiểm tra có phải số fibonacci không?

var n = prompt('Nhập 1 số');
while (Check(n) == false) {
    n = prompt('Nhập 1 số');
}
n = Number(n);

if (isFibonacci(n) == true) {
    console.log('%i là số fibonacci', n);
}
else
    console.log('%i không là số fibonacci', n);


function isFibonacci(n) { 
    if (n <= 0) {
        return false;
    }
    if (Check(n) == false) {
        return false;
    }
    else {
        var a = 1;
        var b = 1;
        var k = 0;

        while (k < n) {
            k = k + a + b;
            a = b;
            b = k;
        }
        if (k == n) {
            return true;
        }
        else return false;
    }

}


function Check(n) {
    if (n === '' || n === null) {
        console.log('giá trị rỗng');
        return false;
    }
    else if (isNaN(n)) {
        console.log('giá trị ko là định dạng số');
        return false;
    }
    return true;
}
