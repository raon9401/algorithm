# [level 1] 3진법 뒤집기 - 68935 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/68935) 

### 성능 요약

메모리: 30.4 MB, 시간: 4.81 ms

### 구분

코딩테스트 연습 > 월간 코드 챌린지 시즌1

### 채점결과

<br/>정확성: 100.0<br/>합계: 100.0 / 100.0

### 문제 설명

<p style="user-select: auto;">자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.</p>

<hr style="user-select: auto;">

<h5 style="user-select: auto;">제한사항</h5>

<ul style="user-select: auto;">
<li style="user-select: auto;">n은 1 이상 100,000,000 이하인 자연수입니다.</li>
</ul>

<hr style="user-select: auto;">

<h5 style="user-select: auto;">입출력 예</h5>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">n</th>
<th style="user-select: auto;">result</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">45</td>
<td style="user-select: auto;">7</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">125</td>
<td style="user-select: auto;">229</td>
</tr>
</tbody>
      </table>
<hr style="user-select: auto;">

<h5 style="user-select: auto;">입출력 예 설명</h5>

<p style="user-select: auto;">입출력 예 #1</p>

<ul style="user-select: auto;">
<li style="user-select: auto;">답을 도출하는 과정은 다음과 같습니다.</li>
</ul>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">n (10진법)</th>
<th style="user-select: auto;">n (3진법)</th>
<th style="user-select: auto;">앞뒤 반전(3진법)</th>
<th style="user-select: auto;">10진법으로 표현</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">45</td>
<td style="user-select: auto;">1200</td>
<td style="user-select: auto;">0021</td>
<td style="user-select: auto;">7</td>
</tr>
</tbody>
      </table>
<ul style="user-select: auto;">
<li style="user-select: auto;">따라서 7을 return 해야 합니다.</li>
</ul>

<p style="user-select: auto;">입출력 예 #2</p>

<ul style="user-select: auto;">
<li style="user-select: auto;">답을 도출하는 과정은 다음과 같습니다.</li>
</ul>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">n (10진법)</th>
<th style="user-select: auto;">n (3진법)</th>
<th style="user-select: auto;">앞뒤 반전(3진법)</th>
<th style="user-select: auto;">10진법으로 표현</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">125</td>
<td style="user-select: auto;">11122</td>
<td style="user-select: auto;">22111</td>
<td style="user-select: auto;">229</td>
</tr>
</tbody>
      </table>
<ul style="user-select: auto;">
<li style="user-select: auto;">따라서 229를 return 해야 합니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges