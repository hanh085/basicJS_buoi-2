// Bài 8: Viết chương trình nhập 1 số và kiểm tra có phải số nguyên tố không? 

var n = prompt('Nhập 1 số'); 
while (Check(n) == false)
{
    n = prompt('Nhập 1 số'); 
}
n= Number(n); 

if(isPrime(n)==true)
{
    console.log('%i là số nguyên tố', n);
}
else
{
    console.log('%i không là số nguyên tố', n); 
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

function isPrime(value)
{
    if (value < 2)
    {
        return false; 
    }
    else if(value ==2)
    {
        return true; 
    }
    else 
    {
        var m= Math.sqrt(value); 
        for(let i=3; i<=m; i+=2)
        {
            if(value%i ==0)
            {
                return false; 
            }
        }
        return true; 
    }
    
}


