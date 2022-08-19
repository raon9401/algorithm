function solution(survey, choices) {
  let result = "";
  const surveyObj = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0
  };
  for(let i = 0; i < survey.length; i++){
    // choices가 4보다 작을 경우(1,2,3) - 각 3점 2점 1점 추가
    // survey[i][0]에 점수 추가
    if(choices[i] === 1) surveyObj[survey[i][0]] += 3;
    if(choices[i] === 2) surveyObj[survey[i][0]] += 2;
    if(choices[i] === 3) surveyObj[survey[i][0]] += 1;

    // choices가 4보다 클 경우(5,6,7) - 각 1점 2점 3점 추가
    // survey[i][1]에 점수 추가
    if(choices[i] === 5) surveyObj[survey[i][1]] += 1;
    if(choices[i] === 6) surveyObj[survey[i][1]] += 2;
    if(choices[i] === 7) surveyObj[survey[i][1]] += 3; 
  }
  // R T 비교
  if(surveyObj.R >= surveyObj.T) result+="R";
  else result+="T";
  // C F 비교
  if(surveyObj.C >= surveyObj.F) result+="C";
  else result+="F";
  // J M 비교
  if(surveyObj.J >= surveyObj.M) result+="J";
  else result+="M";
  // A N 비교
  if(surveyObj.A >= surveyObj.N) result+="A";
  else result+="N";
  
  return result;
}