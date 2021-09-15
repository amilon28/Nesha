import { useEffect } from "react";
import { useContext, useState } from "react/cjs/react.development";
import plusCircle from "../../assets/img/plus-circle.svg";
import programIcon from "../../assets/img/program-icon.svg";
import { SubjectContext } from "../../store/SubjectContext";

import "./AddSoftware.style.css";

const AddSoftware = () => {
  const { isLogin, setIsLogin } = useContext(SubjectContext);
  const [allLabs, setAllLabs] = useState([]);
  const [res, setRes] = useState([]);

  const fetchAllLabs = async () => {
    const response = await fetch(
      "https://hassan1245.pythonanywhere.com/Nesha/v1/lab_search"
    );

    const data = await response.json();
    setAllLabs(data);
    console.log("all labs data", data);
  };
  const clickOnLabsHandler = async (lab) => {
    const response = await fetch(
      "https://hassan1245.pythonanywhere.com/Nesha/v1/lab_search"
    );

    const data = await response.json();
    setAllLabs(data);
  };

  useEffect(() => {
    setIsLogin(!!localStorage.getItem("token"));
    if (!isLogin) {
      alert("you must Signup/LogIn for using this page");
      return;
    }
    fetchAllLabs();
  }, []);

  return (
    <section className="addSoftware">
      <div className="addSoftware__textbox">
        <h2 className="addSoftware__title">افزودن نرم افزار</h2>
        <p className="addSoftware__decription">
          .ابتدا نرم افزار مورد نظر خود را جستجو کنید تا مطمئن شوید که نرم افزار
          وجود ندارد سپس موارد لازم در فرم پایین را کامل کنید موارد ستاره دار
          الزامی است
        </p>
      </div>
      <div className="addSoftware__form">
        <form action="" className="form">
          <div className="form__user">
            <div className="form__requiredInfos">
              <div className="form__inputbox">
                <input
                  type="text"
                  required
                  placeholder="Name"
                  className="form__input"
                />
                <label for="" className="form__label">
                  : نام
                </label>
              </div>
              <div className="form__inputbox">
                <input
                  type="text"
                  required
                  placeholder="Family"
                  className="form__input"
                />
                <label for="" className="form__label">
                  :نام خانوادگی
                </label>
              </div>
              <div className="form__inputbox">
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="form__input"
                />
                <label for="" className="form__label">
                  :ایمیل
                </label>
              </div>
              <div className="form__inputbox">
                <input
                  type="text"
                  required
                  placeholder="Student Number"
                  className="form__input"
                />
                <label for="" className="form__label">
                  : شماره دانشجویی
                </label>
              </div>
              <div className="form__inputbox">
                <input
                  type="text"
                  required
                  placeholder="Software Name"
                  className="form__input"
                />
                <label for="" className="form__label">
                  :نام نرم افزار
                </label>
              </div>
              <div className="form__inputbox">
                <input
                  type="text"
                  required
                  placeholder="Software Link"
                  className="form__input"
                />
                <label for="" className="form__label">
                  : لینک مربوط به نرم افزار
                </label>
              </div>
            </div>
            <div className="form__programIcon">
              <label for="" className="form__label">
                آیکون برنامه
              </label>
              <img src={programIcon} alt="program icon" />
              <input
                className="form__file-input"
                type="file"
                id="select-fire"
              />
              <label for="select-fire">انتخاب فایل</label>
            </div>
          </div>
          <div className="form__softwar">
            <div className="form-grid">
              <div className="form__add-text ">
                اگر رشته مورد نظر شما وجود ندارد آن را اضافه کنید
              </div>
              <div className="form__add-text">
                اگر آزمایشگاه مورد نظر شما وجود ندارد آن را اضافه کنید
              </div>
            </div>
            {/* ******************************************* */}
            <div className="form__result__container">
              <div className="form__soft--lab">
                <select className="form__select">
                  <option value="" disabled selected hidden>
                    Select
                  </option>
                  {allLabs?.map((lab) => {
                    return (
                      <option
                        value={lab.name}
                        onClick={(e) => clickOnLabsHandler(lab)}
                      >
                        {lab.name}
                      </option>
                    );
                  })}
                </select>
                <label className="form__label">: آزمایشگاه نرم افزار</label>
              </div>
              {
                <div className="result__Fields">
                  {}
                  <input type="text" />
                  <input type="text" />
                  <input type="text" />
                  <input type="text" />
                  <input type="text" />
                </div>
              }
            </div>
            {/* --------------------------------------------------------- */}

            <div className="form__inputbox form__inputbox--select">
              <div className="form__hint">
                <img
                  className="form__hint-icon"
                  src={plusCircle}
                  alt="plus-sign"
                />
                <p>اگر پلتفرم مورد نظر شما وجود ندارد آن را اضافه کنید</p>
              </div>
              <select name="" id="" className="form__select">
                <option value="" selected disabled hidden>
                  Select
                </option>
              </select>
              <label for="" className="form__label">
                : پلتفرم نرم افزار
              </label>
            </div>
            <div className="form__inputbox form__inputbox--select">
              <div className="form__hint">
                <img
                  className="form__hint-icon"
                  src={plusCircle}
                  alt="plus-sign"
                />
                <p>اگر لایسنس مورد نظر شما وجود ندارد آن را اضافه کنید</p>
              </div>
              <select name="" id="" className="form__select">
                <option value="" selected disabled hidden>
                  Select
                </option>
              </select>
              <label for="" className="form__label">
                : لایسنس نرم افزار
              </label>
            </div>
            <div className="form__inputbox">
              <input
                className="form__file-input form__input"
                type="file"
                placeholder="Name"
                id="pdf"
              />
              <label for="select-fire">انتخاب فایل</label>
              <p for="pdf" className="form__label">
                : انتخاب فایل pdf نرم افزار
              </p>
            </div>
            <div className="form__inputbox form__inputbox--file">
              <input
                className="form__file-input form__input"
                type="file"
                placeholder="Name"
                id="snapshot1"
              />
              <label for="snapshot1">5 فایل</label>

              <input
                className="form__file-input form__input"
                type="file"
                placeholder="Name"
                id="snapshot2"
              />
              <label for="snapshot2">4 فایل</label>

              <input
                className="form__file-input form__input"
                type="file"
                placeholder="Name"
                id="snapshot3"
              />
              <label for="snapshot3">3 فایل</label>

              <input
                className="form__file-input form__input"
                type="file"
                placeholder="Name"
                id="snapshot4"
              />
              <label for="snapshot4">2 فایل</label>

              <input
                className="form__file-input form__input"
                type="file"
                placeholder="Name"
                id="snapshot5"
              />
              <label for="snapshot5">1 فایل</label>

              <p for="snapshot" className="form__label">
                : انتخاب اسنپ شات های نرم افزار
              </p>
            </div>
            <div className="form__inputbox form__inputbox--check">
              <div className="checkbox-container">
                <input type="radio" name="state" placeholder="Name" />
                آنلاین
                <input type="radio" name="state" placeholder="Name" />
                آفلاین
              </div>
              <label for="" className="form__label">
                :آیا نرم‌افزار به صورت آنلاین یا آفلاین موجود است
              </label>
            </div>
            <div className="form__inputbox form__inputbox--link">
              <input
                type="text"
                placeholder="Link"
                className="form__input form__input--link"
              />
              <label for="" className="form__label">
                : لینک های نقد نرم افزار
              </label>
            </div>
            <div className="form__inputbox form__inputbox--link">
              <input
                type="text"
                placeholder="Link"
                className="form__input form__input--link"
              />
              <label for="" className="form__label">
                : لینک های آموزه نرم افزار
              </label>
            </div>
            <div className="form__inputbox form__inputbox--description">
              <label for="" className="form__label">
                :توضیحات
              </label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="form__textarea"
                placeholder="Your Text "
              ></textarea>
            </div>
          </div>
          <div className="form__btn--submit">
            <input type="submit" value="افزودن" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddSoftware;
