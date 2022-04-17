import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MoneyLog from '../components/FinancialLedger/MoneyLog';
import MoneyLogForm from '../components/FinancialLedger/MoneyLogForm';
import { setPost } from '../modules/post';

function MoneyLogContainer() {
  const { year, month, date } = useSelector(
    ({ calender }) => calender.selected,
  );
  const navigate = useNavigate();
  const [moneyLog, setMoneyLog] = useState({
    content: 'asdfadsf',
    images: [],
  });
  const [isWrite, setIsWrite] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const contentRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(year, month, date);
    // 머니로그 불러와 set 함수
  }, [year, month, date]);
  useEffect(() => {
    dispatch(setPost(moneyLog));
  }, [moneyLog]);
  // 취소 함수
  const onCancel = (e) => {
    e.preventDefault();
    setIsWrite(false);
    setIsEdit(false);
  };
  // 커뮤니티 공유하기 함수
  const onShare = () => {
    navigate('/community/write', { state: moneyLog });
  };
  // 제출하기 함수 (수정 / 생성)
  const onSubmit = () => {
    if (isEdit) {
    } else {
    }
  };
  // 수정하기 버튼 이벤트 함수
  const onEdit = () => {
    setIsEdit(true);
    setIsWrite(true);
  };
  // 작성하기 버튼 이벤트 함수
  const onWrite = () => {
    setIsEdit(false);
    setIsWrite(true);
  };
  return (
    <>
      {isWrite ? (
        <MoneyLogForm
          onCancel={onCancel}
          isEdit={isEdit}
          onSubmit={onSubmit}
          contentRef={contentRef}
        />
      ) : (
        <MoneyLog
          moneyLog={moneyLog}
          onWrite={onWrite}
          onEdit={onEdit}
          onShare={onShare}
        />
      )}
    </>
  );
}

export default MoneyLogContainer;
