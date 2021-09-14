import { useContext, useEffect, useState } from "react";
import { SubjectContext } from "../../store/SubjectContext";

const RightBar = () => {
  const { softSearchTerm } = useContext(SubjectContext);
  const [license, setLicense] = useState("");
  const [platform, setPlatform] = useState("");
  const [reviewLink, setReviewLink] = useState("");
  const [courseLink, setCourseLink] = useState("");
  const [status, setStatus] = useState("");
  const [labID, setLabID] = useState("");
  const [like, setLike] = useState("");
  const [view, setView] = useState("");
  const [date, setDate] = useState("");
  const [paltforms, setPlat] = useState();
  const [licenses, setLicenses] = useState();

  const searchAboutSoftware = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://hassan1245.pythonanywhere.com/Nesha/v1/software_search/?licenses_name=${
        license ? license : ""
      }&platforms_name=${platform ? platform : ""}&review_links_url=${
        reviewLink ? reviewLink : ""
      }&course_links_url=${courseLink ? courseLink : ""}&offline_or_online=${
        status ? status : ""
      }&lab_id=${labID ? labID : ""}&search=${
        softSearchTerm ? softSearchTerm : ""
      }&ordering=-${like ? like : ""}&ordering=-${view ? view : ""}&ordering=-${
        date ? date : ""
      }&page=1`
    );

    const data = await response.json();
    console.log("Soft Details Info:", data);
  };

  const fetchPlatforms = async () => {
    const response = await fetch(
      `https://hassan1245.pythonanywhere.com/Nesha/v1/platforms`
    );

    const data = await response.json();
    setPlat(data.results);
  };

  const fetchLicenses = async () => {
    const response = await fetch(
      `https://hassan1245.pythonanywhere.com/Nesha/v1/licenses`
    );

    const data = await response.json();
    setLicenses(data.results);
  };

  useEffect(() => {
    fetchPlatforms();
    fetchLicenses();
  });
  return (
    <div className="right">
      <form
        action="#"
        className="form-right"
        onSubmit={(e) => searchAboutSoftware(e)}
      >
        {/*  */}
        <div className="selectbox">
          <div className="selectbox__title">:نوع پلتفرم</div>
          <select className="selectbox__input">
            <option value="" disabled selected hidden>
              Select
            </option>
            {paltforms?.map((p) => (
              <option
                value={p.name}
                onClick={(e) => setPlatform(e.target.value)}
              >
                {p.name}
              </option>
            ))}
          </select>
        </div>
        <div className="selectbox">
          <div className="selectbox__title">:نوع لایسنس</div>
          <select className="selectbox__input">
            <option value="" disabled selected hidden>
              Select
            </option>
            {licenses?.map((l) => (
              <option
                value={l.name}
                onClick={(e) => setLicenses(e.target.value)}
              >
                {l.name}
              </option>
            ))}
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
                onClick={(e) => setStatus(2)}
              />
              <label htmlFor="item">آنلاین</label>
            </div>
            <div className="checkitem">
              <input
                type="checkbox"
                id="item"
                className="checkitem__input"
                onClick={(e) => setStatus(1)}
              />
              <label htmlFor="item">آفلاین</label>
            </div>
          </div>
          <div className="checkitem">
            <input
              type="checkbox"
              id="item"
              className="checkitem__input"
              onClick={(e) => setCourseLink(".")}
            />
            <label htmlFor="item">آموزه برای آن موجود باشد</label>
          </div>
          <div className="checkitem">
            <input
              type="checkbox"
              id="item"
              className="checkitem__input"
              onClick={(e) => setReviewLink(".")}
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
              onClick={(e) => setLike("-likes")}
            />
            <label>تعداد لایک ها</label>
          </div>
          <div className="radioItem">
            <input
              type="checkbox"
              name="statics"
              className="radio__item"
              onClick={(e) => setView("-views")}
            />
            <label>تعداد بازدید ها</label>
          </div>
          <div className="radioItem">
            <input
              type="checkbox"
              name="statics"
              className="radio__item"
              onClick={(e) => setDate("-date_submitted")}
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
