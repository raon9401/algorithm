# [level 1] 약수의 개수와 덧셈 - 77884 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/77884) 

### 성능 요약

메모리: 30.2 MB, 시간: 0.06 ms

### 구분

코딩테스트 연습 > 월간 코드 챌린지 시즌2

### 채점결과

<br/>정확성: 100.0<br/>합계: 100.0 / 100.0

### 문제 설명

<p style="user-select: auto;">두 정수 <code style="user-select: auto;">left</code>와 <code style="user-select: auto;">right</code>가 매개변수로 주어집니다. <code style="user-select: auto;">left</code>부터 <code style="user-select: auto;">right</code>까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.</p>

<hr style="user-select: auto;">

<h5 style="user-select: auto;">제한사항</h5>

<ul style="user-select: auto;">
<li style="user-select: auto;">1 ≤ <code style="user-select: auto;">left</code> ≤ <code style="user-select: auto;">right</code> ≤ 1,000</li>
</ul>

<hr style="user-select: auto;">

<h5 style="user-select: auto;">입출력 예</h5>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">left</th>
<th style="user-select: auto;">right</th>
<th style="user-select: auto;">result</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">13</td>
<td style="user-select: auto;">17</td>
<td style="user-select: auto;">43</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">24</td>
<td style="user-select: auto;">27</td>
<td style="user-select: auto;">52</td>
</tr>
</tbody>
      </table>
<hr style="user-select: auto;">

<h5 style="user-select: auto;">입출력 예 설명</h5>

<p style="user-select: auto;"><strong style="user-select: auto;">입출력 예 #1</strong></p>

<ul style="user-select: auto;">
<li style="user-select: auto;">다음 표는 13부터 17까지의 수들의 약수를 모두 나타낸 것입니다.</li>
</ul>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">수</th>
<th style="user-select: auto;">약수</th>
<th style="user-select: auto;">약수의 개수</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">13</td>
<td style="user-select: auto;">1, 13</td>
<td style="user-select: auto;">2</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">14</td>
<td style="user-select: auto;">1, 2, 7, 14</td>
<td style="user-select: auto;">4</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">15</td>
<td style="user-select: auto;">1, 3, 5, 15</td>
<td style="user-select: auto;">4</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">16</td>
<td style="user-select: auto;">1, 2, 4, 8, 16</td>
<td style="user-select: auto;">5</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">17</td>
<td style="user-select: auto;">1, 17</td>
<td style="user-select: auto;">2</td>
</tr>
</tbody>
      </table>
<ul style="user-select: auto;">
<li style="user-select: auto;">따라서, 13 + 14 + 15 - 16 + 17 = 43을 return 해야 합니다.</li>
</ul>

<p style="user-select: auto;"><strong style="user-select: auto;">입출력 예 #2</strong></p>

<ul style="user-select: auto;">
<li style="user-select: auto;">다음 표는 24부터 27까지의 수들의 약수를 모두 나타낸 것입니다.</li>
</ul>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">수</th>
<th style="user-select: auto;">약수</th>
<th style="user-select: auto;">약수의 개수</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;">24</td>
<td style="user-select: auto;">1, 2, 3, 4, 6, 8, 12, 24</td>
<td style="user-select: auto;">8</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">25</td>
<td style="user-select: auto;">1, 5, 25</td>
<td style="user-select: auto;">3</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">26</td>
<td style="user-select: auto;">1, 2, 13, 26</td>
<td style="user-select: auto;">4</td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;">27</td>
<td style="user-select: auto;">1, 3, 9, 27</td>
<td style="user-select: auto;">4</td>
</tr>
</tbody>
      </table>
<ul style="user-select: auto;">
<li style="user-select: auto;">따라서, 24 - 25 + 26 + 27 = 52를 return 해야 합니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges