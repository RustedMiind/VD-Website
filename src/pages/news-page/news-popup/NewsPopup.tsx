import { useEffect, useState } from "react";
import "./news-popup.scss";
import { NewsType } from "redux/reducers/newsSlice";

function NewsPopup(props: PropsType) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(props.show);
    }, 1);
    if (!props.show) {
      setTimeout(props.terminate, 400);
    }
  }, [props.show]);
  return (
    <div className={`news-wrapper ${show ? "show" : "hide"}`}>
      <div className="news-background" onClick={props.hide}></div>
      <div className="news-popup-container">
        <div className="news-popup">
          <img className="news-popup-image" src={props.news.image} alt="" />
          <h5 className="title">{props.news.title}</h5>
          <div className="describtion">{props.news.content}</div>
        </div>
      </div>
    </div>
  );
}

type PropsType = {
  news: NewsType;
  show: boolean;
  hide: () => void;
  terminate: () => void;
};

export default NewsPopup;
