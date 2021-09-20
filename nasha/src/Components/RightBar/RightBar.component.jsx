import { useContext, useEffect, useState } from "react";
import { SubjectContext } from "../../store/SubjectContext";

const RightBar = () => {
  const { softSearchTerm, setSoftwaresInformation } =
    useContext(SubjectContext);
  const [license, setLicense] = useState("");
  const [platform, setPlatform] = useState("");
  const [reviewLink, setReviewLink] = useState("");
  const [courseLink, setCourseLink] = useState("");
  const [status, setStatus] = useState("");
  const [on, setOn] = useState(false);
  const [off, setOff] = useState(false);
  const [like, setLike] = useState("");
  const [view, setView] = useState("");
  const [date, setDate] = useState("");
  const [paltforms, setPlat] = useState();
  const [licenses, setLicenses] = useState();

  const searchAboutSoftware = async (e) => {
    e.preventDefault();
    if (on && off) setStatus(3);
    else if (on && !off) setStatus(2);
    else if (off && !on) setStatus(1);

    const response = await fetch(
      `https://hassan1245.pythonanywhere.com/Nesha/v1/software_search/?licenses__name=${
        license ? license : ""
      }&platforms__name=${platform ? platform : ""}&review_links__url=${
        reviewLink ? reviewLink : ""
      }&course_links__url=${courseLink ? courseLink : ""}&offline_or_online=${
        status !== 0 ? status : 0
      }&search=${softSearchTerm ? softSearchTerm : ""}&ordering=${
        like ? like : ""
      }&ordering=${view ? view : ""}&ordering=${date ? date : ""}&page=1`
    );

    const data = await response.json();
    setSoftwaresInformation(data);
    console.log("Soft Details Infooo:", data);
  };

  const fetchPlatforms = async () => {
    const response = await fetch(
      `https://hassan1245.pythonanywhere.com/Nesha/v1/platforms/`
    );

    const data = await response.json();
    setPlat(data.results);
  };

  const fetchLicenses = async () => {
    const response = await fetch(
      `https://hassan1245.pythonanywhere.com/Nesha/v1/licenses/`
    );

    const data = await response.json();
    setLicenses(data.results);
  };

  useEffect(() => {
    fetchPlatforms();
    fetchLicenses();
  }, []);

  return (
    <div className="right">
      <form
        action="#"
        className="form-right"
        onSubmit={(e) => searchAboutSoftware(e)}
      >
        <div className="selectbox">
          <div className="selectbox__title">:نوع پلتفرم</div>
          <select
            className="selectbox__input"
            onChange={(e) => setPlatform(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Platform
            </option>
            {paltforms?.map((p) => (
              <option value={p.name} plat-id={p.id}>
                {p.name}
              </option>
            ))}
            <option value="">none</option>
          </select>
        </div>
        <div className="selectbox">
          <div className="selectbox__title">:نوع لایسنس</div>
          <select
            className="selectbox__input"
            onChange={(e) => setLicense(e.target.value)}
          >
            <option value="" disabled selected hidden>
              License
            </option>
            {licenses?.map((l) => (
              <option value={l.name} lic-id={l.id}>
                {l.name}
              </option>
            ))}
            <option value="">none</option>
          </select>
        </div>
        {/*  */}
        <div className="checkList">
          <div className="onOff">
            <div className="checkitem">
              <input
                type="checkbox"
                id="item"
                className="checkitem__input"
                onClick={(e) => setOn(true)}
              />
              <label htmlFor="item">آنلاین</label>
            </div>
            <div className="checkitem">
              <input
                type="checkbox"
                id="item"
                className="checkitem__input"
                onClick={(e) => setOff(true)}
              />
              <label htmlFor="item">آفلاین</label>
            </div>
          </div>
          <div className="checkitem">
            <input
              type="checkbox"
              id="item"
              className="checkitem__input"
              onClick={() => setCourseLink(".")}
            />
            <label htmlFor="item">آموزه برای آن موجود باشد</label>
          </div>
          <div className="checkitem">
            <input
              type="checkbox"
              id="item"
              className="checkitem__input"
              onClick={() => setReviewLink(".")}
            />
            <label htmlFor="item">نقد برای آن موجود باشد</label>
          </div>
        </div>
        {/*  */}
        <div className="radioList">
          <div className="radioItem">
            <input
              type="checkbox"
              name="statics"
              className="radio__item"
              onClick={() => setLike("-likes")}
            />
            <label>تعداد لایک ها</label>
          </div>
          <div className="radioItem">
            <input
              type="checkbox"
              name="statics"
              className="radio__item"
              onClick={() => setView("-views")}
            />
            <label>تعداد بازدید ها</label>
          </div>
          <div className="radioItem">
            <input
              type="checkbox"
              name="statics"
              className="radio__item"
              onClick={() => setDate("-date_submitted")}
            />
            <label>تاریخ افزودن</label>
          </div>
        </div>
        <input type="submit" value="تایید" className="form-btn" />
      </form>
    </div>
  );
};

export default RightBar;
