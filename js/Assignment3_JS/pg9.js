function highestDigit(n) 
{ 
    var large = 0; 
    while(n!=0)  
    { 
        var r=n%10; 
        large = Math.max(r, large); 
        n = n / 10; 
    } 
    return large;
} 
var res=highestDigit(379);
console.log("The highest digit of the number is:",res);