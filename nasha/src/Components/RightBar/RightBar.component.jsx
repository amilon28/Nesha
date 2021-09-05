import SelectBox from "../SelectBox/SelectBox.component";
import CheckList from "../CheckList/CheckList.component";
import RadioList from "../Radio/Radio.component";

const RightBar = () => {
  return (
    <div className="right">
      <form action="#" className="form-right">
        <SelectBox title="نوع پلتفرم" values={["w", "s"]} />
        <SelectBox title="نوع لایسنس" values={["مک", "ویندوز"]} />
        <CheckList />
        <RadioList />
        <input type="submit" value="تایید" className="form-btn" />
      </form>
    </div>
  );
};

export default RightBar;
