import "./news-page.scss";
import PageBannerLayout from "pages/page-banner-layout/PageBannerLayout";
import { useEffect, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { requestSetNews } from "redux/middlewares/newsMiddleware";
import { NewsType, newsStateType } from "redux/reducers/newsSlice";
import NewNewsCard from "./NewNewsCard";
import MainNewsCard from "./MainNewsCard";
import { LangContext } from "contexts/LangContext";
import NewsPopup from "./news-popup/NewsPopup";
import NewPlaceHolder from "./PlaceHolder";

function NewsPage() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [popup, setPopup] = useState<NewsType>({
    id: 0,
    title: "string",
    content: "string",
    category_id: 0,
    category: "string",
    image: "string",
    published_at: "string",
    thumbnail: "string",
  });
  const [popupExist, setPopupExist] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const langContext = useContext(LangContext);
  const lang = langContext.lang();
  useEffect(() => {
    requestSetNews(dispatch);
  }, [lang]);
  const news = useSelector(
    (state: { news: { news: newsStateType } }) => state.news.news
  );

  let newNews = undefined;
  let allNews = undefined;
  if (Array.isArray(news)) {
    newNews = news.slice(0, 4);
    allNews = news.slice(4);
  }

  const data = {
    title: t("links.news"),
    bgImage: { gradient: true },
  };
  return (
    <PageBannerLayout data={data}>
      {typeof newNews === "object" && newNews.length >= 1 && (
        <div className="news-page tight-section">
          {popupExist && (
            <NewsPopup
              terminate={terminatePopup}
              show={showPopup}
              news={popup}
              hide={hidePopupHandler}
            />
          )}
          {newNews && (
            <h2 className="news-section-header">{t("titles.newestNews")}</h2>
          )}
          <div className="news-grid-layout">
            {newNews && newNews[0] && (
              <div className="news-grid-item">
                <NewNewsCard data={newNews[0]} show={showPopupHandler} />
              </div>
            )}
            <div className="news-grid-item">
              <div className="new-news-cards-container">
                {newNews[1] && (
                  <NewNewsCard
                    data={newNews[1]}
                    show={showPopupHandler}
                    className="row-1-of-2"
                  />
                )}
                {newNews[2] && (
                  <NewNewsCard
                    data={newNews[2]}
                    show={showPopupHandler}
                    className="row-1-of-2"
                  />
                )}
                {newNews[3] && (
                  <NewNewsCard
                    data={newNews[3]}
                    show={showPopupHandler}
                    className="row-1-of-1"
                    thumbnail={true}
                  />
                )}
              </div>
            </div>
          </div>
          {Array.isArray(allNews) && allNews.length >= 1 && (
            <h2 className="news-section-header">{t("titles.allNews")}</h2>
          )}
          <div className="news-grid-layout">
            {Array.isArray(allNews) && allNews.length >= 1 && (
              <div className="news-grid-item">
                <div className="news-three-cards-container">
                  <MainNewsCard
                    data={allNews[0]}
                    isInline={true}
                    show={showPopupHandler}
                    thumbnail={true}
                  />
                  {allNews[1] && (
                    <MainNewsCard
                      data={allNews[1]}
                      isInline={true}
                      show={showPopupHandler}
                      thumbnail={true}
                    />
                  )}
                  {allNews[2] && (
                    <MainNewsCard
                      data={allNews[2]}
                      isInline={true}
                      show={showPopupHandler}
                      thumbnail={true}
                    />
                  )}
                </div>
              </div>
            )}
            {Array.isArray(allNews) &&
              allNews.slice(3).map((news) => (
                <div className="news-grid-item">
                  <MainNewsCard
                    thumbnail={true}
                    data={news}
                    show={showPopupHandler}
                  />
                </div>
              ))}
          </div>
        </div>
      )}
      {typeof news === "string" && news === "loading" && (
        <>
          <div className="news-page tight-section">
            <h2 className="news-section-header">{t("titles.newestNews")}</h2>
            <NewPlaceHolder />
          </div>
        </>
      )}
      {typeof news === "string" && news === "error" && <h2>Error</h2>}
    </PageBannerLayout>
  );
  function showPopupHandler(data: NewsType) {
    setShowPopup(true);
    setPopupExist(true);
    setPopup(data);
  }
  function hidePopupHandler() {
    setShowPopup(false);
  }
  function terminatePopup() {
    setPopupExist(false);
  }
}

export default NewsPage;
