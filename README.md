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

## 콘텐츠와 디자인 수정 위치

화면에 반영할 내용은 `site/` 아래에서 수정합니다. 아래 링크와 경로는 모두 저장소 루트를 기준으로 합니다.

| 수정할 내용 | 파일 또는 폴더 | 수정 위치와 역할 |
| --- | --- | --- |
| 메인의 활동명·한 줄 소개·GitHub 버튼 | [site/content/home/home.md](site/content/home/home.md) | `showcase-section`의 `title`, `subtitle`, `description`, `button_url` |
| 소개와 학습 목표 | [site/content/home/home.md](site/content/home/home.md) | `소개` 영역의 본문과 `학습 목표` 문단 |
| 작업물 카드의 제목·사진·짧은 소개·상세 링크 | [site/content/home/home.md](site/content/home/home.md) | `work-grid` 안의 `work-card`, 이미지 `src`·`alt`, `relref` 상세 링크 |
| 작품 상세 소개·시기·상태·영상·사진 설명 | [site/content/work/the-long-road.md](site/content/work/the-long-road.md) | 문서 상단 `+++` 사이의 `description`, `period`, `project_status`, `demo_video`, `gallery` 등 설정 |
| 목적·역할·제작 과정·도구·결과·한계 | [site/content/work/the-long-road.md](site/content/work/the-long-road.md) | 상단 설정 아래의 본문과 각 `<details>` 펼쳐보기 내용 |
| 작품 사진 파일 | [site/assets/images/projects/](site/assets/images/projects/) | 카드 대표 사진과 상세 페이지의 장면 사진 |
| 시연 영상 파일 | [site/static/media/](site/static/media/) | 현재 사용하는 `the-long-road-demo.webm` |
| 사이트 제목·상단 로고·상단 및 하단 메뉴 | [site/hugo.toml](site/hugo.toml) | `title`, `params.logo_text1`·`logo_text2`, `languages.ko.menus.header`·`footer` |
| 글자 크기·색상·간격·카드·모바일 배치 | [site/assets/css/custom.css](site/assets/css/custom.css) | 포트폴리오용 스타일과 라이트·다크, 화면 너비별 스타일 |
| 상세 페이지의 경로·영상·사진·본문 배치 | [site/layouts/_default/work-detail.html](site/layouts/_default/work-detail.html) | 상세 콘텐츠를 화면에 배치하는 템플릿 |
| 상단 메뉴와 하단 영역의 구조 | [site/layouts/partials/header.html](site/layouts/partials/header.html), [site/layouts/partials/footer.html](site/layouts/partials/footer.html) | 메뉴를 표시하는 구조와 공통 영역. 메뉴 이름·주소만 바꿀 때는 `site/hugo.toml`을 먼저 수정 |
| 펼쳐보기 모션 | [site/static/js/rad-animations.js](site/static/js/rad-animations.js) | 펼쳐보기 열기·닫기와 동작 줄이기 대응 |
| 영역 이동과 고정 상단 메뉴 | [site/static/js/smooth-scroll-init.js](site/static/js/smooth-scroll-init.js), [site/static/js/sticky-header.js](site/static/js/sticky-header.js) | 메뉴 이동, 모바일 메뉴 정리와 고정 헤더 동작 |

### 이미지·영상 경로를 바꿀 때

- 사진은 `site/assets/images/projects/`에 두고, 콘텐츠에서는 `images/projects/파일명.webp`처럼 **`site/assets/`를 제외한 경로**로 참조합니다.
- 영상은 `site/static/media/`에 두고, `demo_video`에는 `media/파일명.webm`처럼 **`site/static/`을 제외한 경로**를 사용합니다.
- 메인 카드의 사진 경로와 상세 페이지의 `cover`는 각각 지정되어 있습니다. 대표 사진을 교체할 때 두 위치를 함께 확인하고, `alt`·`cover_alt` 설명도 실제 장면에 맞게 수정합니다.
- 상세 장면 사진은 각 `[[gallery]]`의 `src`, `alt`, `caption`을 함께 수정합니다. `cover`는 현재 상세 페이지에서 영상 재생 전 보이는 이미지로 사용됩니다.
- 파일명의 대소문자와 확장자를 정확히 맞춥니다. The Long Road의 원본 실행 HTML·실행 코드·별도 음원 파일은 추가하지 않습니다.

### 문장·메뉴·스타일을 바꿀 때

내용만 바꾸는 경우에는 콘텐츠 파일을 먼저 수정하고, 화면 배치 자체를 바꿀 때 템플릿을 수정합니다. 메인 카드와 상세 페이지의 제목·짧은 소개는 별도 위치에 있으므로 표현이 일치하는지 함께 확인합니다.

소개 영역의 `about`, 작업물 영역의 `client-and-work-section`은 메뉴와 돌아가기 링크가 사용하는 식별자입니다. 변경할 경우 연결된 링크도 함께 맞춰야 합니다. 새 내부 페이지 링크는 메인 카드의 기존 `relref` 방식을 참고해 GitHub Pages의 프로젝트 경로에서도 연결되도록 작성합니다.

수정 후에는 앞의 로컬 미리보기에서 메인과 상세 페이지를 확인합니다. 스타일 변경은 PC·모바일과 라이트·다크 모드에서 확인하고, 카드·메뉴·펼쳐보기 변경은 키보드와 동작 줄이기 설정도 확인합니다. 빌드 결과인 `public/` 파일을 직접 수정하지 않습니다.
