// Bài 9: Viết chương trình nhập 1 số và kiểm tra có phải số hoàn hảo không?

var n = prompt('Nhập 1 số');
while (Check(n) == false) {
    n = prompt('Nhập 1 số');
}
n = Number(n);

if (isPerfectNumber(n) == true) {
    console.log('%i là số hoàn hảo', n);
}
else
    console.log('%i không là số hoàn hảo', n);


function isPerfectNumber(n) {
    if (n <= 0) {
        return false;
    }

    var T = 0;
    for (let i = 0; i < n; i++) {
        if (n % i == 0) {
            T += i;
        }
    }

    if (T == n) {
        return true;
    }
    else return false;

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
