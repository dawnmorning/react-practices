# ex06 : image 모듈 번들링

1. 설치 패키지
   `$ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader node-sass`
2. 번들링 환경(webpakc.config.js)설정

- entry
- output
- devServer
- module: {
  rules: [
  {
  test: /\.css$/i,
  use: ["style-loader", "css-loader"],
  },
  ],
  },

3. 스크립팅
   "scripts" : {
   "start": "npx webpack serve --progress",
   "build": "npx webpack"
   }
