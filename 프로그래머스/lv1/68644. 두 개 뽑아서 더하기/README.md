# [level 1] 두 개 뽑아서 더하기 - 68644 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/68644) 

### 성능 요약

메모리: 30.2 MB, 시간: 1.03 ms

### 구분

코딩테스트 연습 > 월간 코드 챌린지 시즌1

### 채점결과

<br/>정확성: 100.0<br/>합계: 100.0 / 100.0

### 문제 설명

<p style="user-select: auto;">정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.</p>

<hr style="user-select: auto;">

<h5 style="user-select: auto;">제한사항</h5>

<ul style="user-select: auto;">
<li style="user-select: auto;">numbers의 길이는 2 이상 100 이하입니다.

<ul style="user-select: auto;">
<li style="user-select: auto;">numbers의 모든 수는 0 이상 100 이하입니다.</li>
</ul></li>
</ul>

<hr style="user-select: auto;">

<h5 style="user-select: auto;">입출력 예</h5>
<table class="table" style="user-select: auto;">
        <thead style="user-select: auto;"><tr style="user-select: auto;">
<th style="user-select: auto;">numbers</th>
<th style="user-select: auto;">result</th>
</tr>
</thead>
        <tbody style="user-select: auto;"><tr style="user-select: auto;">
<td style="user-select: auto;"><code style="user-select: auto;">[2,1,3,4,1]</code></td>
<td style="user-select: auto;"><code style="user-select: auto;">[2,3,4,5,6,7]</code></td>
</tr>
<tr style="user-select: auto;">
<td style="user-select: auto;"><code style="user-select: auto;">[5,0,2,7]</code></td>
<td style="user-select: auto;"><code style="user-select: auto;">[2,5,7,9,12]</code></td>
</tr>
</tbody>
      </table>
<hr style="user-select: auto;">

<h5 style="user-select: auto;">입출력 예 설명</h5>

<p style="user-select: auto;">입출력 예 #1</p>

<ul style="user-select: auto;">
<li style="user-select: auto;">2 = 1 + 1 입니다. (1이 numbers에 두 개 있습니다.)</li>
<li style="user-select: auto;">3 = 2 + 1 입니다.</li>
<li style="user-select: auto;">4 = 1 + 3 입니다.</li>
<li style="user-select: auto;">5 = 1 + 4 = 2 + 3 입니다.</li>
<li style="user-select: auto;">6 = 2 + 4 입니다.</li>
<li style="user-select: auto;">7 = 3 + 4 입니다.</li>
<li style="user-select: auto;">따라서 <code style="user-select: auto;">[2,3,4,5,6,7]</code> 을 return 해야 합니다.</li>
</ul>

<p style="user-select: auto;">입출력 예 #2</p>

<ul style="user-select: auto;">
<li style="user-select: auto;">2 = 0 + 2 입니다.</li>
<li style="user-select: auto;">5 = 5 + 0 입니다.</li>
<li style="user-select: auto;">7 = 0 + 7 = 5 + 2 입니다.</li>
<li style="user-select: auto;">9 = 2 + 7 입니다.</li>
<li style="user-select: auto;">12 = 5 + 7 입니다.</li>
<li style="user-select: auto;">따라서 <code style="user-select: auto;">[2,5,7,9,12]</code> 를 return 해야 합니다.</li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges