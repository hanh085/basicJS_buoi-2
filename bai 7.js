// Bài 7: Viết chương trình nhập vào 3 số a, b, c. Kiểm tra xem 3 số đó có lập thành 1 tam giác không? 
//      Đó là tam giác gì?

alert('Nhập độ dài 3 cạnh a, b, c của tam giác');
var a = prompt('Nhập độ dài cạnh a: ');
var b = prompt('Nhập độ dài cạnh b: ');
var c = prompt('Nhập độ dài cạnh c: ');

while (Check(a) == false) {
    a = prompt('Nhập độ dài cạnh a: ');
}
while (Check(b) == false) {
    b = prompt('Nhập độ dài cạnh b: ');
}
while (Check(c) == false) {
    c = prompt('Nhập độ dài cạnh c: ');
}

a = Number(a);
b = Number(b);
c = Number(c);

if (isTriangle(a, b, c) == false) {
    console.log('Không phải tam giác !');
} else {
    if (a == b || a == c || b == c) {
        if (a == b && b == c) {
            console.log("Tam giác đều ");
        }
        else if (isRightTriangle(a, b, c) == true) {
            console.log("Tam giác vuông cân ");
        }
        else {
            console.log("Tam giác cân ");
        }
    }
    else if ((a == b || a == c || b == c) == false && isRightTriangle(a, b, c) == true) {
        console.log("Tam giác vuông  ");
    }
    else {
        console.log('Tam giác thường');
    }

}


// kiểm tra cạnh 
function Check(value) {
    if (value === '' || value === null) {
        console.log('giá trị rỗng');
        return false;
    }
    else if (isNaN(value)) {
        console.log('giá trị ko là định dạng số');
        return false;
    }
    else if (value <= 0) {
        console.log('giá trị <= 0');
        return false;
    }

    return true;
}

// kiểm tra tam giác 
function isTriangle(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        return true;
    }
    else return false;
}

// kiểm tra tam giác vuông 
function isRightTriangle(a, b, c) {
    var m = a * a;
    var n = b * b;
    var p = c * c;

    if (m + n == p || m + p == n || n + p == m) {
        return true;
    }
    return false;
}
