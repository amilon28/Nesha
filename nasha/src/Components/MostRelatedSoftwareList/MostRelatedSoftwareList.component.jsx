import MostRelatedSoftwareItem from "../MostRelatedSoftwareItem/MostRelatedSoftwareItem.component";

import "../MostRelatedSoftwares/MostRelatedSoftwares.style.css";
const MostRelatedSoftwareList = () => {
  return (
    <div className="MostRelatedSoftware__list">
      <MostRelatedSoftwareItem>
        رشته <span>مهندسی کامپیوتر</span> با ۵۰ آزمایشگاه <br /> و ۱۵۰ نرم افزار
        شبیه سازی
      </MostRelatedSoftwareItem>
      <MostRelatedSoftwareItem>
        رشته <span>مهندسی برق</span> با ۵۰ آزمایشگاه <br /> و ۱۵۰ نرم افزار شبیه
        سازی
      </MostRelatedSoftwareItem>
      <MostRelatedSoftwareItem>
        رشته <span>مهندسی مکانیک</span> با ۵۰ آزمایشگاه <br /> و ۱۵۰ نرم افزار
        شبیه سازی
      </MostRelatedSoftwareItem>
    </div>
  );
};

export default MostRelatedSoftwareList;
