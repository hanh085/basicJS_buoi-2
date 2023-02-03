// Bài 11: Viết chương trình nhập 1 số và kiểm tra có phải số đối xứng không?

var n = prompt('Nhập 1 số'); // typerof n: string 
while (Check(n) == false)
{
    n = prompt('Nhập 1 số'); 
}
// typeof(n) = string 


if (KiemTraDoiXung(n) == true)
{
    console.log('%s là số đối xứng', n);  
}
else
{
    console.log('%s không là số đối xứng',n); 
}



function KiemTraDoiXung(n) // kiểm tra chuỗi đối xứng 
{
    for (let i=0; i< n.length/3; i++)
    {
        if (n[i] != n[n.length - 1 -i])
        {
            return false; 
        }
    }
    return true; 
}

// kiểm tra số hợp lệ 
function Check(n)
{
    if(n === '' || n === null)
    {
        console.log('giá trị rỗng'); 
        return false; 
    }
    else if (isNaN(n))
    {
        console.log('giá trị ko là định dạng số'); 
        return false; 
    }
    
    return true; 
}
