1. Backend

   1. 테스트(개발 모드)
      eclipse ctrl + f11 (스프링부트 애플리케이션 실행)
   2. 빌드(배포 - react-practices 위치)
      `mvn -f emaillist/backend exec:exec clean package`

   3. 테스트
      `java -Dspring.profiles.active=production -jar emaillist/backend/target/emaillist.jar`

2. frontend

3. deploy

   1. ssh(secure shell, ssh key 인증) 연결

   - key 생성하기
     `ssh-keygen -t rsa -b 2048 -m PEM -C "notify9637@naver.com"`
   - key 생성 확인
     `private key(개인키) 위치` : `~/.ssh/id_rsa`,
     `public key(공개키) 위치` : `~/.ssh/id_rsa.pub`, `cat id_rsa.pub`
   - 공개키를 서버에 설치하기
     `mv ~/.ssh/id_rsa.pub ~/.ssh/authorized_keys`

   - 잘 가지고 있기

   - 접속 테스트
     `ssh -i mykey.pem dawn@192.168.0.143`

   2. deploy: Publish Over SSH 플러그인 (Jenkins)

   - `Publish Over Plugin` 설치
   - `jenkins 관리 / system` 에서 확인
   - `SSH Servers` 등록: `springboot-publish-server`
   - 프로젝트의 빌드 후 조치(post-build action)의 `Send build artifacts over SSH` 설정
   - `emaillist.jar` : transfer

   - `java -Dspring.profile.active=production -jar /usr/local/poscodx2023/springboot-apps/emaillist07/emaillist.jar`
