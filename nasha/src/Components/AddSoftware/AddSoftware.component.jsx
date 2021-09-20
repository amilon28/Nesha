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
  const {
    isEdit,
    softawreNameEditSection,
    softDetaile,
    softwareLicensesEdit,
    softwarePlatformsEdit,
    softwareIconEditSection,
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
  const [selectedLabName, setSelectedLabName] = useState("");

  // Form inputs -----------------------------------------
  const [username, setUsername] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [stdNum, setStdNum] = useState("");
  const [softname, setSoftname] = useState("");
  const [softLink, setSoftLink] = useState("");

  const [pIcon, setPIcon] = useState();

  const [pdf, setPdf] = useState("");
  const [snap1, setSnap1] = useState();
  const [snap2, setSnap2] = useState();
  const [snap3, setSnap3] = useState();
  const [snap4, setSnap4] = useState();
  const [snap5, setSnap5] = useState();
  const [description, setdescription] = useState("");
  const [existingLicense, setExistingLicense] = useState([]);
  const [existingPlatforms, setExistingPlatforms] = useState([]);

  const [newField1, setNewField1] = useState([]);
  const [newField2, setNewField2] = useState([]);
  const [newField3, setNewField3] = useState([]);
  const [newField4, setNewField4] = useState([]);
  const [newField5, setNewField5] = useState([]);

  const [newLicense1, setNewLicense1] = useState("");
  const [newLicense2, setNewLicense2] = useState("");
  const [newLicense3, setNewLicense3] = useState("");
  const [newLicense4, setNewLicense4] = useState("");
  const [newLicense5, setNewLicense5] = useState("");

  const [newPlat1, setNewPlat1] = useState("");
  const [newpalt2, setNewPlat2] = useState("");
  const [newpalt3, setNewPlat3] = useState("");
  const [newpalt4, setNewPlat4] = useState("");
  const [newpalt5, setNewPlat5] = useState("");

  const [reviewLink1, setReviewLink1] = useState("");
  const [reviewLink2, setReviewLink2] = useState("");

  const [courseLink1, setCourseLink1] = useState("");
  const [courseLink2, setCourseLink2] = useState("");
  const [courseLink3, setCourseLink3] = useState("");

  const [online, setOnline] = useState(false);
  const [offline, setOffline] = useState(false);

  //--------------Helper Functions--------------------

  const lab_fields_result = [];

  const getStatus = () => {
    if (online && offline) return 3;
    if (online) return 2;
    if (offline) return 1;
    if (!offline && !online) return 0;
  };

  const licenseChangeHandler = (e, l, state, setState) => {
    const foundIndex = state.findIndex((item) => item.id === l.id);
    console.log("checked item", state);
    if (e.target.checked) {
      return setState([...state, { id: l.id, name: l.name }]);
    }

    // return setExistingLicense([
    //   ...existingLicense.slice(0, foundIndex),
    //   ...existingLicense.slice(foundIndex + 1),
    // ]);

    return setState(state.filter((item) => item.id !== l.id));
  };

  const filterExistingItems = (existingItems, softwareItems) => {
    let list = [];
    existingItems?.forEach((sd) => {
      if (!softwareItems?.find((p) => sd.id === p.id)) list.push(sd);
    });
    return list;
  };

  const createLab_Fields_object = () => {
    console.log("selected lab id", labId);
    console.log("selected lab name", selectedLabName);
    console.log("all fields for selected lab", targetFields);
    targetFields?.forEach((f) => {
      lab_fields_result.push({
        field: {
          id: f.id,
          name: f.name,
        },
        lab: {
          id: labId,
          name: selectedLabName,
        },
      });
    });

    // for new inpute fields

    console.log("lab_fields_result", lab_fields_result);
    console.log("lab_fields_result json", JSON.stringify(lab_fields_result));
    return lab_fields_result;
  };

  const newPushInLab_Field_object = (fieldName) => {
    lab_fields_result.push({
      field: {
        name: fieldName,
      },
      lab: {
        id: labId,
        name: selectedLabName,
      },
    });
  };

  const checkForNewInputFields = () => {
    if (newField1 || newField2 || newField3 || newField4 || newField5) {
      if (newField1) newPushInLab_Field_object(newField1);
      if (newField2) newPushInLab_Field_object(newField2);
      if (newField3) newPushInLab_Field_object(newField3);
      if (newField4) newPushInLab_Field_object(newField4);
      if (newField5) newPushInLab_Field_object(newField5);
    }
  };

  const handleImgFileInput = (e) => {
    const img = e.target.files[0];
    if (img?.size > 1e7) return false;

    return img;
  };

  //----------------FETCHs-------------------

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

  const fetchFields = async () => {
    const response = await fetch(
      `https://hassan1245.pythonanywhere.com/Nesha/v1/labs/${labId}`
    );

    const data = await response.json();
    console.log("response of fields", data.fields);
    setTargetFields(data.fields);
    setIsLoading(false);
  };

  async function sendDate(formData) {
    let response;
    if (!isEdit) {
      response = await fetch(
        `https://hassan1245.pythonanywhere.com/Nesha/v1/draft/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
          body: formData,
        }
      );
    } else if (isEdit) {
      response = await fetch(
        `https://hassan1245.pythonanywhere.com/Nesha/v1/edit-draft/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
          body: formData,
        }
      );
    }

    if (!response.ok) {
      toast.error("خطای ارسال", {
        className: "foo-bar",
      });
    }
    const data = await response.json();

    console.log("Response", data);
  }

  //-------------------Sending Form Datas----------------------

  const authorization = (e) => {
    e.preventDefault();

    if (localStorage.getItem("token") == null) {
      toast.error("برای این کار نیاز به ثبت نام یا ورود دارید", {
        autoClose: false,
        position: toast.POSITION.TOP_CENTER,
        className: "error-add",
      });
    }

    checkForNewInputFields();

    const formData = new FormData();
    formData.append("first_name", username);
    formData.append("last_name", lastname);
    formData.append("email", email);
    formData.append("student_number", stdNum);
    formData.append("url", softLink);
    formData.append("software_name", softname);

    formData.append("course_links[0]", courseLink1);
    formData.append("course_links[1]", courseLink2);
    formData.append("course_links[2]", courseLink3);

    formData.append("review_links[0]", reviewLink1);
    formData.append("review_links[1]", reviewLink2);

    console.log("final labs_and_fields obj", lab_fields_result);
    formData.append("labs_and_fields", JSON.stringify(lab_fields_result));

    if (snap1) formData.append("snapshot1", snap1);
    if (snap2) formData.append("snapshot2", snap2);
    if (snap3) formData.append("snapshot3", snap3);
    if (snap4) formData.append("snapshot4", snap4);
    if (snap5) formData.append("snapshot5", snap5);

    if (pIcon) formData.append("icon_picture", pIcon);

    formData.append("offline_or_online", getStatus());

    if (description) formData.append("description", description);

    if (newLicense1 || newLicense2 || newLicense3 || newLicense4 || newLicense5)
      formData.append(
        "new_licenses",
        `${newLicense1 ? newLicense1 + "," : ""} ${
          newLicense2 ? newLicense2 + "," : ""
        } ${newLicense3 ? newLicense3 + "," : ""} ${
          newLicense4 ? newLicense4 + "," : ""
        } ${newLicense5 ? newLicense5 : ""}`
      );

    if (newPlat1 || newpalt2 || newpalt3 || newpalt4 || newpalt5)
      formData.append(
        "new_licenses",
        `${newPlat1 ? newPlat1 + "," : ""} ${newpalt2 ? newpalt2 + "," : ""} ${
          newpalt3 ? newpalt3 + "," : ""
        } ${newpalt4 ? newpalt4 + "," : ""} ${newpalt5 ? newpalt5 : ""}`
      );

    if (existingLicense) {
      formData.append("existing_licenses", JSON.stringify(existingLicense));
      console.log(JSON.stringify(existingLicense));
    }

    if (existingPlatforms) {
      formData.append("existing_platforms", JSON.stringify(existingPlatforms));
      console.log(JSON.stringify(existingPlatforms));
    }

    if (pdf) formData.append("icon_picture", pdf);

    //Telegram
    sendDate(formData);
  };

  // --------------------------------------------

  useEffect(() => {
    fetchAllLabs();
    fetchAllPlatforms();
    fetchAllLicenses();
  }, []);

  useEffect(() => {
    fetchFields();
    setIsLoading(true);
    setIsOpenBox(false);
  }, [labId]);

  useEffect(() => {
    createLab_Fields_object();
  }, [targetFields]);

  //--------------------------------------------------
  return (
    <section className="addSoftware">
      <div className="addSoftware__textbox">
        <h2 className="addSoftware__title">
          {isEdit ? "ویرایش" : "افزودن"}{" "}
          {isEdit ? softawreNameEditSection.toUpperCase() : "نرم افزار"}{" "}
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
                    value={softawreNameEditSection.toUpperCase()}
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

              {isEdit && (
                <img
                  src={softwareIconEditSection}
                  alt="program icon"
                  style={{ width: "160px" }}
                />
              )}

              {!isEdit && <img src={programIcon} alt="program icon" />}

              <input
                accept="image/*"
                className="form__file-input"
                type="file"
                id="select-fire"
                style={isEdit ? { display: "none" } : {}}
                onChange={(e) => {
                  handleImgFileInput(e)
                    ? setPIcon(handleImgFileInput(e))
                    : toast.error("سایز عکس حداکثر می تواند 10 مگابایت باشد", {
                        className: "foo-bar",
                      });
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
                  onChange={(e) => {
                    setSelectedLabName(e.target.value);
                    setLabId($("select option:checked").attr("data-id"));
                  }}
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
                  // value={newField1.find((item) => item.labId === labId)?.field}
                />
                <input
                  type="text"
                  onChange={(e) => {
                    setNewField2(e.target.value);
                  }}
                  // onChange={(e) => {
                  //   setNewField2(inputChanged(newField2, e.target.value));
                  // }}
                  // value={newField2.find((item) => item.labId === labId)?.field}
                />
                <input
                  type="text"
                  onChange={(e) => {
                    setNewField3(e.target.value);
                  }}
                  // value={newField3.find((item) => item.labId === labId)?.field}
                />
                <input
                  type="text"
                  onChange={(e) => {
                    setNewField4(e.target.value);
                  }}
                  // value={newField4.find((item) => item.labId === labId)?.field}
                />
                <input
                  type="text"
                  onChange={(e) => {
                    setNewField5(e.target.value);
                  }}
                  // value={newField5.find((item) => item.labId === labId)?.field}
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
                        onClick={(e) =>
                          console.log(
                            licenseChangeHandler(
                              e,
                              l,
                              existingLicense,
                              setExistingLicense
                            )
                          )
                        }
                      />
                    </div>
                  ))}

                {isEdit &&
                  filterExistingItems(targetLicenses, softwareLicensesEdit).map(
                    (res) => {
                      return (
                        <div>
                          <label htmlFor="">{res?.name}</label>
                          <input type="checkbox" />
                        </div>
                      );
                    }
                  )}
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
                {!isEdit &&
                  platforms?.map((p) => (
                    <div>
                      <label htmlFor="">{p.name}</label>
                      <input
                        type="checkbox"
                        onClick={(e) => {
                          licenseChangeHandler(
                            e,
                            p,
                            existingPlatforms,
                            setExistingPlatforms
                          );
                        }}
                      />
                    </div>
                  ))}

                {isEdit &&
                  filterExistingItems(platforms, softwarePlatformsEdit).map(
                    (res) => {
                      return (
                        <div>
                          <label htmlFor="">{res?.name}</label>
                          <input type="checkbox" />
                        </div>
                      );
                    }
                  )}
              </div>
              <label for="" className="form__label">
                : پلتفرم نرم افزار
              </label>
            </div>
            {/* ----------- platforms ---------------*/}
            {isPlatformOpenBox && (
              <div className="inputBoxes">
                <input
                  type="text"
                  onChange={(e) => setNewPlat1(e.target.value)}
                />
                <input
                  type="text"
                  onChange={(e) => setNewPlat2(e.target.value)}
                />
                <input
                  type="text"
                  onChange={(e) => setNewPlat3(e.target.value)}
                />
                <input
                  type="text"
                  onChange={(e) => setNewPlat4(e.target.value)}
                />
                <input
                  type="text"
                  onChange={(e) => setNewPlat5(e.target.value)}
                />
              </div>
            )}
            {/* ------------------------------------ */}
            <div className="form__inputbox">
              <input
                accept=".pdf"
                className="form__file-input form__input"
                type="file"
                placeholder="Name"
                id="pdf"
                onChange={(e) => {
                  e.target.files[0]?.size > 1e8
                    ? toast.error("سایز عکس حداکثر می تواند 10 مگابایت باشد", {
                        className: "foo-bar",
                      })
                    : setPdf(e.target.files[0]);
                }}
              />
              <label for="pdf">انتخاب فایل</label>
              <p for="pdf" className="form__label">
                :نرم افزار pdf انتخاب فایل
              </p>
            </div>
            {!isEdit && (
              <div className="form__inputbox form__inputbox--file">
                <input
                  accept="image/*"
                  className="form__file-input form__input"
                  type="file"
                  placeholder="Name"
                  id="snapshot5"
                  onChange={(e) => {
                    handleImgFileInput(e)
                      ? setSnap1(handleImgFileInput(e))
                      : toast.error(
                          "سایز عکس حداکثر می تواند 10 مگابایت باشد",
                          {
                            className: "foo-bar",
                          }
                        );
                  }}
                />
                <label for="snapshot5">5 فایل</label>

                <input
                  accept="image/*"
                  className="form__file-input form__input"
                  type="file"
                  placeholder="Name"
                  id="snapshot4"
                  onChange={(e) => {
                    handleImgFileInput(e)
                      ? setSnap2(handleImgFileInput(e))
                      : toast.error(
                          "سایز عکس حداکثر می تواند 10 مگابایت باشد",
                          {
                            className: "foo-bar",
                          }
                        );
                  }}
                />
                <label for="snapshot4">4 فایل</label>

                <input
                  accept="image/*"
                  className="form__file-input form__input"
                  type="file"
                  placeholder="Name"
                  id="snapshot3"
                  onChange={(e) => {
                    handleImgFileInput(e)
                      ? setSnap3(handleImgFileInput(e))
                      : toast.error(
                          "سایز عکس حداکثر می تواند 10 مگابایت باشد",
                          {
                            className: "foo-bar",
                          }
                        );
                  }}
                />
                <label for="snapshot3">3 فایل</label>

                <input
                  accept="image/*"
                  className="form__file-input form__input"
                  type="file"
                  placeholder="Name"
                  id="snapshot2"
                  onChange={(e) => {
                    handleImgFileInput(e)
                      ? setSnap4(handleImgFileInput(e))
                      : toast.error(
                          "سایز عکس حداکثر می تواند 10 مگابایت باشد",
                          {
                            className: "foo-bar",
                          }
                        );
                  }}
                />
                <label for="snapshot2">2 فایل</label>

                <input
                  accept="image/*"
                  className="form__file-input form__input"
                  type="file"
                  placeholder="Name"
                  id="snapshot1"
                  onChange={(e) => {
                    handleImgFileInput(e)
                      ? setSnap5(handleImgFileInput(e))
                      : toast.error(
                          "سایز عکس حداکثر می تواند 10 مگابایت باشد",
                          {
                            className: "foo-bar",
                          }
                        );
                  }}
                />
                <label for="snapshot1">1 فایل</label>

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
                onChange={(e) => {
                  setReviewLink1(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Link"
                className="form__input form__input--link"
                onChange={(e) => {
                  setReviewLink2(e.target.value);
                }}
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
                onChange={(e) => {
                  setCourseLink1(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Link"
                className="form__input form__input--link"
                onChange={(e) => {
                  setCourseLink2(e.target.value);
                }}
              />
              <input
                type="text"
                placeholder="Link"
                className="form__input form__input--link"
                onChange={(e) => {
                  setCourseLink3(e.target.value);
                }}
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
                cols="30"
                rows="10"
                className="form__textarea"
                placeholder="Your Text "
                onChange={(e) => {
                  setdescription(e.target.value);
                }}
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
