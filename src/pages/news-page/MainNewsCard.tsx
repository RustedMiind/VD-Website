import { NewsType } from "redux/reducers/newsSlice";

function MainNewsCard(props: PropsType) {
  return (
    <div className={`inline-card ${props.isInline ? "" : "main-card"}`}>
      <img className="card-image" src={props.data.image} />
      <div className="content-container">
        <div>
          <h4 className="title">{props.data.title}</h4>
          <p className="descibtion">{props.data.content}</p>
        </div>
        <div className="date"> {props.data.published_at} </div>
      </div>
    </div>
  );
}

type PropsType = {
  isInline?: boolean;
  data: NewsType;
};
export default MainNewsCard;
