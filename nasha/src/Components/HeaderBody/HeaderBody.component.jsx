import SearchField from "../SearchField/SearchField.component";
import Line from "../Line/Line.component";
import "../Header/Header.style.css";

const HeaderBody = (props) => {
  if (props.type === "1") {
    return (
      <div className="header__box">
        <h1 className="header__title">
          (نرم افزار های شبیه سازی آزمایشگاه) نشا
        </h1>

        <p className="header__description">
          شما می توانید دروس آزمایشگاهی دوره کارشناسی را جستجو کنید و نرم افزار
          های شبیه سازی مربوط به آن ها را مشاهده کنید
        </p>
        <Line />
        <SearchField tag="home" />
      </div>
    );
  } else if (props.type === "2") {
    return (
      <div className="header__box">
        <h1 className="header__title">
          (نرم افزار های شبیه سازی آزمایشگاه) نشا
        </h1>
        <SearchField />
      </div>
    );
  } else if (props.type === "3") {
    return (
      <div className="header__box header__box--sm">
        <h1 className="header__title header__title--sm">
          (نرم افزار های شبیه سازی آزمایشگاه) نشا
        </h1>
      </div>
    );
  }
};

export default HeaderBody;
