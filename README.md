# BYJ_DEV | PORTFOLIO

초급프로젝트 과제로 제작한 BYJ_DEV의 개인 포트폴리오 사이트입니다. Hugo와 Adritian 테마를 기반으로 관심 분야와 학습 목표, 개인 작업물을 소개합니다.

- [공개 포트폴리오 사이트](https://beginnerproject3721.github.io/personal-portfolioSite-Beginner_project-/)
- [GitHub 저장소](https://github.com/BeginnerProject3721/personal-portfolioSite-Beginner_project-)

## 사이트 구성

- **메인 페이지:** 활동명, 소개, 학습 목표와 작업물 카드를 제공합니다.
- **The Long Road 상세 페이지:** 스크롤에 따라 풍경과 이야기가 이어지는 개인 프로젝트를 시연 영상, 장면 사진, 기획과 제작 과정으로 소개합니다.
- **화면과 조작:** PC·모바일 대응, 라이트·다크 모드, 키보드 조작과 ‘동작 줄이기’ 설정을 고려했습니다.

The Long Road는 영상·사진·설명으로 소개합니다. 작품 전체를 실행하는 원본 HTML과 실행 파일, 별도 음원 파일은 이 저장소의 배포 대상에 포함하지 않습니다.

## 사용 테마와 사이트 위치

[Adritian Free Hugo Theme](https://github.com/zetxek/adritian-free-hugo-theme)를 기반으로 제작했습니다. 원본 테마의 MIT 라이선스와 저작권 고지는 [LICENSE](LICENSE)와 [site/LICENSE](site/LICENSE)에 보존되어 있습니다.

실제 포트폴리오의 소스는 **`site/`**에 있습니다. 저장소 루트에는 원본 테마의 파일도 남아 있으므로, 루트의 테마 예제와 실제 배포 사이트를 구분해야 합니다. 배포 시 생성되는 결과물은 루트의 `public/` 폴더에 저장됩니다.

[site/README.md](site/README.md)는 보존된 원본 테마 설명서입니다. 원본의 설치 예제와 다른 호스팅 서비스 안내는 현재 포트폴리오의 실행·배포 절차와 다를 수 있습니다.

## 실행·빌드 환경

아래 버전은 이 저장소의 [GitHub Actions 배포 설정](.github/workflows/hugo-pages.yml)에 지정된 환경입니다. 로컬에서 같은 빌드를 재현할 때에도 이 버전을 기준으로 준비합니다. 도구의 최소 지원 버전을 뜻하지는 않습니다.

| 도구 | 배포 설정의 버전 | 용도 |
| --- | --- | --- |
| Hugo Extended | 0.167.0 | 콘텐츠와 템플릿을 정적 사이트로 빌드 |
| Node.js | 24 | 테마의 JavaScript 도구 실행 및 npm 패키지 설치 |
| npm | Node.js 환경에서 제공 | `site/package-lock.json`을 기준으로 의존성 설치 |
| Go | 1.27.1 | Hugo 모듈 관련 도구 환경 |
| Dart Sass | 1.105.0 | 테마의 SCSS 스타일 처리 |
| Python | 3.12 | 제공된 빌드 도우미 실행 |

배포 작업은 GitHub Actions의 `ubuntu-latest` 환경에서 실행됩니다. 로컬에서는 필요한 도구를 설치하고 터미널에서 실행할 수 있도록 PATH를 설정해야 합니다. npm 의존성은 [site/package.json](site/package.json)과 [site/package-lock.json](site/package-lock.json)에서 관리합니다.

사이트는 한국어를 기본 언어로 사용하며, [site/hugo.toml](site/hugo.toml)과 [site/pages.json](site/pages.json)을 함께 적용해 빌드합니다. 공개 호스팅에는 GitHub Pages를 사용합니다.
