import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useMutation, useQuery } from 'react-query';
import { FormInput } from '../common/FormInput';
import { getAssetGoal, putAssetGoal } from '../../lib/api/setting';
import styled, { css } from 'styled-components';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';

const GoalInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 1.5rem 10px;
  input {
    font-size: 15px;
    padding: 0.5rem 0;
    &::placeholder {
      font-size: 15px;
    }
  }
  p {
    font-size: 15px;
  }
  .editBtn {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: none;
  }
  &:hover {
    ${({ isEdit }) =>
      !isEdit &&
      css`
        &:hover .editBtn {
          display: flex;
          align-items: center;
          justify-content: center;
          button {
            background-color: #000;
            color: #fff;
            padding: 0.3rem;
            border-radius: 10px;
          }
        }
      `}
  }
`;

function MoneyLogAssetGoal() {
  const { year, month } = useSelector(({ calender }) => calender);
  const [goal, setGoal] = useState('');
  const [isEdit, setIsEdit] = useState(true);
  const query = useQuery(
    ['getAssetGoal', year, month],
    () => getAssetGoal(year, month + 1),
    {
      refetchOnWindowFocus: false,
      retry: false,
      onSuccess: (data) => {
        setGoal(data.content);
        setIsEdit(false);
      },
      onError: () => {
        setGoal('');
        setIsEdit(true);
      },
    },
  );
  const putMutation = useMutation(() => putAssetGoal(goal, year, month + 1));
  const onChange = (e) => {
    setGoal(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (goal === '') return;
    putMutation.mutate();
    if (isEdit) {
      setIsEdit(false);
    }
  };
  return (
    <GoalInput isEdit={isEdit}>
      {isEdit ? (
        <>
          <FormInput
            value={goal}
            onChange={onChange}
            name="goal"
            placeholder="이번달 자산관리 목표를 작성해보세요"
          />
          <button onClick={onSubmit} className="submitBtn">
            <DriveFileRenameOutlineOutlinedIcon />
          </button>
        </>
      ) : (
        <>
          <p>🎯 {goal}</p>
          <div className="editBtn">
            <button onClick={() => setIsEdit(true)}>수정하기</button>
          </div>
        </>
      )}
    </GoalInput>
  );
}

export default MoneyLogAssetGoal;
