import "./toaster.scss";
import { type } from "os";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  CheckCircleFill,
  ExclamationTriangleFill,
  XCircle,
  XOctagonFill,
} from "react-bootstrap-icons";

function Toaster({ toaster, onClose }: PropsType) {
  const [visible, setVisible] = useState(true);
  const [show, setShow] = useState(false);
  const [willHide, setWillHide] = useState(false);
  if (willHide) {
    setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 500);
    }, 1000);
  }
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
      setTimeout(() => {
        setWillHide(true);
      }, 5000);
    }, 10);
  }, []);
  if (visible)
    return (
      <div
        className={`toaster ${show ? "show" : ""} ${toaster.status} ${
          willHide ? "will-hide" : ""
        }`}
      >
        <div className="icon-container">
          {toaster.status === "error" && <XOctagonFill />}
          {toaster.status === "success" && <CheckCircleFill />}
          {toaster.status === "warning" && <ExclamationTriangleFill />}
        </div>
        <div className="content">{toaster.message}</div>
        <div
          className="close-btn"
          onClick={() => {
            setWillHide(true);
          }}
        >
          <XCircle />
        </div>
      </div>
    );
}

type PropsType = {
  toaster: ToasterType;
  onClose: () => void;
};

type ToasterType = {
  status: "error" | "warning" | "success" | "message";
  message: string;
  timeout?: number;
};

export default Toaster;
