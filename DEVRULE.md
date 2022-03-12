# 모아모아 Frontend 개발 규칙 🐷

<br/>

## 📌 Commit Convention

|**태그**|**설명**|
|------|---|
|`Feat`|새로운 기능 추가|
|`Fix`|버그를 고친 경우|
|`Design`|CSS 등 사용자 UI 디자인 변경|
|`!BREAKING CHANGE`|커다란 API 변경의 경우|
|`!HOTFIX`|급하게 치명적인 버그를 고쳐야하는 경우|
|`Style`|코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우|
|`Refactor`|프로덕션 코드 리팩토링|
|`Comment`|필요한 주석 추가 및 변경|
|`Docs`|문서를 수정한 경우|
|`Test`|테스트 추가, 테스트 리팩토링(프로덕션 코드 변경 X)|
|`Chore`|빌드 태스트 업데이트, 패키지 매니저를 설정하는 경우(프로덕션 코드 변경 X)|
|`Rename`|파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우|
|`Remove`|파일을 삭제하는 작업만 수행한 경우|
|`Initial Commit`|첫 커밋을 남길때 내용 없이 작성|
|`ETC`|위에 해당하는 내용이 하나도 없을 때|

EX) git commit -m "Fix: Login Component 기능 추가"


<br/>

## 📌 Branch Rule
|**브랜치명**|**용도**|
|------|---|
|`main`|배포 이력 관리|
|`develop`|개발 업데이트 (배포 가능한 안정적인 상태라면 `main`으로 `merge`)|
|`feature-issueNumber`|직접적인 개발 진행 (개발이 완성되면 `develop`으로 `merge`)|

<br/>

## 전반적인 개발 프로세스 😎
아래 과정을 1주 단위로 진행

**issue 생성**
- 제목: 개발할 component 이름 or page 이름 등등
- 내용: 어떤 개발 작업을 할 것인지 작성
- Assignees: 자신으로 지정
- Labels: 그때그때마다 다르게 지정 (Epic, Task, development 추가)
- Projects: 생성한 프로젝트 지정 (모아모아)
- MileStone: sprint 지정
ex) Header UI Component #8 (이슈 번호가 자동으로 매겨짐)

**branch 분기**
- 이슈 번호에 맞게 `feature-issueNumber` 브랜치 분기 ex) feature-8
- 해당 브랜치에서 issue에 작성해놓은 개발 작업 진행

**Pull Request**
- 작업이 완료되면 `develop` 브랜치로 Pull Request하기
- 제목은 issue 제목과 동일하게
- 내용은 어떻게 작업했는지 팀원이 알아야 할 내용들로 작성
- Reviewrs 지정: 다른 팀원
- Assignees 지정: 자기 자신
- Labels, Projects, MileStone: issue에서 했던 것과 동일하게 지정
- 여기서 review 진행

**Merge**
- review가 끝나면 `develop` 브랜치로 merge
- issue도 닫기
