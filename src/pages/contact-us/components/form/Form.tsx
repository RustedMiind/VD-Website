import api from "methods/api";
import { useReducer, useState } from "react";
import axios from "axios";
import ApiResponse from "types/ApiResponse";
import Toaster from "components/toaster/Toaster";

interface State {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  title: string;
  content: string;
}

type Action =
  | {
      type: "INPUT_CHANGE";
      payload: { name: "first_name"; value: string };
    }
  | {
      type: "RESET_FORM";
    };

const initialState: State = {
  first_name: "",
  last_name: "",
  phone: "",
  email: "",
  title: "",
  content: "",
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INPUT_CHANGE": {
      const { name, value } = action.payload;

      return {
        ...state,
        [name]: value,
      };
    }
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
};

function ContactForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [error, setError] = useState<State>(initialState);
  const [status, setStatus] = useState<
    "none" | "loading" | "success" | "error"
  >("none");
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    dispatch({
      type: "INPUT_CHANGE",
      payload: { name: name as "first_name", value },
    });
  };
  return (
    <form
      className="form-container"
      id="contactForm"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(state);
        const formData = new FormData();
        for (let i in state) {
          formData.append(i, state[i as keyof typeof state]);
        }

        setStatus("loading");
        axios
          .post<ApiResponse<State>>(api("client/contact"), formData)
          // .then((response) => response.json())
          .then((data) => {
            console.log(data);
            dispatch({
              type: "RESET_FORM",
            });
            setStatus("success");
          })
          .catch((error) => {
            setError(error.response.data.errors);
            setStatus("error");
            console.error(error);
          });
      }}
    >
      {/* <input type="text" name="test" /> */}
      <div className="input-container third">
        <label htmlFor="name">
          الاسم الاول
          <span className="text-error">{error.first_name}</span>
        </label>
        <input
          type="text"
          name="first_name"
          value={state.first_name}
          onChange={handleInputChange}
          placeholder="الاسم الاول"
        />
      </div>
      <div className="input-container third">
        <label htmlFor="name">
          الاسم الاخير
          <span className="text-error">{error.last_name}</span>
        </label>
        <input
          name="last_name"
          type="text"
          value={state.last_name}
          onChange={handleInputChange}
          placeholder="الاسم الاخير"
        />
      </div>
      <div className="input-container third">
        <label htmlFor="name">
          رقم الجوال
          <span className="text-error">{error.phone}</span>
        </label>
        <input
          name="phone"
          type="text"
          value={state.phone}
          onChange={handleInputChange}
          placeholder="رقم الجوال"
        />
      </div>
      <div className="input-container third">
        <label htmlFor="name">
          البريد الالكتروني
          <span className="text-error">{error.email}</span>
        </label>
        <input
          name="email"
          type="text"
          value={state.email}
          onChange={handleInputChange}
          placeholder="البريد الالكتروني"
        />
      </div>
      <div className="input-container third">
        <label htmlFor="name">
          عنوان الرسالة
          <span className="text-error">{error.title}</span>
        </label>
        <input
          name="title"
          type="text"
          value={state.title}
          onChange={handleInputChange}
          placeholder="عنوان الرسالة"
        />
      </div>
      <div className="input-container third">
        <label htmlFor="name">
          رسالتك
          <span className="text-error">{error.content}</span>
        </label>
        <textarea
          name="content"
          value={state.content}
          onChange={handleInputChange}
          placeholder="رسالتك"
        />
      </div>
      {/* <div className="sdf">{error}</div> */}
      <button className="submit-btn" type="submit">
        تواصل معنا
      </button>
      {status === "loading" && (
        <div className="loading-container">
          <span className="loader-effect"></span>
        </div>
      )}
      {status === "success" && (
        <Toaster toaster={{ status: "success", message: "تم الارسال بنجاح" }} />
      )}
      {status === "error" && (
        <Toaster toaster={{ status: "error", message: "فشل في الارسال." }} />
      )}
    </form>
  );
}

export default ContactForm;
