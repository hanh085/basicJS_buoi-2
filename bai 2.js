
// bai 2: 
// viết chương trình nhập bán kính hình tròn, tính chu vi và diện tích 

var r = prompt('Nhap ban kinh: '); 

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
    else if (value <= 0)
    {
        console.log('giá trị <= 0')
        return false; 
    }

    return true; 
}

while(Check(r) == false)
{
    r = prompt('Nhap ban kinh: '); 
}

console.log('Ban kinh hinh tron = ',r); 
console.log('Chu vi hinh tron: ', 2*3.14*r); 
console.log('Dien tich hinh tron: ', 3.14*r*r); 