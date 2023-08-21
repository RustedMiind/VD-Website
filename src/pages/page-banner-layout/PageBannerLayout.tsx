import { Search } from "react-bootstrap-icons";
import "./page-banner-layout.scss";

function PageBannerLayout({ data, children }: PropsType) {
  return (
    <div className="page-banner-layout">
      <div
        className="bg-container banner"
        style={{
          backgroundImage: `url("${data.bgImage}")`,
        }}
      >
        <div className="overlay">
          <h2>{data.title}</h2>
        </div>
      </div>
      {/* {data.search && (
        <div className="filter-container">
          <div className={`search-bar ${data.filter && "with-filter"}`}>
            <input type="text" placeholder="بحث" />
            <Search />
          </div>
          {data.filter && <button className="filter-btn">فلتر</button>}
        </div>
      )} */}
      <div className="content">{children}</div>
    </div>
  );
}

type PropsType = {
  data: PageBannerDataType;
  children?: React.ReactNode;
};

export type PageBannerDataType = {
  bgImage: string;
  title: string;
  search?: boolean;
  filter?: boolean;
};

export default PageBannerLayout;
