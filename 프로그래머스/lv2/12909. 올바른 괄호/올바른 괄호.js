function solution(s) {
  let cnt = 0;
  if(s[0] === ")" || s[s.length-1] === "("){
    return false;
  }
  
  for (let i of s) {
    if(i === "(") cnt++;
    else if(i === ")") cnt--;
      
    if(cnt < 0) return false;
  }
  return cnt === 0
 
}