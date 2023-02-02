// Bài 8: Viết chương trình nhập 1 số và kiểm tra có phải số nguyên tố không? 

var n = 1*prompt('Nhập 1 số'); 
if(isPrime(n)==true)
{
    console.log('%i là số nguyên tố', n);
}
else
{
    console.log('%i không là số nguyên tố', n); 
}


function isPrime(value)
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
        console.log('giá trị <= 0'); 
        return false; 
    }
    else if (Number.isInteger(value) == false)
    {
        console.log('giá trị không là số nguyên !'); 
        return false; 
    }
    else // kiểm tra số nguyên tố
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
}


