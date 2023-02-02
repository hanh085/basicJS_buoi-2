// Bài 9: Viết chương trình nhập 1 số và kiểm tra có phải số hoàn hảo không?

var n = 1*prompt('Nhập 1 số'); 

if (isPerfectNumber(n) == true)
{
    console.log('%i là số hoàn hảo',n); 
}
else 
    console.log('%i không là số hoàn hảo',n);  


function isPerfectNumber(n)
{
    
    if(Check(n) == false)
    {
        return false; 
    }
    else
    {
        var T=0; 
        for(let i=0; i<n; i++)
        {
            if(n%i == 0)
            {
                T += i; 
            }
        }
    
        if (T == n)
        {
            return true; 
        }
        else return false; 
    } 
       
}


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