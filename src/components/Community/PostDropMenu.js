import { useEffect, useState } from 'react';
import { DropMenu } from '../common/DropMenu';

function PostDropMenu({ scrap, user, onEdit, onDelete }) {
  const [dropMenus, setDropMenus] = useState([]);
  const [height, setHeight] = useState(66);
  useEffect(() => {
    if (user) {
      setDropMenus([
        {
          id: 1,
          menu: (
            <button type="button" onClick={onEdit}>
              수정하기
            </button>
          ),
        },
        {
          id: 2,
          menu: (
            <button type="button" onClick={onDelete}>
              삭제하기
            </button>
          ),
        },
      ]);
    } else {
      if (scrap) {
        setDropMenus([
          { id: 1, menu: <button>채팅 보내기</button> },
          { id: 2, menu: <button>스크랩하기</button> },
          { id: 3, menu: <button>신고하기</button> },
        ]);
        setHeight(99);
      } else {
        setDropMenus([
          { id: 1, menu: <button>채팅 보내기</button> },
          { id: 2, menu: <button>신고하기</button> },
        ]);
      }
    }
  }, [user, scrap]);
  return <DropMenu menus={dropMenus} height={height} />;
}

export default PostDropMenu;
