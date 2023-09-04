import "./news-popup.scss";
import { NewsType } from "redux/reducers/newsSlice";

function NewsPopup(props: PropsType) {
  if (props.show)
    return (
      <div className="news-wrapper">
        <div className="news-popup">
          <img className="news-popup-image" src={props.news.image} alt="" />
          <h5 className="title">{props.news.title}</h5>
          <div className="describtion">{props.news.content}</div>
        </div>
      </div>
    );
}

type PropsType = {
  news: NewsType;
  show: boolean;
};

export default NewsPopup;
