import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ComboBox } from '../components/common/ComboBox';
import WeekStatistic from '../components/FinancialLedger/WeekStatistic';
import MonthStatistic from '../components/FinancialLedger/MonthStatistic';
import YearStatistic from '../components/FinancialLedger/YearStatistic';
import ShareIcon from '@mui/icons-material/Share';
import { onCapture } from '../lib/utils';
import { initialize, uploadImage } from '../modules/post';

function StatisticContainer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [imageFile, setImageFile] = useState(null);
  const [type, setType] = useState('일주일');
  const onChange = (value) => {
    setType(value);
  };
  const onShare = (id) => {
    onCapture(id, setImageFile);
  };
  const shareFirstGraph = () => {
    if (type === '일주일') {
      onShare('weekBarGraph1');
    } else if (type === '한달') {
      onShare('monthBarGraph1');
    } else {
      onShare('yearBarGraph1');
    }
  };
  useEffect(() => {
    if (imageFile) {
      dispatch(initialize());
      dispatch(uploadImage(imageFile));
      navigate('/community/write?category=share');
    }
  }, [imageFile]);
  return (
    <>
      <div className="btns">
        <ComboBox
          categories={['일주일', '한달', '일년']}
          onChange={onChange}
          initialLabel="일주일"
        />
        <button className="shareBtn" onClick={shareFirstGraph}>
          <ShareIcon />
        </button>
      </div>

      {type === '일주일' ? (
        <WeekStatistic onShare={onShare} />
      ) : type === '한달' ? (
        <MonthStatistic onShare={onShare} />
      ) : (
        <YearStatistic onShare={onShare} />
      )}
    </>
  );
}

export default StatisticContainer;
