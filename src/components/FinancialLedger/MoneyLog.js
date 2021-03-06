import { useEffect, useState } from 'react';
import { DropMenu } from '../common/DropMenu';
import { Button } from '../common/Button';
import moneyBag from '../../images/money-bag.png';
import styled, { css } from 'styled-components';
import ImageList from '../common/ImageList';
import { insertAutoLink } from '../../lib';

const MoneyLogWrapper = styled.div`
  flex-grow: 1;
  margin-left: 4rem;
  overflow-x: hidden;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: #949494;
    border-radius: 45px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #303030;
  }
  .MoneyLog-content {
    padding-left: 2.6rem;
    p {
      white-space: pre-line;
      font-size: 19px;
      margin-bottom: 2rem;
      a {
        text-decoration: underline;
      }
    }
  }
  ${({ noWrite }) =>
    noWrite &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 15px;
      text-align: center;
      button {
        font-size: 13px;
        margin-top: 1rem;
      }
    `}
  @media screen and (max-width: 900px) {
    margin-left: 0;
  }
`;

const MoneyLogHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 1rem 1rem 0;
  h2 {
    font-size: 25px;
    display: flex;
    align-items: center;
    img {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
  }
`;

function MoneyLog({
  status,
  postLoading,
  editLoading,
  moneyLog,
  onWrite,
  onEdit,
  onShare,
}) {
  const [newText, setNewText] = useState('');
  useEffect(() => {
    if (moneyLog) {
      setNewText(moneyLog.content);
      const newText = insertAutoLink(moneyLog.content);
      setNewText(newText);
    }
  }, [moneyLog]);
  if (status === 'loading') {
    return (
      <MoneyLogWrapper noWrite={'true'}>
        <p>Loading...</p>
      </MoneyLogWrapper>
    );
  }
  if (postLoading) {
    return (
      <MoneyLogWrapper noWrite={'true'}>
        <p>???????????? ?????????...</p>
      </MoneyLogWrapper>
    );
  }
  if (editLoading) {
    return (
      <MoneyLogWrapper noWrite={'true'}>
        <p>???????????? ?????????...</p>
      </MoneyLogWrapper>
    );
  }
  if (status === 'error') {
    return (
      <MoneyLogWrapper noWrite={'true'}>
        <h3>????????? ??????????????? ????????????</h3>
        <Button basiccolor="black" outlined onClick={onWrite}>
          ???????????? ????????????
        </Button>
      </MoneyLogWrapper>
    );
  }
  return (
    <MoneyLogWrapper>
      <MoneyLogHeading>
        <h2>
          <img src={moneyBag} alt="money bag icon" />
          ????????????
        </h2>
        <DropMenu
          menus={[
            {
              id: 1,
              menu: (
                <button type="button" onClick={onEdit}>
                  ????????????
                </button>
              ),
            },
            { id: 2, menu: <button onClick={onShare}>??????????????? ??????</button> },
          ]}
          height={65}
        />
      </MoneyLogHeading>
      <div className="MoneyLog-content">
        <ImageList images={moneyLog.imageUrl} />
        <p dangerouslySetInnerHTML={{ __html: newText }}></p>
      </div>
    </MoneyLogWrapper>
  );
}

export default MoneyLog;
