ex08: JSX튜토리얼

1.  특징1
2.  특징2

3.  설치

    1.  개발툴
        $ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader node-sass babel-loader @babel/core @babel/preset-env @babel/preset-react
    2.  라이브러리
        $ npm i react react-dom

4.  설정

    1.  webpack.config.js
    2.  babel.config.json

5.  스트립팅
    "scripts": {
    "start": "npx webpack serve --progress",
    "build": "npx webpack"
    }

6.  테스트 서버 실행
    $ npm start

7.  빌드
    $ npm run build
