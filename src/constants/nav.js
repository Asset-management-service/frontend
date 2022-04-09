import { Link } from 'react-router-dom';
export const MY_PAGE_NAV = [
  {
    to: '/mypage/edit',
    label: '개인정보 변경',
  },
  {
    to: '/mypage/badge',
    label: '내 뱃지',
  },
  {
    to: '/mypage/post',
    label: '내가 쓴 글',
  },
  {
    to: '/mypage/comment',
    label: '내가 쓴 댓글',
  },
  {
    to: '/mypage/scrap',
    label: '스크랩 보기',
  },
];

export const MONEYBOOK_PAGE_NAV = [
  {
    label: '수익 지출 관리',
    to: '/moneybook',
  },
  {
    label: '머니로그',
    to: '/moneybook/moneylog',
  },
  {
    label: '통계',
    to: '/moneybook/statistic',
  },
  {
    label: '설정',
    to: '/moneybook/setting',
  },
];

export const COMMUNITY_PAGE_NAV = [
  {
    label: '자산관리 QnA',
    to: '/community/qna',
  },
  {
    label: '머니로그 & 통계 공유',
    to: '/community/share',
  },
  {
    label: '자유게시판',
    to: '/community/free',
  },
];

export const BOARD_DETAIL_DROP_MENU = [
  {
    id: 1,
    menu: <Link to="chat">채팅 보내기</Link>,
  },
  {
    id: 2,
    menu: <button>스크랩하기</button>, // 스크랩 기능 함수 추가
  },
  {
    id: 3,
    menu: <button>신고하기</button>,
  },
];

export const COMMENT_DROP_MENU = [
  {
    id: 1,
    menu: <Link to="/chat">채팅보내기</Link>,
  },
  {
    id: 2,
    menu: <button>신고하기</button>,
  },
];
