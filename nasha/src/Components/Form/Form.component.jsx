import React, { useState } from "react";
import { toast } from "react-toastify";
import "./Form.style.css";

const Form = () => {
  const [comment, setComment] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  console.log("Toast", toast);
  const addUserCommentHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://hassan1245.pythonanywhere.com/Nesha/v1/suggestions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subject: title,
            name: fullName,
            email: email,
            text: comment,
          }),
        }
      );
      const data = await response;
      console.log(data);
      setTitle("");
      setEmail("");
      setFullName("");
      setComment("");
      toast.success("پیام شما ارسال شد", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
    } catch (error) {
      console.log(error.message);
      toast.error("خطایی رخ داده است");
    }
  };
  return (
    <form
      action="https://hassan1245.pythonanywhere.com"
      className="form"
      onSubmit={addUserCommentHandler}
    >
      <textarea
        required
        cols="30"
        rows="10"
        value={comment}
        placeholder="پیام"
        className="form__input--textarea"
        onChange={(e) => {
          setComment(e.target.value);
        }}
      ></textarea>
      <div className="form__input-containers">
        <input
          required
          className="form__input"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required
          className="form__input"
          type="text"
          placeholder="نام و نام خانوادگی"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          required
          className="form__input"
          type="text"
          placeholder="عنوان"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <input type="submit" value="ارسال" className="form__btn" />
    </form>
  );
};

export default Form;
