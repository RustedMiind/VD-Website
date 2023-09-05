import { NewsType } from "redux/reducers/newsSlice";

function MainNewsCard(props: PropsType) {
  return (
    <div
      className={`inline-card ${props.isInline ? "" : "main-card"}`}
      onClick={() => {
        props.show(props.data);
      }}
    >
      <img
        className="card-image"
        src={
          props.thumbnail && props.data.thumbnail
            ? props.data.thumbnail
            : props.data.image
        }
      />
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
  show: (data: NewsType) => void;

  thumbnail?: boolean;
};
export default MainNewsCard;
