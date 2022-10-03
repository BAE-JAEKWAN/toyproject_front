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

# 2022.09.37

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
>   - 현재 vue 개발자가 권장하는 것은 `.npm init vue@latest`
>   - [[출처](https://stackoverflow.com/questions/72189662/npm-init-vuelatest-vs-vue-create-projectname-to-generate-a-new-project)]
> - `.eslintrc.json`, `.prettierrc.json`, `.eslintrc.cjs`의 역할이 대체 뭐임?
>   - 없어도 잘 되던데?
