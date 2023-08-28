import { Search } from "react-bootstrap-icons";
import "./page-banner-layout.scss";
import { NavLink } from "react-router-dom";

function PageBannerLayout({ data, children }: PropsType) {
  return (
    <div className="page-banner-layout">
      <div
        className="bg-container banner"
        style={{
          backgroundImage:
            typeof data.bgImage === "object"
              ? `linear-gradient(265.03deg, #004693 0%, #29285E 100%)`
              : `url("${data.bgImage}")`,
        }}
      >
        <div className="overlay">
          <h2>{data.title}</h2>
          {typeof data.subtitle === "object" &&
            data.subtitle.type === "paragraph" && (
              <p className="subtitle">{data.subtitle.paragraph}</p>
            )}
          {typeof data.subtitle === "object" &&
            data.subtitle.type === "navigate" && (
              <div className="navigate">
                {data.subtitle.links.map((link) => (
                  <NavLink to={link.path}>{link.title}</NavLink>
                ))}
              </div>
            )}
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
  bgImage: string | { gradient: boolean };
  title: string;
  subtitle?:
    | {
        type: "navigate";
        links: { title: string; path: string }[];
      }
    | {
        type: "paragraph";
        paragraph: string;
      };
  search?: boolean;
  filter?: boolean;
};

export default PageBannerLayout;
