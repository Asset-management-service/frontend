import { useSelector } from 'react-redux';
import { Button } from '../../components/common/Button';
import { NotLoginModal } from '../../components/common/NotLogin';
import BoardList from '../../components/Community/BoardList';
import { useNotLogin } from '../../hooks/useNotLogin';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  font-size: 14px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  width: 90px;
  svg {
    margin-right: 5px;
    font-size: 14px;
  }
`;

function CommunityListPage({ category }) {
  // category에 따라 게시물 가져오기 (api 요청)
  const { auth } = useSelector(({ login }) => login);
  const { show, handleNotLogin, onClose } = useNotLogin(false);
  const to = `/community/write?category=${category}`;
  return (
    <section>
      <StyledButton
        outlined
        basiccolor="black"
        to={to}
        onClick={(e) => handleNotLogin(auth, e)}
      >
        <CreateOutlinedIcon /> 글쓰기
      </StyledButton>
      <BoardList
        data={[
          {
            title: '제목입니다',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id orci turpis. Nunc porta lacus at nibh dapibus, ut semper ipsum maximus. Nam et ipsum non felis euismod rhoncus eu at turpis. Etiam euismod risus rhoncus, tempus neque at, posuere elit. Vivamus varius neque vitae purus maximus hendrerit. Morbi rutrum mauris ex, ultricies rhoncus ante viverra et. Phasellus ut velit tincidunt, porta velit et, pellentesque tellus. Integer convallis sagittis vulputate. Integer augue dui, dignissim ac ullamcorper mollis, tristique et ante. Integer commodo massa non ipsum cursus, id blandit sapien congue. Donec nec pellentesque nisl. Etiam nibh magna, vulputate vitae ultricies non, aliquet ut sem. Sed a massa purus. Cras viverra, mauris eu porttitor fringilla, ex orci iaculis quam, ac ullamcorper metus metus vitae mauris.',
            author: '김김김김',
            date: '2022-03-23 12:20',
            view: 10,
            commentNum: 3,
          },
          {
            title: '제목입니다',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id orci turpis. Nunc porta lacus at nibh dapibus, ut semper ipsum maximus. Nam et ipsum non felis euismod rhoncus eu at turpis. Etiam euismod risus rhoncus, tempus neque at, posuere elit. Vivamus varius neque vitae purus maximus hendrerit. Morbi rutrum mauris ex, ultricies rhoncus ante viverra et. Phasellus ut velit tincidunt, porta velit et, pellentesque tellus. Integer convallis sagittis vulputate. Integer augue dui, dignissim ac ullamcorper mollis, tristique et ante. Integer commodo massa non ipsum cursus, id blandit sapien congue. Donec nec pellentesque nisl. Etiam nibh magna, vulputate vitae ultricies non, aliquet ut sem. Sed a massa purus. Cras viverra, mauris eu porttitor fringilla, ex orci iaculis quam, ac ullamcorper metus metus vitae mauris.',
            author: '김김김김',
            date: '2022-03-23 12:20',
            view: 10,
            commentNum: 3,
          },
          {
            title: '제목입니다',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id orci turpis. Nunc porta lacus at nibh dapibus, ut semper ipsum maximus. Nam et ipsum non felis euismod rhoncus eu at turpis. Etiam euismod risus rhoncus, tempus neque at, posuere elit. Vivamus varius neque vitae purus maximus hendrerit. Morbi rutrum mauris ex, ultricies rhoncus ante viverra et. Phasellus ut velit tincidunt, porta velit et, pellentesque tellus. Integer convallis sagittis vulputate. Integer augue dui, dignissim ac ullamcorper mollis, tristique et ante. Integer commodo massa non ipsum cursus, id blandit sapien congue. Donec nec pellentesque nisl. Etiam nibh magna, vulputate vitae ultricies non, aliquet ut sem. Sed a massa purus. Cras viverra, mauris eu porttitor fringilla, ex orci iaculis quam, ac ullamcorper metus metus vitae mauris.',
            author: '김김김김',
            date: '2022-03-23 12:20',
            view: 10,
            commentNum: 3,
          },
          {
            title: '제목입니다',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id orci turpis. Nunc porta lacus at nibh dapibus, ut semper ipsum maximus. Nam et ipsum non felis euismod rhoncus eu at turpis. Etiam euismod risus rhoncus, tempus neque at, posuere elit. Vivamus varius neque vitae purus maximus hendrerit. Morbi rutrum mauris ex, ultricies rhoncus ante viverra et. Phasellus ut velit tincidunt, porta velit et, pellentesque tellus. Integer convallis sagittis vulputate. Integer augue dui, dignissim ac ullamcorper mollis, tristique et ante. Integer commodo massa non ipsum cursus, id blandit sapien congue. Donec nec pellentesque nisl. Etiam nibh magna, vulputate vitae ultricies non, aliquet ut sem. Sed a massa purus. Cras viverra, mauris eu porttitor fringilla, ex orci iaculis quam, ac ullamcorper metus metus vitae mauris.',
            author: '김김김김',
            date: '2022-03-23 12:20',
            view: 10,
            commentNum: 3,
          },
          {
            title: '제목입니다',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id orci turpis. Nunc porta lacus at nibh dapibus, ut semper ipsum maximus. Nam et ipsum non felis euismod rhoncus eu at turpis. Etiam euismod risus rhoncus, tempus neque at, posuere elit. Vivamus varius neque vitae purus maximus hendrerit. Morbi rutrum mauris ex, ultricies rhoncus ante viverra et. Phasellus ut velit tincidunt, porta velit et, pellentesque tellus. Integer convallis sagittis vulputate. Integer augue dui, dignissim ac ullamcorper mollis, tristique et ante. Integer commodo massa non ipsum cursus, id blandit sapien congue. Donec nec pellentesque nisl. Etiam nibh magna, vulputate vitae ultricies non, aliquet ut sem. Sed a massa purus. Cras viverra, mauris eu porttitor fringilla, ex orci iaculis quam, ac ullamcorper metus metus vitae mauris.',
            author: '김김김김',
            date: '2022-03-23 12:20',
            view: 10,
            commentNum: 3,
          },
          {
            title: '제목입니다',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id orci turpis. Nunc porta lacus at nibh dapibus, ut semper ipsum maximus. Nam et ipsum non felis euismod rhoncus eu at turpis. Etiam euismod risus rhoncus, tempus neque at, posuere elit. Vivamus varius neque vitae purus maximus hendrerit. Morbi rutrum mauris ex, ultricies rhoncus ante viverra et. Phasellus ut velit tincidunt, porta velit et, pellentesque tellus. Integer convallis sagittis vulputate. Integer augue dui, dignissim ac ullamcorper mollis, tristique et ante. Integer commodo massa non ipsum cursus, id blandit sapien congue. Donec nec pellentesque nisl. Etiam nibh magna, vulputate vitae ultricies non, aliquet ut sem. Sed a massa purus. Cras viverra, mauris eu porttitor fringilla, ex orci iaculis quam, ac ullamcorper metus metus vitae mauris.',
            author: '김김김김',
            date: '2022-03-23 12:20',
            view: 10,
            commentNum: 3,
          },
        ]}
      />
      <NotLoginModal show={show} onClose={onClose} />
    </section>
  );
}

export default CommunityListPage;
