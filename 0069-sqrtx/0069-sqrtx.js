/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x < 1) return 0;
    if(x === 1) return 1;
    
    let i;
    let end = x;
    let start = 0;
    
    while(start <= end){
       let mid = Math.floor((start + end)/2);
        const multiply = mid * mid;
        
       if(multiply == x){
          i = mid;
          break;
       }
       
        if(multiply < x){
           start = mid + 1;
            i = mid;
        }
        
        
        if(multiply > x){
            end = mid - 1;
        }
        
        
    }
    
    return i; 
    
    
};