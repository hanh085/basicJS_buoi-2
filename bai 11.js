// Bài 11: Viết chương trình nhập 1 số và kiểm tra có phải số đối xứng không?

var n = prompt('Nhập 1 số'); // typerof n: string 

if(Check(1*n) == true)
{
    if (KiemTraDoiXung(n) == true)
{
    console.log('là số đối xứng'); 
}
else
{
    console.log('không là số đối xứng'); 
}
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
    else if (n <= 0)
    {
        console.log('giá trị <= 0'); 
        return false; 
    }
    
    return true; 
}