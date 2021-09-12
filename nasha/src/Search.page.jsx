import { useContext, useState } from "react";
import Header from "./Components/Header/Header.component";
import SearchResult from "./Components/SearchResult/SearchResult.component";
import { SubjectContext } from "./store/SubjectContext";

const Search = () => {
  const { softwareList } = useContext(SubjectContext);
  const [softList, setSoftList] = useState();
  setSoftList(softwareList);
  return (
    <div>
      <Header type="2" className="type-2" size="1" />
      <SearchResult softwares={softList} />
    </div>
  );
};

export default Search;
