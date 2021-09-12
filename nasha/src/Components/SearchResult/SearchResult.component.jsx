import Title from "../Title/Title.component";
import SearchContainer from "../SearchContainer/SearchContainer.component";

import "./SearchResult.style.css";

const SearchResult = (props) => {
  return (
    <div className="searchResult">
      <Title>نتایج جستجو</Title>
      <SearchContainer softwares={props.softwares}/>
    </div>
  );
};

export default SearchResult;
