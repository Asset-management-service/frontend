import { DropMenu } from '../common/DropMenu';
import { Button } from '../common/Button';
import moneyBag from '../../images/money-bag.png';
import styled, { css } from 'styled-components';

const MoneyLogWrapper = styled.div`
  flex-grow: 1;
  margin-left: 4rem;
  p {
    white-space: pre-line;
    font-size: 19px;
    padding-left: 2.6rem;
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
`;

const MoneyLogHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
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

function MoneyLog({ moneyLog, onWrite, onEdit, onShare }) {
  if (moneyLog.content === '' && moneyLog.images.length === 0) {
    return (
      <MoneyLogWrapper noWrite={'true'}>
        <h3>작성된 머니로그가 없습니다</h3>
        <Button basiccolor="black" outlined onClick={onWrite}>
          머니로그 작성하기
        </Button>
      </MoneyLogWrapper>
    );
  }
  return (
    <MoneyLogWrapper>
      <MoneyLogHeading>
        <h2>
          <img src={moneyBag} alt="money bag icon" />
          머니로그
        </h2>
        <DropMenu
          menus={[
            {
              id: 1,
              menu: (
                <button type="button" onClick={onEdit}>
                  수정하기
                </button>
              ),
            },
            { id: 2, menu: <button onClick={onShare}>커뮤니티로 공유</button> },
          ]}
          height={65}
        />
      </MoneyLogHeading>
      <p>{moneyLog.content}</p>
    </MoneyLogWrapper>
  );
}

export default MoneyLog;