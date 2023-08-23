import "./news-page.scss";
import PageBannerLayout from "pages/page-banner-layout/PageBannerLayout";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { requestSetNews } from "redux/middlewares/newsMiddleware";
import { newsStateType } from "redux/reducers/newsSlice";
import NewNewsCard from "./NewNewsCard";
import MainNewsCard from "./MainNewsCard";

function NewsPage() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    requestSetNews(dispatch);
  }, []);
  const news = useSelector((state: { news: newsStateType }) => state.news);

  let newNews = undefined;
  let allNews = undefined;
  console.log("News State test ", news);
  if (Array.isArray(news)) {
    console.log("news", news);
    newNews = news.slice(0, 4);
    allNews = news.slice(4);
  }

  const data = {
    title: t("links.news"),
    bgImage: { gradient: true },
  };
  return (
    <PageBannerLayout data={data}>
      <div className="news-page tight-section">
        {newNews && <h2 className="news-section-header">احدث اخبارنا</h2>}
        <div className="news-grid-layout">
          {newNews && newNews[0] && (
            <div className="news-grid-item">
              <NewNewsCard data={newNews[0]} />
            </div>
          )}
          {typeof newNews === "object" && newNews.length >= 2 && (
            <div className="news-grid-item">
              <div className="new-news-cards-container">
                <NewNewsCard data={newNews[1]} className="row-1-of-2" />
                {newNews[2] && (
                  <NewNewsCard data={newNews[2]} className="row-1-of-2" />
                )}
                {newNews[3] && (
                  <NewNewsCard data={newNews[3]} className="row-1-of-1" />
                )}
              </div>
            </div>
          )}
        </div>
        {Array.isArray(allNews) && allNews.length >= 1 && (
          <h2 className="news-section-header">كل الاخبار</h2>
        )}
        <div className="news-grid-layout">
          {Array.isArray(allNews) && allNews.length >= 1 && (
            <div className="news-grid-item">
              <div className="news-three-cards-container">
                <MainNewsCard data={allNews[0]} isInline={true} />
                {allNews[1] && (
                  <MainNewsCard data={allNews[1]} isInline={true} />
                )}
                {allNews[2] && (
                  <MainNewsCard data={allNews[2]} isInline={true} />
                )}
              </div>
            </div>
          )}
          {Array.isArray(allNews) &&
            allNews.slice(2).map((news) => (
              <div className="news-grid-item">
                <MainNewsCard data={news} />
              </div>
            ))}
        </div>
      </div>
    </PageBannerLayout>
  );
}

export default NewsPage;
