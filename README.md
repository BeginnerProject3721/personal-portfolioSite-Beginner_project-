# BYJ_DEV | PORTFOLIO

초급프로젝트 과제로 제작한 개인 포트폴리오입니다. Hugo와 Adritian 테마를 기반으로 소개·학습 목표·작업물을 구성했습니다. 개인 프로젝트 **The Long Road**는 별도 상세 페이지에서 영상·사진·제작 과정으로 소개합니다.

- [공개 사이트](https://beginnerproject3721.github.io/personal-portfolioSite-Beginner_project-/)
- [GitHub 저장소](https://github.com/BeginnerProject3721/personal-portfolioSite-Beginner_project-)

## 실행 환경

아래는 [배포 워크플로](.github/workflows/hugo-pages.yml)에 지정된 버전입니다. 로컬에서도 해당 도구를 설치하고 터미널에서 실행할 수 있도록 PATH를 설정합니다.

| 도구 | 버전 |
| --- | --- |
| Hugo Extended | 0.167.0 (`hugo version` 출력에 `extended` 포함) |
| Node.js / npm | Node.js 24 / 함께 제공되는 npm |
| Go | 1.27.1 |
| Dart Sass | 1.105.0 |
| Python | 3.12 |

실제 사이트 소스는 **`site/`**이며, `site/hugo.toml`과 `site/pages.json`을 함께 적용합니다. 루트의 테마 예제와 [원본 설명서](site/README.md)는 참고용입니다.

## 설치·미리보기·빌드

저장소를 내려받은 뒤 **`README.md`, `.github/`, `site/`가 있는 저장소 루트**에서 아래 명령을 실행합니다.

**의존성 설치** — 처음 실행하거나 패키지 설정이 변경됐을 때 실행합니다. 위 도구 자체는 별도로 설치해야 합니다.

```sh
python3 .github/pages_build.py --dependencies
```

**로컬 미리보기**

```sh
hugo server --source site --config hugo.toml,pages.json --bind 127.0.0.1 --port 1313 --baseURL http://localhost:1313/ --appendPort=false --disableFastRender
```

[메인](http://localhost:1313/)과 [상세 페이지](http://localhost:1313/work/the-long-road/)에서 확인합니다. 종료는 `Ctrl+C`이며, 포트가 사용 중이면 `--port`와 `--baseURL`의 번호를 함께 바꿉니다.

**배포용 빌드**

```sh
python3 .github/pages_build.py --build
```

결과는 루트의 `public/`에 생성되고 GitHub Pages의 프로젝트 경로에 맞게 보정됩니다. `public/`, `node_modules/`, `site/hugo_stats.json`은 자동 생성되므로 커밋하지 않습니다. 루트의 `npm run build`·`npm run serve`는 원본 테마 예제용이므로 이 사이트에는 위 명령을 사용합니다.

## 콘텐츠와 디자인 수정 위치

| 수정할 내용 | 파일 또는 폴더 |
| --- | --- |
| 활동명·소개·학습 목표·GitHub 버튼·작업물 카드 | [site/content/home/home.md](site/content/home/home.md) |
| 작품 설명·제작 시기·상태·사진·영상 설정 | [site/content/work/the-long-road.md](site/content/work/the-long-road.md) — 상단 `+++` 사이의 설정과 아래 본문 |
| 작품 사진 / 시연 영상 | [site/assets/images/projects/](site/assets/images/projects/) / [site/static/media/](site/static/media/) |
| 사이트 제목·상단 로고·메뉴 | [site/hugo.toml](site/hugo.toml) — `title`, `params.logo_text1`·`logo_text2`, `languages.ko.menus` |
| 글자·색상·간격·카드·반응형 스타일 | [site/assets/css/custom.css](site/assets/css/custom.css) |
| 상세 페이지 배치 | [site/layouts/_default/work-detail.html](site/layouts/_default/work-detail.html) |
| 상단·하단 공통 구조 | [header.html](site/layouts/partials/header.html), [footer.html](site/layouts/partials/footer.html) |
| 펼쳐보기·영역 이동·고정 메뉴 동작 | [rad-animations.js](site/static/js/rad-animations.js), [smooth-scroll-init.js](site/static/js/smooth-scroll-init.js), [sticky-header.js](site/static/js/sticky-header.js) |

사진은 `images/projects/파일명.webp`, 영상은 `media/파일명.webm`처럼 콘텐츠에 경로를 적습니다. 파일명의 대소문자를 맞추고, 사진의 대체 텍스트와 설명도 함께 수정합니다. 메인 카드와 상세 페이지의 제목·소개·대표 사진은 각각 지정되어 있으므로 함께 확인합니다.

메뉴가 연결하는 `about`·`client-and-work-section` 식별자를 바꾸면 관련 링크도 수정합니다. 수정 후에는 로컬에서 PC·모바일, 라이트·다크 모드와 주요 링크·키보드 동작을 확인하고 빌드합니다.

## GitHub Actions 배포와 확인

1. 저장소 **Settings → Pages → Source**를 **GitHub Actions**로 설정합니다.
2. 로컬 확인을 마친 변경을 `main`에서 작업 단위로 커밋한 뒤 **Push origin**으로 올립니다. 여러 커밋을 한 번에 푸시해도 됩니다.
3. [Actions](https://github.com/BeginnerProject3721/personal-portfolioSite-Beginner_project-/actions/workflows/hugo-pages.yml)의 **Deploy Hugo to GitHub Pages**에서 최신 `main` 커밋과 실행 기록의 커밋이 같은지 확인합니다.
4. **`build`와 `deploy` 모두 성공**했는지 확인합니다. 워크플로는 `public/`의 빌드 결과를 GitHub Pages에 게시합니다.
5. [공개 메인](https://beginnerproject3721.github.io/personal-portfolioSite-Beginner_project-/)과 [상세 페이지](https://beginnerproject3721.github.io/personal-portfolioSite-Beginner_project-/work/the-long-road/)를 열어 수정 사항, 직접 접속·새로고침, 이미지·영상·메뉴를 확인합니다. 모바일 너비와 로그아웃 상태에서도 확인합니다.

실패하면 해당 실행의 실패한 단계를 열어 오류 메시지를 확인합니다. 이전 화면이 보이면 최신 커밋의 배포 성공 여부와 공개 주소를 먼저 확인한 뒤 새로고침합니다. 초기 준비 과정은 [배포 준비 기록](docs/deployment/SETUP.md)에 보존되어 있습니다.

## 자료 출처·라이선스·AI 활용

| 자료 | 출처와 사용 범위 |
| --- | --- |
| 테마·레이아웃 | [Adritian Free Hugo Theme](https://github.com/zetxek/adritian-free-hugo-theme)를 기반으로 포트폴리오에 맞게 수정 |
| 메인 일러스트·파비콘·공유 이미지 | 원본 테마와 예제에서 가져온 [showcase.png](site/assets/images/showcase/showcase.png), [favicon.png](site/assets/icons/favicon.png), [og-img.png](site/static/img/og-img.png) |
| 아이콘 | 테마에 포함된 아이콘 폰트 사용. [원본 설정](site/static/fonts/config.json)의 개별 출처 정보 유지 |
| 작품 사진·영상 | 본인의 The Long Road 실행 화면을 Codex의 도움으로 캡처·녹화. [사진](site/assets/images/projects/)과 [영상](site/static/media/the-long-road-demo.webm)은 실제 실행 장면 |
| 배포 도우미 | 수업 제공 `prepare_github_pages.py`로 준비한 [.github/pages_build.py](.github/pages_build.py) 사용 |

- **본인 역할:** 테마와 작업물 선택, 기획·요구사항 결정, 결과 확인과 수정 방향 판단, 공개 범위 결정 및 커밋·푸시를 수행했습니다.
- **Claude:** 개인 프로젝트 The Long Road의 코드 구현에 활용했습니다. 본인이 기획과 연출 방향을 정하고 단계별 결과를 확인하며 수정했습니다.
- **Codex:** 포트폴리오의 문장 정리, 설정·화면·동작 구현, 오류 분석·검증, 캡처·영상 준비와 README 작성에 활용했습니다. 본인이 제공한 정보와 요구사항을 바탕으로 AI가 작성·수정한 내용을 포함합니다.

Adritian의 MIT 라이선스와 Radity(2020), Adrián Moreno Peña(2022)의 저작권 고지는 [LICENSE](LICENSE)와 [site/LICENSE](site/LICENSE)에 보존했으며, 사이트 하단의 테마 저작자 표기도 유지합니다. 개별 자료·패키지의 별도 라이선스 고지도 따릅니다. 의존성은 [package.json](site/package.json)과 [package-lock.json](site/package-lock.json)에서 확인할 수 있습니다.

The Long Road는 영상·사진·설명과 일부 설명용 코드 예시로 소개하며, 작품 전체의 원본 HTML·실행 코드·별도 음원 파일은 포함하지 않습니다.
