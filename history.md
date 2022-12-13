# 2022.09.07

## 사이드 프로젝트 과제 : 토이 프로젝트 (노션 카피 하기)

### 스펙

- vue3 기반 제작
  - pinia
  - type script
  - vite
- 노션 like 지향
  - UI, 기능 등 벤치마킹 하기

### 구현 목표 기능

- 게시물
  - 등록
  - 목록
  - 수정
  - 삭제
  - 에디터 솔루션 사용
  - 상세 페이지 출력
- 메뉴 구조 : 최대 3depth 까지 설정
- 회원
  - 로그인
  - 회원가입
  - 회원탈퇴
  - 아이디/비밀번호 찾기
- back office
  - 로그인
  - 게시글 관리
  - 회원관리

# 2022.09.20

## 차주까지 완수할 과제

화면기획서 작성

- 사용자 : 배재관
- 관리자 : 김동인

일정 산출

### P.S. 피그마 알아보기

# 2022.09.37

## 이번주 완료

### 기획서 작성

- [게시물](https://ovenapp.io/view/WHwRP1YDqNT4NL8JGKslQCSrmNfgTTTZ#nUYuK)
- [메뉴 구조](https://ovenapp.io/view/WHwRP1YDqNT4NL8JGKslQCSrmNfgTTTZ/ytU7G)
- [회원](https://ovenapp.io/view/WHwRP1YDqNT4NL8JGKslQCSrmNfgTTTZ/nUYuK)

### 디자인 서치

- Bootstrap VUE3
  - [GitHub](https://github.com/cdmoro/bootstrap-vue-3)
  - [홈페이지](https://cdmoro.github.io/bootstrap-vue-3/)
  - 장점 : 쓰기 쉽다! 무난하게 이쁘다! 컴포넌트 많다!
  - 단점 : 커스터마이징 어려움!
- Vuetify
  - [GitHub](https://github.com/vuetifyjs/vuetify)
  - [홈페이지](https://vuetifyjs.com/en/)
  - 장점 : 호환성 갑! 지속적인 업데이트! 레퍼런스 많음!
  - 단점 : 이것도 커스터마이징 어려움!
    > 출처 : https://imagineu.tistory.com/9

> Bootstrap VUE3로 선정!
>
> - 사유 : Vuetify는 vue3 지원 안 함...

## 오늘 논의한 거

코딩 컨벤션

- [esLint AirBnb](https://velog.io/@jiseong/React-ESLint-Prettier-%EC%84%A4%EC%A0%95-airbnb-style-%EC%A0%81%EC%9A%A9) 스타일 적용.
- [VUE3 퀵스타트](https://vuejs.org/guide/quick-start.html#creating-a-vue-application) 설정 적용.
- [VUE 스타일 가이드](https://v3.ko.vuejs.org/style-guide/) 참고하기.
- 날짜 라이브러리 : day.js
- 데이터 포맷팅 : [Intl](https://www.daleseo.com/js-intl-api/)
- [Pinia](https://pinia.vuejs.org/)
- 폴더구조 : [sliDev](https://github.com/slidevjs/slidev) 참고.
- [typeScript](https://www.samsungsds.com/kr/insights/typescript.html)
- VUE3 강의 좀 들어야 할 듯.

gitHub 정책

- 개인 계정으로 업로드.
- 서로의 gitHub에 서로 초대하기.

## 다음 일정

- 기획서 보완 [~09.29]
  - 기획서 표지 만들기
  - 순서 로그인부터 나오게 하기
- 개발환경 세팅 [~09.30]

# 2022.09.27

## 이번주 완료

- 기획서 보완

  - 기획서 표지 만들기
  - 순서 로그인부터 나오게 하기

- 개발환경 세팅

> 개발환경 세팅하면서 발생한 의문점
>
> - `npm init vue@latest` 와 `vue create <projectName>` 의 차이점은 무엇인가??
>   - 전자는 Vite 및 Rollup을 사용
>   - 후자는 Vue CLI와 Webpack을 사용
>   - 현재 vue 개발자가 권장하는 것은 `npm init vue@latest`
>   - [[출처](https://stackoverflow.com/questions/72189662/npm-init-vuelatest-vs-vue-create-projectname-to-generate-a-new-project)]
> - `.eslintrc.json`, `.prettierrc.json`, `.eslintrc.cjs`의 역할이 대체 뭐임?
>   - 없어도 잘 되던데?
> - 날짜를 비롯한 데이터 포맷팅은 `Intl`을 사용할건데 `day.js`가 굳이 필요한가?

## 다음주 예정

- [vue-router](https://im-designloper.tistory.com/19) 설정
- 사용자 영역 레이아웃 구성 : `bootstrap` 기반

# 2022.10.11

## 이번주 완료

- 공통 영역 세팅

  - bootstrap 기반
  - 헤더/컨텐츠 영역 분리

- 에러 메세지 해결 시도

  > 'xxx' 모듈 또는 해당 형식 선언을 찾을 수 없습니다.

  - 파일 경로 : src\router\index.ts
  - tsconfig.json에서 typeRoots를 설정
  - vsCdoe에서 F1 눌러서 typescript 버전 4.xx 로 변경
  - [[출처](https://velog.io/@hyunjoong/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%AA%A8%EB%93%88-%EC%97%90-%EB%8C%80%ED%95%9C-%EC%84%A0%EC%96%B8-%ED%8C%8C%EC%9D%BC%EC%9D%84-%EC%B0%BE%EC%9D%84-%EC%88%98-%EC%97%86%EC%8A%B5%EB%8B%88%EB%8B%A4)]
  - 결과 : 미해결

  > JavaScript | 'name' is declared but its value is never read.

  - 파일 경로 : src\main.ts
  - 뜻 : 'name'을 정의했는데 사용하지 않았다. 쓰지도 않을 변수를 왜 정의했냐는 뜻. 그런데 해결하려면 어떻게??
  - [[출처](https://am05307.tistory.com/76)]

# 2022.10.18

## 이번주 완료

### 퍼블리싱

- 게시물 목록

## 다음주 목표

### 퍼블리싱

- 게시물 상세
- composition API 컨버전
- 타입스크립트 적용

# 2022.11.01

### MOCK 서버 구축해보기

- https://antdevhistory.tistory.com/3
- https://www.daleseo.com/mock-service-worker/

### AWS 배포 알아보기

# 2022.12.13

- routes 설정 자동화 : vite-plugin-pages
- setup 문법 변경
- MOCK 서버 설정 및 연동
