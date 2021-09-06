import plusCircle from "../assets/img/plus-circle.svg";
import programIcon from "../assets/img/program-icon.svg";

import "./AddSoftware.style.css";

const AddSoftware = () => {
  return (
    <section class="addSoftware">
      <div class="addSoftware__textbox">
        <h2 class="addSoftware__title">افزودن نرم افزار</h2>
        <p class="addSoftware__decription">
          .ابتدا نرم افزار مورد نظر خود را جستجو کنید تا مطمئن شوید که نرم افزار
          وجود ندارد سپس موارد لازم در فرم پایین را کامل کنید موارد ستاره دار
          الزامی است
        </p>
      </div>
      <div class="addSoftware__form">
        <form action="" class="form">
          <div class="form__user">
            <div class="form__requiredInfos">
              <div class="form__inputbox">
                <input
                  type="text"
                  required
                  placeholder="Name"
                  class="form__input"
                />
                <label for="" class="form__label">
                  : نام
                </label>
              </div>
              <div class="form__inputbox">
                <input
                  type="text"
                  required
                  placeholder="Family"
                  class="form__input"
                />
                <label for="" class="form__label">
                  :نام خانوادگی
                </label>
              </div>
              <div class="form__inputbox">
                <input
                  type="email"
                  required
                  placeholder="Email"
                  class="form__input"
                />
                <label for="" class="form__label">
                  :ایمیل
                </label>
              </div>
              <div class="form__inputbox">
                <input
                  type="text"
                  required
                  placeholder="Student Number"
                  class="form__input"
                />
                <label for="" class="form__label">
                  : شماره دانشجویی
                </label>
              </div>
              <div class="form__inputbox">
                <input
                  type="text"
                  required
                  placeholder="Software Name"
                  class="form__input"
                />
                <label for="" class="form__label">
                  :نام نرم افزار
                </label>
              </div>
              <div class="form__inputbox">
                <input
                  type="text"
                  required
                  placeholder="Software Link"
                  class="form__input"
                />
                <label for="" class="form__label">
                  : لینک مربوط به نرم افزار
                </label>
              </div>
            </div>
            <div class="form__programIcon">
              <label for="" class="form__label">
                آیکون برنامه
              </label>
              <img src={programIcon} alt="program icon" />
              <input class="form__file-input" type="file" id="select-fire" />
              <label for="select-fire">انتخاب فایل</label>
            </div>
          </div>
          <div class="form__softwar">
            <div class="form__inputbox form__inputbox--select">
              <div class="form__hint">
                <img class="form__hint-icon" src={plusCircle} alt="plus-sign" />
                <p>اگر آزمایشگاه مورد نظر شما وجود ندارد آن را اضافه کنید</p>
              </div>
              <select name="" id="" class="form__select">
                <option value="" selected disabled hidden>
                  Select
                </option>
              </select>
              <label for="" class="form__label">
                : آزمایشگاه نرم افزار
              </label>
            </div>
            <div class="form__inputbox form__inputbox--select">
              <div class="form__hint">
                <img class="form__hint-icon" src={plusCircle} alt="plus-sign" />
                <p>اگر رشته مورد نظر شما وجود ندارد آن را اضافه کنید</p>
              </div>
              <select name="" id="" class="form__select">
                <option value="" selected disabled hidden>
                  Select
                </option>
              </select>
              <label for="" class="form__label">
                : رشته نرم افزار
              </label>
            </div>
            <div class="form__inputbox form__inputbox--select">
              <div class="form__hint">
                <img class="form__hint-icon" src={plusCircle} alt="plus-sign" />
                <p>اگر پلتفرم مورد نظر شما وجود ندارد آن را اضافه کنید</p>
              </div>
              <select name="" id="" class="form__select">
                <option value="" selected disabled hidden>
                  Select
                </option>
              </select>
              <label for="" class="form__label">
                : پلتفرم نرم افزار
              </label>
            </div>
            <div class="form__inputbox form__inputbox--select">
              <div class="form__hint">
                <img class="form__hint-icon" src={plusCircle} alt="plus-sign" />
                <p>اگر لایسنس مورد نظر شما وجود ندارد آن را اضافه کنید</p>
              </div>
              <select name="" id="" class="form__select">
                <option value="" selected disabled hidden>
                  Select
                </option>
              </select>
              <label for="" class="form__label">
                : لایسنس نرم افزار
              </label>
            </div>
            <div class="form__inputbox">
              <input
                class="form__file-input"
                type="file"
                placeholder="Name"
                class="form__input"
                id="pdf"
              />
              <label for="select-fire">انتخاب فایل</label>
              <p for="pdf" class="form__label">
                : انتخاب فایل pdf نرم افزار
              </p>
            </div>
            <div class="form__inputbox">
              <input
                class="form__file-input"
                type="file"
                placeholder="Name"
                class="form__input"
                id="snapshot"
              />
              <label for="select-fire">انتخاب فایل</label>

              <p for="snapshot" class="form__label">
                : انتخاب اسنپ شات های نرم افزار
              </p>
            </div>
            <div class="form__inputbox form__inputbox--check">
              <div class="checkbox-container">
                <input type="radio" name="state" placeholder="Name" />
                آنلاین
                <input type="radio" name="state" placeholder="Name" />
                آفلاین
              </div>
              <label for="" class="form__label">
                :آیا نرم‌افزار به صورت آنلاین یا آفلاین موجود است
              </label>
            </div>
            <div class="form__inputbox form__inputbox--link">
              <input type="text" placeholder="Link" class="form__input" />
              <label for="" class="form__label">
                : لینک های نقد نرم افزار
              </label>
            </div>
            <div class="form__inputbox form__inputbox--link">
              <input type="text" placeholder="Link" class="form__input" />
              <label for="" class="form__label">
                : لینک های آموزه نرم افزار
              </label>
            </div>
            <div class="form__inputbox form__inputbox--description">
              <label for="" class="form__label">
                :توضیحات
              </label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                class="form__textarea"
                placeholder="Your Text "
              ></textarea>
            </div>
          </div>
          <div class="form__btn--submit">
            <input type="submit" value="افزودن" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddSoftware;
