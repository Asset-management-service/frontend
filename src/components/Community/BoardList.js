import BoardItem from './BoardItem';

function BoardList({ data }) {
  return (
    <ul>
      {data.length != 0 &&
        data.map((item, index) => (
          <BoardItem key={index} board={item} id={index} />
        ))}
    </ul>
  );
}

export default BoardList;
