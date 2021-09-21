const AddedData = (props) => {
  const getDate = () => {
    const time = new Date(props.date);
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const day = time.getDate();

    return `${year} / ${month} / ${day}`;
  };

  return (
    <div className="addDate">
      <div className="date">{getDate()}</div>
      <div className="title"> : تاریخ افزودن </div>
    </div>
  );
};

export default AddedData;
