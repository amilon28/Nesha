import LeftBarItem from "../LeftBarItem/LeftBarItem.component";

const LeftBarList = () => {
  return (
    <ul className="left__list">
      <LeftBarItem text="رشته مهندسی کامپیوتر" />
      <LeftBarItem text="آزمایشگاه سیستم عامل" />
      <LeftBarItem text="آزمایشگاه شبکه" />
      <LeftBarItem text="رشته مهدسی برق" />
    </ul>
  );
};

export default LeftBarList;
