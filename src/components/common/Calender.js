import { useState, useEffect } from 'react';
import { ComboBox } from '../common/ComboBox';
import { YEAR } from '../../constants/calender';
import styled from 'styled-components';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

const CalenderWrapper = styled.div`
  width: 340px;
  .changeBtns {
    display: flex;
    justify-content: space-between;
    margin: 0 5px 1rem;
  }
`;
const StyledComboBoxes = styled.div`
  display: flex;
  align-items: center;
  .ComboBox {
    &:first-child {
      width: 120px;
      margin-right: 1rem;
    }
    &:last-child {
      width: 100px;
    }
  }
`;

const ButtonBox = styled.div`
  display: flex;
`;
const StyledCalender = styled.table`
  width: 100%;
  font-size: 15px;
  td {
    width: 46px;
    height: 46px;
    border-radius: 40%;
    text-align: center;
    &.notCur {
      color: lightgray;
    }
    &.cur {
      cursor: pointer;
      &.selected {
        background: black;
        color: white;
        font-weight: bold;
      }
    }
  }
  th {
    padding-bottom: 1rem;
  }
`;

const calFirstDay = (year, month) => {
  return new Date(year, month, 1).getDay();
};

const calCurLastDate = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

const calPrevLastDate = (year, month) => {
  return new Date(year, month, 0).getDate();
};
export function Calender({
  calender,
  onSelect,
  noChevron,
  noComboBox,
  onMoveNext,
  onMovePrev,
  onChangeYear,
  onChangeMonth,
  extraComponent,
}) {
  const { year, month, selected } = calender;
  const [calenderData, setCalenderData] = useState(() => {
    const firstDay = calFirstDay(year, month);
    const curLastDate = calCurLastDate(year, month);
    const prevLastDate = calPrevLastDate(year, month);
    return {
      firstDay,
      curLastDate,
      prevLastDate,
    };
  });
  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const date = today.getDate();
    const id = year + month + date;
    onChangeYear(year);
    onChangeMonth(month);
    onSelect(id, date, year, month);
  }, []);
  useEffect(() => {
    const firstDay = calFirstDay(year, month);
    const curLastDate = calCurLastDate(year, month);
    const prevLastDate = calPrevLastDate(year, month);
    setCalenderData({
      firstDay,
      curLastDate,
      prevLastDate,
    });
  }, [selected]);

  const { firstDay, prevLastDate, curLastDate } = calenderData;

  return (
    <CalenderWrapper className="Calender">
      <div className="changeBtns">
        <StyledComboBoxes>
          <ComboBox
            categories={YEAR}
            initialLabel={year}
            onChange={onChangeYear}
            unit="년"
            noSelect={noComboBox}
          />
          <ComboBox
            categories={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
            initialLabel={month + 1}
            onChange={(month) => onChangeMonth(month - 1)}
            unit="월"
            noSelect={noComboBox}
          />
        </StyledComboBoxes>
        {!noChevron && (
          <ButtonBox>
            <button onClick={onMovePrev}>
              <ChevronLeftRoundedIcon />
            </button>
            <button onClick={onMoveNext}>
              <ChevronRightRoundedIcon />
            </button>
          </ButtonBox>
        )}
      </div>
      {extraComponent}
      <StyledCalender>
        <thead>
          <tr>
            <th>일</th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
            <th>토</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {Array(firstDay)
              .fill(prevLastDate - firstDay + 1)
              .map((v, i) => {
                return (
                  <td key={v + i + month - 1 + year} className="notCur">
                    {v + i}
                  </td>
                );
              })}
            {Array(7 - firstDay)
              .fill()
              .map((v, i) => {
                const id = i + 1 + month + year;
                return (
                  <td
                    key={id}
                    className={selected.id == id ? 'selected cur' : 'cur'}
                    onClick={() => onSelect(id, i + 1, year, month)}
                  >
                    {i + 1}
                  </td>
                );
              })}
          </tr>
          {Array(Math.ceil((curLastDate + firstDay - 7) / 7))
            .fill(7 - firstDay + 1)
            .map((v, i) => (
              <tr key={i}>
                {Array(7)
                  .fill(v + 7 * i)
                  .map((v, i) => {
                    const id = v + i + month + year;
                    return v + i > curLastDate ? (
                      <td
                        key={v + i - curLastDate + month + 1 + year}
                        className="notCur"
                      >
                        {v + i - curLastDate}
                      </td>
                    ) : (
                      <td
                        key={id}
                        className={selected.id === id ? 'selected cur' : 'cur'}
                        onClick={() => onSelect(id, v + i, year, month)}
                      >
                        {v + i}
                      </td>
                    );
                  })}
              </tr>
            ))}
        </tbody>
      </StyledCalender>
    </CalenderWrapper>
  );
}
