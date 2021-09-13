import ServicesItem from "../ServicesItem/ServicesItem.component";
import "../Services/Services.style.css";
const ServicesList = () => {
  return (
    <div className="services__list">
      <ServicesItem
        title="بخش نرم‌افزارها"
      />
      <p></p>
      <ServicesItem
        title="بخش رشته‌ها و آزمایشگاه‌ها"
        text=" نرم‌افزارهای مربوط به آزمایشگاه‌های بسیاری در این وبسایت پوشش داده شده است. با جستجو در بخش رشته‌ها(لینک) می‌توانید آزمایشگاه‌های مربوط به رشته مورد نظر و در بخش آزمایشگاه‌ها(لینک)، نرم‌افزارهای مربوط به آن رشته را پیدا کنید."
      />
      <ServicesItem
        title="نشا چه کاری انجام می‌دهد"
        text=" پیدا کردن نرم‌افزارهای آزمایشگاهی و قابلیت ثبت نظرات، پیشنهادات، مطالب مرتبط با هر نرم‌افزار و افزودن نرم‌افزار جدید خدماتی است که نشا ارائه می‌دهد.  "
      />
    </div>
  );
};

export default ServicesList;
