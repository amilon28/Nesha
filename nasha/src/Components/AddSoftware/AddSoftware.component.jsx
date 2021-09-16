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
    refresh,
    setRefresh,
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
  const [allFields, setAllFields] = useState([]);

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

  // const [exlicense1, setExlicense1] = useState("");
  // const [exlicense2, setExlicense2] = useState("");
  // const [exlicense3, setExlicense3] = useState("");
  // const [exlicense4, setExlicense4] = useState("");
  // const [exlicense5, setExlicense5] = useState("");

  const [newPlat1, setNewPlat1] = useState("");
  const [newpalt2, setNewPlat2] = useState("");
  const [newpalt3, setNewPlat3] = useState("");
  const [newpalt4, setNewPlat4] = useState("");
  const [newpalt5, setNewPlat5] = useState("");

  const [images, setImages] = useState([]);

  const [online, setOnline] = useState(false);
  const [offline, setOffline] = useState(false);

  //---------------------------------------------
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

  //--------------------------------------------
  console.log("softDetaile.licenses", softDetaile?.licenses);

  const fetchLabsForTargetField = async (id) => {
    try {
      const response = await fetch(
        `https://hassan1245.pythonanywhere.com/Nesha/v1/fields/${id}`
      );
      if (!response.ok) return;
      const data = await response.json();
      return data.labs;
    } catch (error) {}
  };

  const fetchAllFields = async () => {
    try {
      const response = await fetch(
        `https://hassan1245.pythonanywhere.com/Nesha/v1/field_search/`
      );
      if (!response.ok) return;
      const data = await response.json();
      console.log("field Lists data ", data);
      return data;
    } catch (error) {}
  };

  let repdata = [];

  const fetchlabName = async (id) => {
    try {
      const response = await fetch(
        `https://hassan1245.pythonanywhere.com/Nesha/v1/labs/${id}`
      );
      if (!response.ok) return;
      const data = await response.json();
      return data.lab_name;
    } catch (error) {}
  };

  const fieldsLabs = async () => {
    if (!(newField1 && newField2 && newField3 && newField4 && newField5))
      return;
    const fieldsList = await fetchAllFields();

    if (newField1) {
      newField1?.forEach((i) => {
        const res = fieldsList?.find((item) => item.name === i.field);
        if (!res) {
          (async () => {
            const result = await fetchLabsForTargetField(res.id);
            result?.map((l) =>
              repdata.push({
                field: { id: res.id, name: res.name },
                lab: {
                  name: l.name,
                },
              })
            );

            const labname = await fetchlabName(i.labId);
            console.log("labn", labname);
            repdata.push({
              field: { id: res.id, name: res.name },
              lab: {
                id: i.labId,
                name: labname,
              },
            });
          })().catch(console.error);
        }
      });
    }

    if (newField2) {
      newField2?.forEach((i) => {
        const res = fieldsList?.find((item) => item.name === i.field);
        if (res) {
          const res2 = targetFields?.find((item) => item.name === i.field);
          if (!res2) {
            // if (
            //   newField2.find(
            //     (item) => item.field === i.field && item.labId !== i.labId
            //   )
            // )
            //   return;
            // if (newField1.find((item) => item.field === res.name)) return;
            // if (newField3.find((item) => item.field === res.name)) return;
            // if (newField4.find((item) => item.field === res.name)) return;
            // if (newField5.find((item) => item.field === res.name)) return;
            (async () => {
              const result = await fetchLabsForTargetField(res.id);
              result?.map((l) =>
                repdata.push({
                  field: { id: res.id, name: res.name },
                  lab: {
                    name: l.name,
                  },
                })
              );

              const labname = await fetchlabName(i.labId);
              console.log("labn", labname);
              repdata.push({
                field: { id: res.id, name: res.name },
                lab: {
                  id: i.labId,
                  name: labname,
                },
              });
            })().catch(console.error);
          }
        }
      });
    }

    if (newField3) {
      newField3?.forEach((i) => {
        const res = fieldsList?.find((item) => item.name === i.field);
        if (res) {
          const res2 = targetFields?.find((item) => item.name === i.field);
          if (!res2) {
            // if (
            //   newField3.find(
            //     (item) => item.field === i.field && item.labId !== i.labId
            //   )
            // )
            //   return;
            // if (newField2.find((item) => item.field === res.name)) return;
            // if (newField1.find((item) => item.field === res.name)) return;
            // if (newField4.find((item) => item.field === res.name)) return;
            // if (newField5.find((item) => item.field === res.name)) return;
            (async () => {
              const result = await fetchLabsForTargetField(res.id);
              result?.map((l) =>
                repdata.push({
                  field: { id: res.id, name: res.name },
                  lab: {
                    name: l.name,
                  },
                })
              );

              const labname = await fetchlabName(i.labId);
              console.log("labn", labname);
              repdata.push({
                field: { id: res.id, name: res.name },
                lab: {
                  id: i.labId,
                  name: labname,
                },
              });
            })().catch(console.error);
          }
        }
      });
    }

    if (newField4) {
      newField4?.forEach((i) => {
        const res = fieldsList?.find((item) => item.name === i.field);
        if (res) {
          const res2 = targetFields?.find((item) => item.name === i.field);
          if (!res2) {
            // if (
            //   newField4.find(
            //     (item) => item.field === i.field && item.labId !== i.labId
            //   )
            // )
            //   return;
            // if (newField2.find((item) => item.field === res.name)) return;
            // if (newField3.find((item) => item.field === res.name)) return;
            // if (newField1.find((item) => item.field === res.name)) return;
            // if (newField5.find((item) => item.field === res.name)) return;
            (async () => {
              const result = await fetchLabsForTargetField(res.id);
              result?.map((l) =>
                repdata.push({
                  field: { id: res.id, name: res.name },
                  lab: {
                    name: l.name,
                  },
                })
              );

              const labname = await fetchlabName(i.labId);
              console.log("labn", labname);
              repdata.push({
                field: { id: res.id, name: res.name },
                lab: {
                  id: i.labId,
                  name: labname,
                },
              });
            })().catch(console.error);
          }
        }
      });
    }

    if (newField5) {
      newField5?.forEach((i) => {
        const res = fieldsList?.find((item) => item.name === i.field);
        if (res) {
          const res2 = targetFields?.find((item) => item.name === i.field);
          if (!res2) {
            // if (
            //   newField5.find(
            //     (item) => item.field === i.field && item.labId !== i.labId
            //   )
            // )
            //   return;
            // if (newField2.find((item) => item.field === res.name)) return;
            // if (newField3.find((item) => item.field === res.name)) return;
            // if (newField4.find((item) => item.field === res.name)) return;
            // if (newField1.find((item) => item.field === res.name)) return;
            (async () => {
              const result = await fetchLabsForTargetField(res.id);
              result?.map((l) =>
                repdata.push({
                  field: { id: res.id, name: res.name },
                  lab: {
                    name: l.name,
                  },
                })
              );

              const labname = await fetchlabName(i.labId);
              repdata.push({
                field: { id: res.id, name: res.name },
                lab: {
                  id: i.labId,
                  name: labname,
                },
              });
            })().catch(console.error);
          }
        }
      });
    }

    console.log("final repdate", repdata);
    return repdata;
  };

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

  const getStatus = () => {
    if (online && offline) return 3;
    if (online) return 2;
    if (offline) return 1;
    if (!offline && !online) return 0;
  };

  const inputChanged = (state, value) => {
    const foundIndex = state.findIndex((item) => item.labId === labId);
    if (foundIndex === -1) return [...state, { field: value, labId: labId }];
    return [
      ...state.slice(0, foundIndex),
      { ...state[foundIndex - 1], field: value, labId: labId },
      ...state.slice(foundIndex + 1),
    ];
  };

  const authorization = (e) => {
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

    // if (newField1) formData.append();
    // if (newField2) formData.append();
    // if (newField3) formData.append();
    // if (newField4) formData.append();
    // if (newField5) formData.append();

    if (snap1) formData.append("snapshot1", snap1);
    if (snap1) formData.append("snapshot1", snap1);
    if (snap2) formData.append("snapshot2", snap2);
    if (snap3) formData.append("snapshot3", snap3);
    if (snap4) formData.append("snapshot4", snap4);
    if (snap5) formData.append("snapshot5", snap5);
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

    fieldsLabs();

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
    sendDate(formData);
  };

  async function sendDate(formData) {
    const response = await fetch(
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

    const data = await response.json();
    console.log("Response", data);
    toast.success("اطلاعات وارد شده با موفقیت ثبت گردید", {
      className: "foo-bar",
    });
    // setTimeout(() => window.location.reload(), 1000);
  }
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
                    setNewField1(inputChanged(newField1, e.target.value));
                  }}
                  value={newField1.find((item) => item.labId === labId)?.field}
                />
                <input
                  type="text"
                  onChange={(e) => {
                    setNewField2(inputChanged(newField2, e.target.value));
                  }}
                  value={newField2.find((item) => item.labId === labId)?.field}
                />
                <input
                  type="text"
                  onChange={(e) => {
                    setNewField3(inputChanged(newField3, e.target.value));
                  }}
                  value={newField3.find((item) => item.labId === labId)?.field}
                />
                <input
                  type="text"
                  onChange={(e) => {
                    setNewField4(inputChanged(newField4, e.target.value));
                  }}
                  value={newField4.find((item) => item.labId === labId)?.field}
                />
                <input
                  type="text"
                  onChange={(e) => {
                    setNewField5(inputChanged(newField5, e.target.value));
                  }}
                  value={newField5.find((item) => item.labId === labId)?.field}
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
                  softDetaile.licenses?.map((sl) =>
                    targetLicenses
                      ?.filter((el) => el.name !== sl.name)
                      ?.map((res) => {
                        return (
                          <div>
                            <label htmlFor="">{res?.name}</label>
                            <input type="checkbox" />
                          </div>
                        );
                      })
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

                {/* {isEdit &&
                  softDetaile.platforms?.map((sl) =>
                    platforms
                      ?.filter((el) => el.name !== sl.name)
                      ?.map((res) => {
                        return (
                          <div>
                            <label htmlFor="">{res?.name}</label>
                            <input type="checkbox" />
                          </div>
                        );
                      })
                  )} */}
                {/* 
                {isEdit &&
                  platforms
                    ?.map((ep) =>
                      softDetaile?.platforms?.map((sp) => {
                        if (sp.name !== ep.name) return ep;
                      })
                    )
                    .map((res, i, arr) => {
                      console.log("filterrrrrrr arr", arr);
                      return (
                        <div>
                          <label htmlFor="">{res?.name}</label>
                          <input type="checkbox" />
                        </div>
                      );
                    })} */}
                {isEdit &&
                  platforms
                    .filter((ep) =>
                      softDetaile?.platforms?.some((sp) => sp.name !== ep.name)
                    )
                    .map((res, i, arr) => {
                      console.log("wht....", arr);
                      return (
                        <div>
                          <label htmlFor="">{res?.name}</label>
                          <input type="checkbox" />
                        </div>
                      );
                    })}
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
