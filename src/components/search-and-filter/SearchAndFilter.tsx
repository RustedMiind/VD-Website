import React, { Dispatch, SetStateAction } from "react";
import { Search } from "react-bootstrap-icons";
import "./search-and-filter.scss";

function SearchAndFilter(props: PropsType) {
  return (
    <div className="filter-container">
      <div className={`search-bar ${props.filter.filter && "with-filter"}`}>
        <input
          type="text"
          placeholder="بحث"
          value={props.filter.value[0]}
          onChange={(e) => {
            props.filter.value[1](e.target.value);
          }}
        />
        <Search />
      </div>
      {props.filter.filter && <button className="filter-btn">فلتر</button>}
    </div>
  );
}

type PropsType = {
  filter: FilterType;
};
type FilterType = {
  //   search: string;
  value: [string, React.Dispatch<SetStateAction<string>>];
  filter?: boolean;
};
export default SearchAndFilter;
