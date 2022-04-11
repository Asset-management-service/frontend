import { useNavigate } from 'react-router-dom';
import WriteActionButtons from '../components/common/WriteActionButtons';
function WriteActionButtonsContainer({
  isEdit,
  cancelBtn,
  writeTo,
  cancelTo,
  category,
}) {
  const navigate = useNavigate();
  const onCancel = () => navigate(cancelTo);
  const onSubmit = (e) => {
    e.preventDefault();
    // post api or patch api
  };
  return (
    <WriteActionButtons
      isEdit={isEdit}
      cancelBtn={cancelBtn}
      onCancel={onCancel}
      onSubmit={onSubmit}
    />
  );
}

export default WriteActionButtonsContainer;
