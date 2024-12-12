// DOM API를 사용하여 HTML 생성

// root 요소를 선택합니다.
const root = document.getElementById('root');

// ul 요소 생성
const ul = document.createElement('ul');

// li 요소 생성 및 추가
const items = ['one', 'two', 'three'];
items.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  ul.appendChild(li);
});

// ul 요소를 root에 추가
root.appendChild(ul);