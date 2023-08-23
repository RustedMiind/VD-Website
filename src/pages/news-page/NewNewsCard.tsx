import { NewsType } from "redux/reducers/newsSlice";

function NewNewsCard(props: PropsType) {
  return (
    <div
      className={`new-news-card ${props.className || ""}`}
      style={{ backgroundImage: `url("${props.data.image}")` }}
    >
      <div className="content-container">
        <p className="new-icon">جديد</p>
        <h6 className="card-title">{props.data.content}</h6>
      </div>
    </div>
  );
}

type PropsType = {
  className?: string;
  data: NewsType;
};

export default NewNewsCard;
