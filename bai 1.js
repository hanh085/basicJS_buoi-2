// bai 1: 
// viết chương trình nhập chiều dài, chiều rộng của HCN, tính chu vi và diện tích

var chDai = prompt('Nhập chiều dài của HCN: '); 
var chRong = prompt('Nhập chiều rộng của HCN: '); 

function Check(value)
{
    if(value === '' || value ===null)
    {
        console.log('giá trị chưa được nhập'); 
        return false; 
    }
    else if(isNaN(value))
    {
        console.log('giá trị ko là định dạng số ! '); 
        return false; 
    }
    else if (value <= 0)
    {
        console.log('giá trị <= 0'); 
        return false; 
    }
    return true; 
}

while (Check(chDai) == false)
{
    chDai = prompt('Nhập chiều dài của HCN: '); 
}
while (Check(chRong) == false)
{
    chRong = prompt('Nhập chiều rộng của HCN: '); 
}

console.log('Chieu dai = ',chDai); 
console.log('Chieu rong = ',chRong); 
console.log('Chu vi: ', 2*(1*chDai + 1*chRong)); 
console.log('Dien tich: ', chDai*chRong); 