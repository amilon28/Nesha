import React from "react";
import { useEffect } from "react";
import { useContext, useState } from "react/cjs/react.development";
import plusCircle from "../../assets/img/plus-circle.svg";
import programIcon from "../../assets/img/program-icon.svg";
import { SubjectContext } from "../../store/SubjectContext";
import $ from "jquery";

import "./AddSoftware.style.css";

const AddSoftware = () => {
  const {
    isLogin,
    setIsLogin,
    isEdit,
    softawreNameEditSection,
    idLab,
    softDetaile,
  } = useContext(SubjectContext);
  const [allLabs, setAllLabs] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [licenses, setLicenses] = useState([]);
  const [targetFields, setTargetFields] = useState();
  const [labId, setLabId] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenBox, setIsOpenBox] = useState(false);
  const [isLicenseOpenBox, setIsLicenseOpenBox] = useState(false);
  const [isPlatformOpenBox, setIsPlatformOpenBox] = useState(false);

  const fetchAllLabs = async () => {
    const response = await fetch(
      "https://hassan1245.pythonanywhere.com/Nesha/v1/lab_search/"
    );

    const data = await response.json();
    setAllLabs(data);
    console.log("all labs data", data);
  };

  const fetchAllPlatforms = async () => {
    const response = await fetch(
      "https://hassan1245.pythonanywhere.com/Nesha/v1/platform_search/"
    );

    const data = await response.json();
    setPlatforms(data);
    console.log("all labs data", data);
  };

  const fetchAllLicenses = async () => {
    const response = await fetch(
      "https://hassan1245.pythonanywhere.com/Nesha/v1/licenses/"
    );

    const data = await response.json();
    setLicenses(data.results);
    console.log("all labs data", data);
  };

  // --------------------------------------------

  const fetchFields = async () => {
    console.log("labID", labId);
    const response = await fetch(
      `https://hassan1245.pythonanywhere.com/Nesha/v1/labs/${labId}`
    );

    const data = await response.json();
    console.log("response of fields", data.fields);
    setTargetFields(data.fields);
    setIsLoading(false);
    console.log("targetFields", targetFields);
  };

  // setIsLogin(!!localStorage.getItem("token"));
  // if (!isLogin) {
  //   alert("you must Signup/LogIn for using this page");
  //   return;
  // }
  useEffect(() => {
    fetchAllLabs();
    fetchAllPlatforms();
    fetchAllLicenses();
  }, []);

  useEffect(() => {
    fetchFields();
    setIsLoading(true);
    setIsOpenBox(false);
    console.log("this");
  }, [labId]);

  return (
    <section className="addSoftware">
      <div className="addSoftware__textbox">
        <h2 className="addSoftware__title">
          {isEdit ? "ویرایش" : "افزودن"}{" "}
          {isEdit ? softawreNameEditSection : "نرم افزار"}{" "}
        </h2>
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
                {isEdit && (
                  <input
                    type="text"
                    required
                    placeholder="Software Name"
                    className="form__input"
                    value={softawreNameEditSection}
                    readOnly
                    disabled
                  />
                )}
                {!isEdit && (
                  <input
                    type="text"
                    required
                    placeholder="Software Name"
                    className="form__input"
                  />
                )}

                <label for="" className="form__label">
                  :نام نرم افزار
                </label>
              </div>
              {!isEdit && (
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
              )}
            </div>
            <div className="form__programIcon">
              {!isEdit && (
                <label for="" className="form__label">
                  آیکون برنامه
                </label>
              )}

              <img
                src={isEdit ? softDetaile?.icon_picture : programIcon}
                alt="program icon"
              />

              <input
                className="form__file-input"
                type="file"
                id="select-fire"
                style={isEdit ? { display: "none" } : {}}
              />
              <label
                for="select-fire"
                style={isEdit ? { display: "none" } : {}}
              >
                انتخاب فایل
              </label>
            </div>
          </div>
          <div className="form__softwar">
            {/* <div className="form-grid">
              <div className="form__add-text ">
                اگر رشته مورد نظر شما وجود ندارد آن را اضافه کنید
              </div>
              <div className="form__add-text">
                اگر آزمایشگاه مورد نظر شما وجود ندارد آن را اضافه کنید
              </div>
            </div> */}
            {/* ******************************************* */}
            <div className="form__result__container">
              <div className="form__soft--lab">
                <select
                  className="form__select"
                  onChange={(e) =>
                    setLabId($("select option:checked").attr("data-id"))
                  }
                >
                  <option value="" disabled selected hidden>
                    Select
                  </option>
                  {allLabs?.map((lab, index) => {
                    return (
                      <option
                        key={index}
                        value={lab.name}
                        className="labs"
                        data-id={lab.id}
                      >
                        {lab.name}
                      </option>
                    );
                  })}
                </select>
                <label className="form__label">: آزمایشگاه نرم افزار</label>
              </div>
              <div className="helper">
                <div className="result__Fields">
                  {isLoading && <p className="searching">....در حال جستجو</p>}
                  {!isLoading &&
                    targetFields?.map((field, index) => (
                      <span key={index} className="field__result">
                        {field.name}&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                    ))}
                </div>
                {!isLoading && targetFields?.length > 0 && (
                  <p className="hint-text" onClick={() => setIsOpenBox(true)}>
                    اگر رشته مورد نظر شما وجود ندارد آن را اضافه کنید
                  </p>
                )}
              </div>
            </div>
            {/* --------------------------------------------------------- */}
            {isOpenBox && !isLoading && (
              <div className="inputBoxes">
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
              </div>
            )}
            {/* --------------------------------------------------------- */}

            <div className="form__inputbox form__inputbox--select">
              <div className="form__hint">
                <img
                  className="form__hint-icon"
                  src={plusCircle}
                  alt="plus-sign"
                  onClick={() => setIsLicenseOpenBox(true)}
                />
                <p>اگر لایسنس مورد نظر شما وجود ندارد آن را اضافه کنید</p>
              </div>
              <div className="paltforms__checboxes">
                {licenses?.map((l) => (
                  <div>
                    <label htmlFor="">{l.name}</label>
                    <input type="checkbox" />
                  </div>
                ))}
              </div>
              <label for="" className="form__label">
                : لایسنس نرم افزار
              </label>
            </div>
            {/* ----------- Licenses ---------------*/}
            {isLicenseOpenBox && (
              <div className="inputBoxes">
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
              </div>
            )}
            {/* ------------------------------------ */}
            <div className="form__inputbox form__inputbox--select">
              <div className="form__hint">
                <img
                  className="form__hint-icon"
                  src={plusCircle}
                  alt="plus-sign"
                  onClick={() => {
                    setIsPlatformOpenBox(true);
                  }}
                />
                <p>اگر پلتفرم مورد نظر شما وجود ندارد آن را اضافه کنید</p>
              </div>
              <div className="paltforms__checboxes">
                {platforms?.map((p) => (
                  <div>
                    <label htmlFor="">{p.name}</label>
                    <input type="checkbox" />
                  </div>
                ))}
              </div>
              <label for="" className="form__label">
                : پلتفرم نرم افزار
              </label>
            </div>
            {/* ----------- Licenses ---------------*/}
            {isPlatformOpenBox && (
              <div className="inputBoxes">
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
              </div>
            )}
            {/* ------------------------------------ */}
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
