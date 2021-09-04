import SearchFieldBig from "../SearchFieldBig/SearchField.component";
import "../Header/Header.style.css";

const HeaderBody = (props) => {
  return (
    <div className="header__box">
      <h1 className="header__title">(نرم افزار های شبیه سازی آزمایشگاه) نشا</h1>

      <p className="header__description">
        .شما می توانید دروس آزمایشگاهی دوره کارشناسی را جستجو کنید و نرم افزار
        های شبیه سازی مربوط به آن ها را مشاهده کنید
      </p>
      <div className="header__line"></div>
      <SearchFieldBig />
    </div>
  );
};

export default HeaderBody;
