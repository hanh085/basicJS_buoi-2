// bai 4: 
// giải pt bậc 1: ax + b = 0
// (làm tròn kq đến 2 chữ só thập phân)

alert('pt bac 1: ax+b = 0'); 
var a = 1*prompt('Nhap a: '); 
var b = 1*prompt('Nhap b: '); 

while (Check(a) == false)
{
    a = 1*prompt('Nhap a: ');  
}
while (Check(b) == false)
{
    b = 1*prompt('Nhap b: ');  
}


if (a != 0 && b!= 0)
{
    var x = -b/a; 
    console.log('x = ', x.toFixed(2)); 
}
else if (a== 0 && b==0)
{
    console.log('pt vo so nghiem')
}
else if (a== 0 && b!=0)
{
    console.log('pt vo nghiem')
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