import Title from "../Title/Title.component";
import SearchContainer from "../SearchContainer/SearchContainer.component";

import "./SearchResult.style.css";

const SearchResult = () => {
  return (
    <div className="searchResult">
      <Title>نتایج جستجو</Title>
      <SearchContainer />
    </div>
  );
};

export default SearchResult;
