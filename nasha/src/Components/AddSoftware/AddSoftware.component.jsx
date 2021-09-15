import React from "react";
import { useEffect } from "react";
import { useContext, useState } from "react/cjs/react.development";
import plusCircle from "../../assets/img/plus-circle.svg";
import programIcon from "../../assets/img/program-icon.svg";
import { SubjectContext } from "../../store/SubjectContext";
import { toast } from "react-toastify";
import $ from "jquery";

import "./AddSoftware.style.css";

const AddSoftware = () => {
  const token = localStorage.getItem("token");

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
  const [targetLicenses, setLicenses] = useState([]);
  const [targetFields, setTargetFields] = useState();
  const [labId, setLabId] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenBox, setIsOpenBox] = useState(false);
  const [isLicenseOpenBox, setIsLicenseOpenBox] = useState(false);
  const [isPlatformOpenBox, setIsPlatformOpenBox] = useState(false);
  // Form inputs -----------------------------------------
  const [username, setUsername] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [stdNum, setStdNum] = useState("");
  const [softname, setSoftname] = useState("");
  const [softLink, setSoftLink] = useState("");

  const [pIcon, setPIcon] = useState();

  const [courseLink1, setCourseLink1] = useState("");
  const [courseLink2, setCourseLink2] = useState("");
  const [courseLink3, setCourseLink3] = useState("");

  const [softLicense, setSoftLicense] = useState("");
  const [softPlatform, setSoftPlatform] = useState("");
  const [pdf, setPdf] = useState("");
  const [snap1, setSnap1] = useState();
  const [snap2, setSnap2] = useState();
  const [snap3, setSnap3] = useState();
  const [snap4, setSnap4] = useState();
  const [snap5, setSnap5] = useState();
  const [description, setdescription] = useState("");

  const [newField1, setNewField1] = useState("");
  const [newField2, setNewField2] = useState("");
  const [newField3, setNewField3] = useState("");
  const [newField4, setNewField4] = useState("");
  const [newField5, setNewField5] = useState("");

  const [newLicense1, setNewLicense1] = useState("");
  const [newLicense2, setNewLicense2] = useState("");
  const [newLicense3, setNewLicense3] = useState("");
  const [newLicense4, setNewLicense4] = useState("");
  const [newLicense5, setNewLicense5] = useState("");

  const [exlicense1, setExlicense1] = useState("");
  const [exlicense2, setExlicense2] = useState("");
  const [exlicense3, setExlicense3] = useState("");
  const [exlicense4, setExlicense4] = useState("");
  const [exlicense5, setExlicense5] = useState("");

  const [newPlat1, setNewPlat1] = useState("");
  const [newpalt2, setNewPlat2] = useState("");
  const [newpalt3, setNewPlat3] = useState("");
  const [newpalt4, setNewPlat4] = useState("");
  const [newpalt5, setNewPlat5] = useState("");

  const [images, setImages] = useState([]);

  const [online, setOnline] = useState(false);
  const [offline, setOffline] = useState(false);
  const [totalStatues, setTotalStatus] = useState();

  const [exlicencesList, setExlicencesList] = useState([]);

  //---------------------------------------------
  const ChangeHandler = (e, l) => {
    if (e.target.checked)
      setExlicencesList([...exlicencesList, { id: l.id, name: l.name }]);
  };

  //--------------------------------------------
  console.log("softDetaile.licenses", softDetaile?.licenses);
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
    console.log("all licences data", data.results);
  };

  const authorization = (e) => {
    if (online && offline) setTotalStatus(3);
    if (online) setTotalStatus(2);
    if (offline) setTotalStatus(1);
    if (!offline && !online) setTotalStatus(0);
    e.preventDefault();

    if (localStorage.getItem("token") == null) {
      console.log("abcdef");
      toast.error("برای این کار نیاز به ثبت نام یا ورود دارید", {
        autoClose: false,
        position: toast.POSITION.TOP_CENTER,
        className: "error-add",
      });
    }

    const formData = new FormData();
    formData.append("first_name", username);
    formData.append("last_name", lastname);
    formData.append("email", email);
    formData.append("student_number", stdNum);
    formData.append("url", softLink);
    formData.append("software_name", softname);

    if (newField1) formData.append();
    if (newField2) formData.append();
    if (newField3) formData.append();
    if (newField4) formData.append();
    if (newField5) formData.append();

    if (snap1) formData.append("snapshot1", snap1);
    if (snap1) formData.append("snapshot1", snap1);
    if (snap2) formData.append("snapshot2", snap2);
    if (snap3) formData.append("snapshot3", snap3);
    if (snap4) formData.append("snapshot4", snap4);
    if (snap5) formData.append("snapshot5", snap5);
    if (totalStatues) formData.append("offline_or_online");
    // if (pdf) formData.append("icon_picture", pdf);

    // newTweetRequest(formData, (isOk, data) => {
    //   if (!isOk) toast.error(data);
    //   toast.success("توییت شما با موفقیت ارسال شد");
    //   updateTweets();
    //   // input.current.innerText = '';
    //   setTweet(tweetDispatch, "");
    //   setImageFile();
    //   setImagePath();
    //   if (tweetText.includes("#")) updateHashTagList(tweetDispatch);
    // });
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

  const diff = () => {
    const res = targetLicenses?.filter(
      (x) => !softDetaile?.licenses?.includes(x)
    );
    console.log("result diff", res);
    return res;
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
        <form action="" className="form" onSubmit={(e) => authorization(e)}>
          <div className="form__user">
            <div className="form__requiredInfos">
              <div className="form__inputbox">
                <input
                  type="text"
                  required
                  placeholder="Name"
                  className="form__input"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setLastname(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setStdNum(e.target.value);
                  }}
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
                    onChange={(e) => {
                      setSoftname(e.target.value);
                    }}
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
                    onChange={(e) => {
                      setSoftLink(e.target.value);
                    }}
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
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0)
                    setPIcon(e.target.files[0]);
                }}
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
                <input
                  type="text"
                  onChange={(e) => {
                    setNewField1(e.target.value);
                  }}
                />
                <input
                  type="text"
                  onChange={(e) => {
                    setNewField2(e.target.value);
                  }}
                />
                <input
                  type="text"
                  onChange={(e) => {
                    setNewField3(e.target.value);
                  }}
                />
                <input
                  type="text"
                  onChange={(e) => {
                    setNewField4(e.target.value);
                  }}
                />
                <input
                  type="text"
                  onChange={(e) => {
                    setNewField5(e.target.value);
                  }}
                />
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
                {!isEdit &&
                  targetLicenses?.map((l) => (
                    <div>
                      <label htmlFor="">{l.name}</label>
                      <input
                        type="checkbox"
                        onClick={(e) => ChangeHandler(e, l)}
                      />
                    </div>
                  ))}
                {isEdit &&
                  targetLicenses?.map((l) =>
                    softDetaile?.licenses?.map((el) => {
                      if (el.name !== l.name) {
                        <div>
                          <label htmlFor="">{l.name}</label>
                          <input type="checkbox" />
                        </div>;
                      }
                    })
                  )}

                {/* {isEdit &&
                  diff()?.map((l) => {
                    <div>
                      <label htmlFor="">{l.name}</label>
                      <input type="checkbox" />
                    </div>;
                  })} */}
              </div>
              <label for="" className="form__label">
                : لایسنس نرم افزار
              </label>
            </div>
            {/* ----------- Licenses ---------------*/}
            {isLicenseOpenBox && (
              <div className="inputBoxes">
                <input
                  type="text"
                  onChange={(e) => {
                    setNewLicense1(e.target.value);
                  }}
                />
                <input
                  type="text"
                  onChange={(e) => {
                    setNewLicense2(e.target.value);
                  }}
                />
                <input
                  type="text"
                  onChange={(e) => {
                    setNewLicense3(e.target.value);
                  }}
                />
                <input
                  type="text"
                  onChange={(e) => {
                    setNewLicense4(e.target.value);
                  }}
                />
                <input
                  type="text"
                  onChange={(e) => {
                    setNewLicense5(e.target.value);
                  }}
                />
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
            {/* ----------- platforms ---------------*/}
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
                :نرم افزار pdf انتخاب فایل
              </p>
            </div>
            {!isEdit && (
              <div className="form__inputbox form__inputbox--file">
                <input
                  className="form__file-input form__input"
                  type="file"
                  placeholder="Name"
                  id="snapshot1"
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0)
                      setSnap1(e.target.files[0]);
                  }}
                />
                <label for="snapshot1">5 فایل</label>

                <input
                  className="form__file-input form__input"
                  type="file"
                  placeholder="Name"
                  id="snapshot2"
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0)
                      setSnap2(e.target.files[0]);
                  }}
                />
                <label for="snapshot2">4 فایل</label>

                <input
                  className="form__file-input form__input"
                  type="file"
                  placeholder="Name"
                  id="snapshot3"
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0)
                      setSnap3(e.target.files[0]);
                  }}
                />
                <label for="snapshot3">3 فایل</label>

                <input
                  className="form__file-input form__input"
                  type="file"
                  placeholder="Name"
                  id="snapshot4"
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0)
                      setSnap4(e.target.files[0]);
                  }}
                />
                <label for="snapshot4">2 فایل</label>

                <input
                  className="form__file-input form__input"
                  type="file"
                  placeholder="Name"
                  id="snapshot5"
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0)
                      setSnap5(e.target.files[0]);
                  }}
                />
                <label for="snapshot5">1 فایل</label>

                <p for="snapshot" className="form__label">
                  : انتخاب اسنپ شات های نرم افزار
                </p>
              </div>
            )}

            <div className="form__inputbox form__inputbox--check">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  name="state"
                  placeholder="Name"
                  onClick={(e) => {
                    if (e.target.checked) setOnline(true);
                  }}
                />
                آنلاین
                <input
                  type="checkbox"
                  name="state"
                  placeholder="Name"
                  onClick={(e) => {
                    if (e.target.checked) setOffline(true);
                  }}
                />
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
