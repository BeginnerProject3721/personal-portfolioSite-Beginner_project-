# Adritian 초기 배포 준비 기록

이 문서는 최초 테마 도입 과정과 출처를 보존한 기록입니다. 현재 사이트의 실행 환경, 설치·미리보기·빌드 명령, 콘텐츠 수정 위치와 배포·확인 절차는 [저장소 README](../../README.md)를 기준으로 합니다.

## 원본과 라이선스

- 원본: https://github.com/zetxek/adritian-free-hugo-theme
- 원본 ZIP: https://codeload.github.com/zetxek/adritian-free-hugo-theme/zip/refs/heads/main
- 최초 확인일: 2026-11-06 KST
- 당시 ZIP SHA256: `d41b28590e0fb56439381b8d0f00a196c6b4ff8970d199ca680e56ec30730736`
- 라이선스: MIT. [루트 LICENSE](../../LICENSE) 및 [site/LICENSE](../../site/LICENSE)의 원본 고지를 보존했습니다.

## 초기 준비 과정

수업 제공 `prepare_github_pages.py` 3.1을 실제 원격 저장소 주소로 실행했습니다. 당시 내려받은 ZIP은 제공 스크립트의 검증 스냅샷과 일치하지 않아 [준비 설정](../../.github-pages.json)에 `audited=false`로 기록되어 있습니다. 이 값은 현재 빌드나 배포의 성공 여부를 나타내는 결과가 아니므로, 각 커밋의 Actions 실행 결과를 별도로 확인합니다.

스크립트가 원본 루트를 독립 사이트로 복사했지만 홈 콘텐츠가 없어, 원본 `exampleSite`의 콘텐츠·자산·데이터와 설정을 `site/`에 적용했습니다. 독립 사이트 안에 레이아웃이 있으므로 테마 자체 모듈 import는 제거했습니다. 이후 소개·작업물·상세 페이지와 메뉴를 포트폴리오에 맞게 수정했습니다.

## 현재 배포 구성

- 실제 사이트 소스: [site/](../../site/)
- 적용 설정: [site/hugo.toml](../../site/hugo.toml), [site/pages.json](../../site/pages.json)
- 빌드 도우미: [.github/pages_build.py](../../.github/pages_build.py)
- 배포 워크플로: [.github/workflows/hugo-pages.yml](../../.github/workflows/hugo-pages.yml)
- 배포 대상: `main` 푸시로 빌드한 루트 `public/`의 결과물
- 원본 개발자용 워크플로 보관: [upstream-workflows/](../../upstream-workflows/)

생성 결과물인 `public/`은 Git에서 제외합니다. GitHub Pages의 Source는 GitHub Actions를 사용하며, 현재 운영 절차는 README의 ‘GitHub Actions 배포와 확인’ 항목을 참고합니다.
