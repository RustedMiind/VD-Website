import api from "methods/api";
import { useReducer, useState } from "react";
import axios from "axios";
import ApiResponse from "types/ApiResponse";
import Toaster from "components/toaster/Toaster";
import { useTranslation } from "react-i18next";

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
  const t = useTranslation().t;
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
        setError(initialState);
        const formData = new FormData();
        for (let i in state) {
          formData.append(i, state[i as keyof typeof state]);
        }

        setStatus("loading");
        axios
          .post<ApiResponse<State>>(api("client/contact"), formData)
          // .then((response) => response.json())
          .then((data) => {
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
          {t("form.fName")}
          <span className="text-error">{error.first_name}</span>
        </label>
        <input
          type="text"
          name="first_name"
          value={state.first_name}
          onChange={handleInputChange}
          placeholder={t("form.fName")}
        />
      </div>
      <div className="input-container third">
        <label htmlFor="name">
          {t("form.lName")}
          <span className="text-error">{error.last_name}</span>
        </label>
        <input
          name="last_name"
          type="text"
          value={state.last_name}
          onChange={handleInputChange}
          placeholder={t("form.lName")}
        />
      </div>
      <div className="input-container third">
        <label htmlFor="name">
          {t("form.phone")}
          <span className="text-error">{error.phone}</span>
        </label>
        <input
          name="phone"
          type="text"
          value={state.phone}
          onChange={handleInputChange}
          placeholder={t("form.phone")}
        />
      </div>
      <div className="input-container third">
        <label htmlFor="name">
          {t("form.email")}
          <span className="text-error">{error.email}</span>
        </label>
        <input
          name="email"
          type="text"
          value={state.email}
          onChange={handleInputChange}
          placeholder={t("form.email")}
        />
      </div>
      <div className="input-container third">
        <label htmlFor="name">
          {t("form.subject")}
          <span className="text-error">{error.title}</span>
        </label>
        <input
          name="title"
          type="text"
          value={state.title}
          onChange={handleInputChange}
          placeholder={t("form.subject")}
        />
      </div>
      <div className="input-container third">
        <label htmlFor="name">
          {t("form.message")}
          <span className="text-error">{error.content}</span>
        </label>
        <textarea
          name="content"
          value={state.content}
          onChange={handleInputChange}
          placeholder={t("form.message")}
        />
      </div>
      {/* <div className="sdf">{error}</div> */}
      <button className="submit-btn" type="submit">
        {t("links.contact")}
      </button>
      {status === "loading" && (
        <div className="loading-container">
          <span className="loader-effect"></span>
        </div>
      )}
      {status === "success" && (
        <Toaster
          onClose={() => {
            setStatus("none");
          }}
          toaster={{ status: "success", message: t("send.success") }}
        />
      )}
      {status === "error" && (
        <Toaster
          onClose={() => {
            setStatus("none");
          }}
          toaster={{ status: "error", message: t("send.error") }}
        />
      )}
    </form>
  );
}

export default ContactForm;
