import { Outlet } from 'react-router-dom';
import NotLogin from '../components/common/NotLogin';
import SideBar from '../components/MyPage/SideBar';
import Notification from '../components/MyPage/Notification';
import styled from 'styled-components';

const MyPageWrapper = styled.main`
  width: 90vw;
  max-width: 1500px;
  margin: 15rem auto 0;
  .MyPage-content {
    display: flex;
    height: 60vh;
  }
  section {
    margin-left: 3rem;
    width: 60vw;
    h2 {
      font-size: 25px;
    }
  }
`;

const MyPageHeading = styled.div`
  font-size: 25px;
  font-weight: bold;
  display: flex;
  align-items: center;
  h1 {
    margin-right: 10px;
  }
`;

function MyPage({ auth }) {
  if (!auth) {
    return <NotLogin />;
  }
  return (
    <MyPageWrapper>
      <MyPageHeading>
        <h1>마이페이지</h1>
        <Notification
          count={2}
          notify={[
            {
              check: true,
              title: '모아모아 시작 뱃지를 획득했어요',
              category: '뱃지',
            },
            {
              check: false,
              title: '새로운 댓글이 달렸어요',
              content: '게시판 이름 혹은 글 제목: 댓글 미리보기',
              category: '커뮤니티',
            },
            {
              check: false,
              title: '새로운 메시지가 있어요',
              content: '닉네임 : 메시지 미리보기',
              category: '채팅',
            },
          ]}
        />
      </MyPageHeading>
      <div className="MyPage-content">
        <SideBar />
        <Outlet />
      </div>
    </MyPageWrapper>
  );
}

export default MyPage;
