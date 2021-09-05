import Container from "../Container/Container.component";
import Title from "../Title/Title.component";
import Form from "../Form/Form.component";

import "./ContactUs.style.css";

const ContactUs = () => {
  return (
    <Container className="contactUs">
      <Title>ارتباط با ما</Title>
      <p className="contactUS__text">
        شما می توانید نظرات خود را برای بهبود این پروژه برای ما ارسال کنید
      </p>
      <Form />
    </Container>
  );
};

export default ContactUs;
