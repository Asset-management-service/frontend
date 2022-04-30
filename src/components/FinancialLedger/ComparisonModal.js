import { ModalWrapper, StyledModal } from '../common/Modal';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { compareStatistic } from '../../lib/api/statistic';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const Modal = styled(StyledModal)`
  min-width: 650px;
  min-height: 80vh;
  ${({ loading }) =>
    loading &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;
const Triangle = styled.div`
  width: 0px;
  height: 0px;
  ${({ ratio }) =>
    ratio === 'plus'
      ? css`
          border-top: 10px solid #42a5f5;
        `
      : css`
          border-bottom: 10px solid #f06f6c;
        `}

  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
`;

const StatisticTable = styled.table`
  font-size: 17px;
  margin-bottom: 2rem;
  tr {
    display: grid;
    grid-template-columns: 2.5fr 2fr 2fr 2fr 1fr;
    align-items: center;
    padding: 0.7rem 0;
    border-bottom: 1px solid lightgray;
  }
  td {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
  }

  th {
    text-align: center;
  }
`;

function ComparisonModal({ onClose, type, dateQuery }) {
  const [date, setDate] = useState({});
  const [data, setData] = useState(null);
  useEffect(() => {
    const split = dateQuery.split('-');
    if (type === 'month') {
      setDate({
        year: split[0],
        month: split[1],
      });
    } else {
      setDate({
        year: split[0],
      });
    }
    compareStatistic(dateQuery, type).then((data) => setData(data));
  }, [dateQuery, type]);
  return (
    <ModalWrapper>
      <Modal loading={!data}>
        {!data ? (
          <p>Loading...</p>
        ) : (
          <>
            <StatisticTable>
              <thead>
                <tr>
                  <th></th>
                  <th>
                    {date.year}년 {date.month && Number(date.month) - 1}월
                  </th>
                  <th>
                    {date.year}년 {date.month && Number(date.month)}월
                  </th>
                  <th>차액</th>
                  <th>증감비율</th>
                </tr>
              </thead>
              <tbody>
                <tr className="head">
                  <th>총 지출</th>
                  <td>{data.totalExpResponse.previous.toLocaleString()}</td>
                  <td>{data.totalExpResponse.present.toLocaleString()}</td>
                  <td>{data.totalExpResponse.difference.toLocaleString()}</td>
                  <td>
                    {data.totalExpResponse.ratio !== 0 && (
                      <Triangle
                        ratio={
                          data.totalExpResponse.ratio < 0 ? 'plus' : 'minus'
                        }
                      />
                    )}
                    {data.totalExpResponse.ratio}%
                  </td>
                </tr>
                <tr className="head">
                  <th>고정비</th>
                  <td>{data.totalFixedResponse.previous.toLocaleString()}</td>
                  <td>{data.totalFixedResponse.present.toLocaleString()}</td>
                  <td>{data.totalFixedResponse.difference.toLocaleString()}</td>
                  <td>
                    {data.totalFixedResponse.ratio !== 0 && (
                      <Triangle
                        ratio={
                          data.totalFixedResponse.ratio < 0 ? 'plus' : 'minus'
                        }
                      />
                    )}
                    {data.totalFixedResponse.ratio}%
                  </td>
                </tr>
                {data.fixedResponses.map((fixed) => (
                  <tr>
                    <td>{fixed.content}</td>
                    <td>{fixed.previous.toLocaleString()}</td>
                    <td>{fixed.present.toLocaleString()}</td>
                    <td>{fixed.difference.toLocaleString()}</td>
                    <td>
                      {fixed.ratio !== 0 && (
                        <Triangle ratio={fixed.ratio < 0 ? 'plus' : 'minus'} />
                      )}
                      {fixed.ratio}%
                    </td>
                  </tr>
                ))}
                <tr className="head">
                  <th>변동비</th>
                  <td>{data.totalVarResponse.previous.toLocaleString()}</td>
                  <td>{data.totalVarResponse.present.toLocaleString()}</td>
                  <td>{data.totalVarResponse.difference.toLocaleString()}</td>
                  <td>
                    {data.totalVarResponse.ratio !== 0 && (
                      <Triangle
                        ratio={
                          data.totalVarResponse.ratio < 0 ? 'plus' : 'minus'
                        }
                      />
                    )}
                    {data.totalVarResponse.ratio}%
                  </td>
                </tr>
                {data.varResponses.map((vary) => (
                  <tr>
                    <td>{vary.content}</td>
                    <td>{vary.previous.toLocaleString()}</td>
                    <td>{vary.present.toLocaleString()}</td>
                    <td>{vary.difference.toLocaleString()}</td>
                    <td>
                      {vary.ratio !== 0 && (
                        <Triangle ratio={vary.ratio < 0 ? 'plus' : 'minus'} />
                      )}
                      {vary.ratio}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </StatisticTable>
            <StatisticTable>
              <thead>
                <tr>
                  <th></th>
                  <th>
                    {date.year}년 {date.month && Number(date.month) - 1}월
                  </th>
                  <th>
                    {date.year}년 {date.month && Number(date.month)}월
                  </th>
                  <th>차액</th>
                  <th>증감비율</th>
                </tr>
              </thead>
              <tbody>
                <tr className="head">
                  <th>총 수익</th>
                  <td>{data.totalRevResponses.previous.toLocaleString()}</td>
                  <td>{data.totalRevResponses.present.toLocaleString()}</td>
                  <td>{data.totalRevResponses.difference.toLocaleString()}</td>
                  <td>
                    {data.totalRevResponses.ratio !== 0 && (
                      <Triangle
                        ratio={
                          data.totalRevResponses.ratio < 0 ? 'plus' : 'minus'
                        }
                      />
                    )}
                    {data.totalRevResponses.ratio}%
                  </td>
                </tr>
                {data.revResponses.map((rev) => (
                  <tr>
                    <td>{rev.content}</td>
                    <td>{rev.previous.toLocaleString()}</td>
                    <td>{rev.present.toLocaleString()}</td>
                    <td>{rev.difference.toLocaleString()}</td>
                    <td>
                      {rev.ratio !== 0 && (
                        <Triangle ratio={rev.ratio < 0 ? 'plus' : 'minus'} />
                      )}
                      {rev.ratio}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </StatisticTable>
            <StatisticTable>
              <thead>
                <tr>
                  <th></th>
                  <th>
                    {date.year}년 {date.month && Number(date.month) - 1}월
                  </th>
                  <th>
                    {date.year}년 {date.month && Number(date.month)}월
                  </th>
                  <th>차액</th>
                  <th>증감비율</th>
                </tr>
              </thead>
              <tbody>
                <tr className="head">
                  <th>순이익</th>
                  <td>{data.netProfitResponse.previous.toLocaleString()}</td>
                  <td>{data.netProfitResponse.present.toLocaleString()}</td>
                  <td>{data.netProfitResponse.difference.toLocaleString()}</td>
                  <td>
                    {data.netProfitResponse.ratio !== 0 && (
                      <Triangle
                        ratio={
                          data.netProfitResponse.ratio < 0 ? 'plus' : 'minus'
                        }
                      />
                    )}
                    {data.netProfitResponse.ratio}%
                  </td>
                </tr>
              </tbody>
            </StatisticTable>
          </>
        )}

        <CloseRoundedIcon className="Modal-close-btn" onClick={onClose} />
      </Modal>
    </ModalWrapper>
  );
}

export default ComparisonModal;
