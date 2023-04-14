# 🗒 프로젝트

**🔗 배포 링크 : https://yunkoo-wanted-todo.netlify.app/signin**  
**👼 테스트 계정 : ilovetest.gmail**  
**🔑 비밀번호 : 123123123**

## 소개

```
로그인, 회원가입이 가능 한 Todo-List, 유저 마다 개인의 할 일을 저장 할 수 있습니다.
Todo-List는 할 일 입력, 수정, 삭제, 완료 기능을 제공합니다.
```

<br>

# 🎬 프로젝트 시연

|                                                         1. 회원가입                                                         |                                                          2. 로그인                                                          |                                                         3. 로그아웃                                                         |
| :-------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://cdn.discordapp.com/attachments/1077822566032490499/1096421028172927016/bdfe8578b2898cb0.gif" width=245 /> | <img src="https://cdn.discordapp.com/attachments/1077822566032490499/1096421026683944990/c8958a960e086dbf.gif" width=245 /> | <img src="https://cdn.discordapp.com/attachments/1077822566032490499/1096421026327433356/79bea0c1cfcfa945.gif" width=245 /> |

<br>

|                                                        3. 할 일 생성                                                        |                                                        4. 할 일 수정                                                        |                                                        4. 할 일 삭제                                                        |
| :-------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://cdn.discordapp.com/attachments/1077822566032490499/1096421027891920995/77bce6ad88587295.gif" width=245 /> | <img src="https://cdn.discordapp.com/attachments/1077822566032490499/1096421027522810016/1ead749e8edc57b8.gif" width=245 /> | <img src="https://cdn.discordapp.com/attachments/1077822566032490499/1096421027132751872/5090b4688ece16c0.gif" width=245 /> |

# ⚙️ 기술스택

- react
- javascript
- chakra-ui
- axios
- react-router-dom
- eslint
- prettier

# 🗝 프로젝트 실행

1. GitHub repository 다운로드

```
$ git clone https://github.com/yunkooo/wanted-pre-onboarding-frontend.git
```

2. 의존성 패키지 설치

```
$ npm i
```

3. 프로젝트 실행

```
$ npm start
```

# 🗂 폴더구조

```
📦src
 ┣ 📂api
 ┃
 ┣ 📂components
 ┃ ┣ 📂Common
 ┃ ┃ ┣ 📂CommonButton
 ┃ ┃ ┗ 📂CommonInput
 ┃ ┣ 📂HOC
 ┃ ┃ ┗ 📂Auth
 ┃ ┣ 📂Layout
 ┃ ┣ 📂LoginForm
 ┃ ┣ 📂RegisterForm
 ┃ ┗ 📂todo
 ┃   ┣ 📂buttons
 ┃   ┃ ┣ 📂CancelBtn
 ┃   ┃ ┣ 📂DeleteBtn
 ┃   ┃ ┣ 📂LogoutBtn
 ┃   ┃ ┣ 📂ModifyBtn
 ┃   ┃ ┗ 📂UpdateBtn
 ┃   ┣ 📂TodoInput
 ┃   ┣ 📂TodoItem
 ┃   ┗ 📂TodoList
 ┣ 📂constant
 ┣ 📂context
 ┣ 📂lib
 ┃ ┣ 📂hooks
 ┃ ┣ 📂styles
 ┃ ┗ 📂utils
 ┣ 📂pages
 ┃ ┣ 📂SignIn
 ┃ ┣ 📂SignUp
 ┃ ┗ 📂Todo

```
