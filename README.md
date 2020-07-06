[![](https://data.jsdelivr.com/v1/package/gh/Jokuna/old_icampus/badge)](https://www.jsdelivr.com/package/gh/Jokuna/old_icampus)

<h1 align="center">
    성균관대학교 구 아캠 영상 다운로드
</h1>

## Table of Contents

* [Note](#note)
* [About the Project](#about-the-project)
* [Getting Started](#getting-started)

## 주의사항

강의 저작물은 학교의 저작물로서 저작권으로 보호되므로 무단 복제 또는 배포, 전송하는 행위는 저작권 침해 행위에 해당하여 민 * 형사상 책임을 질 수 있습니다.

따라서 다운로드한 영상은 개인 학습 목적으로만 사용해야 합니다.

또한 이 코드를 사용해서 발생한 어떠한 손해에도 제작자는 일체 책임을 지지 않으며, 문제 소지 있다면 삭제하도록 하겠습니다.

## About The Project

신규 아이캠퍼스가 정식 서비스를 시행함에 따라 이전 [`구 아이캠퍼스 서비스`](http://www.icampus.ac.kr)가 2020년 8월 31일부로 정식 서비스를 종료하게 되었습니다.

종료일자 이후에는 구 아이캠퍼스 접속이 불가능하여 보관이 필요한 데이터들은 미리 다운로드를 해야 합니다.

영상 컨텐츠의 경우 신규 아이캠퍼스와 동일한 방법으로는 불가능하여 다음과 같은 방법으로 다운로드를 진행할 수 있습니다.


## Getting Started

1. icampus.ac.kr 접속 후 로그인을 합니다.

2. 각 과목 강의 목록 페이지로 이동합니다.

3. f12 눌러서 개발자모드를 킨 후 `Console` 탭에 들어갑니다.

4. 다음을 복사해서 붙여넣고 Enter 치기
```js
var jq = document.createElement('script');
jq.src = "https://cdn.jsdelivr.net/gh/Jokuna/old_icampus/script.js"; 
document.getElementsByTagName('head')[0].appendChild(jq);
```

5. 마지막으로 `start();` 치고 Enter 쳐서 실행하기
![example](https://user-images.githubusercontent.com/39121933/86587819-56909580-bfc5-11ea-8639-e71f550442bf.png)

6. 몇 초 후 해당 과목의 강의 목록 페이지가 뜹니다.
![example2](https://user-images.githubusercontent.com/39121933/86588028-d454a100-bfc5-11ea-9e6b-be32ef984755.png)

7. 다운받고 싶은 강의를 클릭하여 영상을 연 후, 우클릭해서 저장합니다.
![example3](https://user-images.githubusercontent.com/39121933/86588087-f5b58d00-bfc5-11ea-93c7-076ed9354bde.png)

## 참고사항

- vod1-m.icampus.ac.kr에 영상이 저장되어 있는 경우 서버가 터져있어서 다운로드를 할 수 없습니다.
