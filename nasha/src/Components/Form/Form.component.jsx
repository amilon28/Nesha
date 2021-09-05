import "./Form.style.css";

const Form = () => {
  return (
    <form action="" class="form">
      <textarea
        cols="30"
        rows="10"
        placeholder="پیام"
        className="form__input form__input--textarea"
      ></textarea>
      <div className="form__input-containers">
        <input className="form__input" type="text" placeholder="عنوان" />
        <input
          className="form__input"
          type="text"
          placeholder="نام و نام خانوادگی"
        />
        <input
          className="form__input"
          type="email"
          placeholder="Email Address"
        />
      </div>
      <input type="submit" value="ارسال" className="form__btn" />
    </form>
  );
};

export default Form;
