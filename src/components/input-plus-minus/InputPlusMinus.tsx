import "./input-plus-minus.scss";
import { DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import { DashCircle, PlusCircle } from "react-bootstrap-icons";

function InputPlusMinus(props: PropsType) {
  const isHandlersExist = props.handlers;
  const value = props.value;
  const setValue = props.setValue;

  // const [value, setValue] = useState("");
  const numberValue = parseInt(value);

  function valueHandler(num: number) {
    let newVal = numberValue + num;
    if (newVal && newVal >= 0) setValue(newVal.toString());
    else setValue((0).toString());
    // setValue((numberValue + num).toString());
  }
  function plusHandler() {
    valueHandler(1);
  }
  function minusHandler() {
    valueHandler(-1);
  }
  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const newVal = e.target.value;
    if (newVal.length === 0) {
      setValue("");
    } else if (numberValue === 0) {
      const noZero = newVal.replaceAll("0", "");
      if (noZero === parseInt(noZero).toString()) {
        setValue(parseInt(noZero.replaceAll("0", "")).toString());
      }
    } else if (newVal === parseInt(newVal).toString()) {
      setValue(parseInt(newVal).toString());
    }
  }
  return (
    <div className="input-plus-minus">
      <input
        {...props}
        type="text"
        value={value}
        {...(props.handlers && { style: { textAlign: "center" } })}
        onChange={changeHandler}
        onClick={(e) => {
          e.preventDefault();
          e.currentTarget.focus();
        }}
      />
      {isHandlersExist && (
        <div className="handlers-container">
          <button type="button" className="icon-btn" onClick={plusHandler}>
            <PlusCircle />
          </button>
          <button type="button" className="icon-btn" onClick={minusHandler}>
            <DashCircle />
          </button>
        </div>
      )}
    </div>
  );
}

interface PropsType
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  value: string;
  setValue: (n: string) => void;
  handlers?: boolean;
}

export default InputPlusMinus;
