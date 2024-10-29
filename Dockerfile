# 1. Build step: Node.js 20.9.0을 사용하여 Vite 애플리케이션을 빌드합니다.
FROM node:20.9.0-alpine AS build

# 작업 디렉토리 생성
WORKDIR /app

# package.json 및 package-lock.json 복사
COPY package*.json ./

# 의존성 설치
#RUN npm install

# 소스 코드 복사
COPY . .

# Vite 애플리케이션 빌드
RUN npm run build

# 2. Production step: Nginx를 사용하여 빌드 결과물을 서빙합니다.
FROM nginx:alpine

# 빌드 결과물을 Nginx로 복사
COPY --from=build /app/dist /usr/share/nginx/html

# Nginx 설정 파일을 커스텀할 경우 (필수 아님)
# COPY nginx.conf /etc/nginx/nginx.conf

# Nginx 포트를 외부로 노출
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]
