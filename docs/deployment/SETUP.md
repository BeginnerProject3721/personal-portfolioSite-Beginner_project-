# Adritian 과제 배포 준비

원본: https://github.com/zetxek/adritian-free-hugo-theme
원본 ZIP: https://codeload.github.com/zetxek/adritian-free-hugo-theme/zip/refs/heads/main
확인일: 2026-11-06 KST
ZIP SHA256: d41b28590e0fb56439381b8d0f00a196c6b4ff8970d199ca680e56ec30730736
라이선스: MIT. 루트 LICENSE 및 site/LICENSE의 원본 고지를 보존했습니다.

## 실제 수정할 위치

배포 대상은 site/입니다. 루트의 테마 파일은 원본 참고용입니다.
- site/hugo.toml: 테마 설정 및 메뉴
- site/pages.json: 저장소별 운영 주소, 빌드 덮어쓰기 설정
- site/content/: 화면 콘텐츠 (현재는 원본 예제)
- site/assets/, site/static/: 이미지와 정적 파일
- .github/workflows/hugo-pages.yml: main push 기반 자동 배포
- .github/pages_build.py: 수업 제공 빌드 도우미의 동일 복사본
- upstream-workflows/: 실행하지 않는 테마 개발자용 원본 워크플로 보관

## 준비 과정

수업 제공 prepare_github_pages.py 3.1을 실제 원격 저장소 주소로 실행했습니다.
최신 ZIP은 제공 스크립트의 검증 스냅샷과 일치하지 않아 audited=false입니다.
스크립트는 원본 루트를 독립 사이트로 복사했지만 홈 콘텐츠가 없었습니다.
원본 exampleSite의 content/assets/static/data와 설정을 site/에 적용했습니다.
독립 사이트 안에 layouts가 있으므로 테마 자체 모듈 import는 제거했습니다.
검색 라이브러리 Fuse.js, DOMPurify의 로컬 파일 마운트를 보존했습니다.

## 빌드

Hugo Extended 0.167.0, Go 1.27.1, Dart Sass 1.105.0, Node.js 24 및 Python 3.12를
워크플로에서 사용합니다. 로컬에서는 이 도구들을 PATH에 준비한 뒤 저장소 루트에서 실행합니다.

```sh
python3 .github/pages_build.py --dependencies
python3 .github/pages_build.py --build
```

출력 폴더는 public/이며 Git에서 제외됩니다.
원본 README의 루트 npm build는 테마 자체 개발용이므로 과제 배포에는 위 명령을 사용합니다.

## 첫 배포 전

현재 콘텐츠는 테마 예제이며 완성된 본인 포트폴리오가 아닙니다.
사용자 요청에 따라 Codex는 커밋을 만들지 않습니다.
GitHub Desktop에서 커밋 후 push하면 배포가 시작됩니다.
Pages의 Source는 GitHub Actions여야 합니다.
첫 성공 후 본인 콘텐츠로 수정하고 재배포하는 과정을 별도로 남겨야 합니다.
