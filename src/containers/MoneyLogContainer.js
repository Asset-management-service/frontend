import { useEffect, useRef, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MoneyLog from '../components/FinancialLedger/MoneyLog';
import MoneyLogForm from '../components/FinancialLedger/MoneyLogForm';
import { editMoneyLog, getMoneyLog, postMoneyLog } from '../lib/api/moneylog';
import { setPost } from '../modules/post';

function MoneyLogContainer() {
  const { year, month, date } = useSelector(
    ({ calender }) => calender.selected,
  );
  const { content, imageFiles, saveImageUrl, postId } = useSelector(
    ({ post }) => post,
  );
  const navigate = useNavigate();
  const [isWrite, setIsWrite] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { data, status } = useQuery(
    ['getMoneyLog', year, month, date],
    () => getMoneyLog(year, month + 1, date),
    {
      refetchOnWindowFocus: false,
      retry: false,
      onSettled: (data) => {
        if (data) {
          dispatch(
            setPost({
              title: null,
              content: data.content,
              imageFiles: [],
              saveImageUrl: data.imageUrl.map((url, index) => ({
                image: url,
                key: index,
              })),
              postId: data.moneyLogId,
              nextId: data.imageUrl.length + 1,
            }),
          );
        } else {
          dispatch(
            setPost({
              title: null,
              content: '',
              imageFiles: [],
              saveImageUrl: [],
              postId: null,
              nextId: 0,
            }),
          );
        }
      },
    },
  );

  const postMutation = useMutation(
    () => postMoneyLog(content, imageFiles, year, month + 1, date),
    {
      onSuccess: () => {
        setIsWrite(false);
        queryClient.refetchQueries(['getMoneyLog', year, month, date]);
      },
    },
  );
  const editMutation = useMutation(
    () =>
      editMoneyLog(
        content,
        imageFiles,
        postId,
        year,
        month + 1,
        date,
        saveImageUrl,
      ),
    {
      onSuccess: () => {
        setIsEdit(false);
        setIsWrite(false);
        queryClient.refetchQueries(['getMoneyLog', year, month, date]);
      },
    },
  );
  // 취소 함수
  const onCancel = (e) => {
    e.preventDefault();
    setIsWrite(false);
    setIsEdit(false);
  };
  // 커뮤니티 공유하기 함수
  const onShare = () => {
    navigate('/community/write');
  };
  // 제출하기 함수 (수정 / 생성)
  const onSubmit = () => {
    if (isEdit) {
      editMutation.mutate();
    } else {
      postMutation.mutate();
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
        <MoneyLogForm onCancel={onCancel} isEdit={isEdit} onSubmit={onSubmit} />
      ) : (
        <MoneyLog
          status={status}
          moneyLog={data}
          onWrite={onWrite}
          onEdit={onEdit}
          onShare={onShare}
        />
      )}
    </>
  );
}

export default MoneyLogContainer;
