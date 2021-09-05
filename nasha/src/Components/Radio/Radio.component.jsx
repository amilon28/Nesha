import RadioItem from "../RadioItem/RadioItem.component";

const RadioList = () => {
  return (
    <div className="radioList">
      <RadioItem name="statics" label="تعداد لایک ها" />
      <RadioItem name="statics" label="تعداد بازدید ها" />
      <RadioItem name="statics" label="تاریخ افزودن" />
    </div>
  );
};

export default RadioList;
