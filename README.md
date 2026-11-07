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

## 설치와 로컬 미리보기

### 1. 저장소 준비

이미 GitHub Desktop 등으로 저장소를 내려받았다면 해당 폴더에서 터미널을 엽니다. 처음 내려받는 경우에는 다음과 같이 복제합니다.

```sh
git clone https://github.com/BeginnerProject3721/personal-portfolioSite-Beginner_project-.git
cd personal-portfolioSite-Beginner_project-
```

이하 명령은 모두 **저장소 루트**에서 실행합니다. `README.md`, `.github/`, `site/`가 있는 폴더이며, `site/` 안으로 이동하지 않습니다.

### 2. 도구와 의존성 준비

앞의 실행·빌드 환경에 명시된 도구를 먼저 설치하고, 아래 명령으로 터미널에서 인식되는지 확인합니다. Hugo 버전 출력에는 `extended`가 포함되어야 합니다.

```sh
hugo version
node --version
npm --version
go version
sass --version
python3 --version
```

그다음 제공된 도우미로 사이트의 npm 의존성을 설치합니다. 처음 실행하거나 의존성 파일이 변경되었을 때 진행합니다. 이 명령은 Hugo·Go·Python 등 도구 자체를 설치하는 명령은 아닙니다.

```sh
python3 .github/pages_build.py --dependencies
```

도우미는 `site/`의 패키지를 설치하며, 잠금 파일이 있으면 `npm ci`를 먼저 사용합니다. 잠금 파일이 없거나 해당 설치가 실패하면 `npm install`로 다시 시도하므로, 설치 후 잠금 파일 변경이 생겼다면 내용을 확인합니다.

### 3. 로컬 미리보기

```sh
hugo server --source site --config hugo.toml,pages.json --bind 127.0.0.1 --port 1313 --baseURL http://localhost:1313/ --appendPort=false --disableFastRender
```

서버 시작 후 브라우저에서 다음 주소를 엽니다.

- 메인: [http://localhost:1313/](http://localhost:1313/)
- 작품 상세: [http://localhost:1313/work/the-long-road/](http://localhost:1313/work/the-long-road/)

터미널을 실행한 상태로 두면 콘텐츠 수정 시 미리보기가 갱신됩니다. 서버를 종료하려면 해당 터미널에서 `Ctrl+C`를 누릅니다. 1313 포트가 사용 중이라면 기존 서버를 사용하거나, 명령의 `--port`와 `--baseURL`에 같은 다른 포트 번호를 지정합니다.

로컬 미리보기 주소는 본인의 컴퓨터에서 확인하는 주소이며, 공개 포트폴리오 주소와는 다릅니다.

## 배포용 파일 빌드

의존성을 설치한 뒤 저장소 루트에서 실행합니다.

```sh
python3 .github/pages_build.py --build
```

이 명령은 `site/hugo.toml`과 `site/pages.json`을 적용하고, GitHub Pages의 프로젝트 경로에 맞게 주소를 보정합니다. 성공하면 저장소 루트의 `public/`에 `index.html`, 작품 상세 페이지와 필요한 자산이 생성됩니다. 파일을 빌드하는 명령이므로 GitHub에 커밋하거나 푸시하지는 않습니다.

`public/`, `node_modules/`, `site/hugo_stats.json` 등의 자동 생성 파일은 커밋 대상에서 제외합니다. 화면 확인에는 위의 로컬 미리보기를 사용합니다. 배포용 HTML은 프로젝트 주소를 기준으로 생성되므로 파일을 직접 더블클릭해서 여는 방식으로 확인하지 않습니다.

루트 `package.json`의 `npm run build`와 `npm run serve`는 원본 테마의 `exampleSite`를 대상으로 합니다. 이 포트폴리오의 실행·빌드에는 위에 안내한 명령을 사용합니다.
