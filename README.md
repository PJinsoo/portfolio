# 👋 JinSoo's Portfolio

기록하고 회고하며 성장하는 개발자 **박진수**의 개인 포트폴리오 웹 페이지 프로젝트입니다.  
화면 크기에 따라 최적화된 반응형 웹으로 구축되었습니다.

---

## 🚀 2026.06 메이저 환경 최신화 완료
프로젝트의 안정성과 최신 스펙 반영을 위해 대대적인 마이그레이션을 진행하였습니다.
* **Next.js 13 ➔ Next.js 16 업그레이드**: 디렉토리 구조를 **App Router**(`app/` 디렉토리) 규격으로 리팩토링하였습니다.
* **React 16 ➔ React 19 업그레이드**: React 19 최신 런타임 환경을 도입하였습니다.
* **Tailwind CSS v3 스펙 고정**: 기존 반응형 레이아웃 및 스타일의 완벽한 하위 호환성을 보장하기 위해 Tailwind CSS v3(3.4.4)로 버전을 고정하고 설정을 정비하였습니다.
* **배포 환경 최적화**: Vercel Node.js 24 런타임 및 Next.js 정적 내보내기(`output: 'export'`) 환경 구축을 완료하였습니다.

---

## 🛠️ 기술 스택 (Tech Stack)

### Front-End
* **Framework**: Next.js 16.2.x (App Router)
* **Library**: React 19.2.x, Swiper 11.1.x, react-modal, Headless UI
* **Language**: TypeScript 5.x
* **Styling**: Tailwind CSS v3.4.x, Sass

### Deployment
* **Platform**: Vercel
* **Mode**: Static HTML Export (`output: 'export'`)
* **Node.js Runtime**: 24.x (Vercel Project Settings)

---

## 🏗️ Build

### 의존성 설치
```bash
npm install --legacy-peer-deps
```

### 로컬 개발 서버 실행
```bash
npm run dev
```
실행 후 브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하여 결과를 확인할 수 있습니다.

### 정적 빌드 테스트
```bash
npm run build
```
빌드 성공 시 `out/` 폴더 내에 최적화된 정적 HTML/CSS/JS 리소스 파일들이 생성됩니다.