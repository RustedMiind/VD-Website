import "./input-plus-minus.scss";
import { useState } from "react";
import { DashCircle, PlusCircle } from "react-bootstrap-icons";

function InputPlusMinus(props: PropsType) {
  const isHandlersExist = props.handlers;
  const value = props.value;
  const setValue = props.setValue;

  function plusHandler() {
    setValue(value + 1);
  }
  function minusHandler() {
    if (value > 0) {
      setValue(value - 1);
    }
  }
  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const newVal = e.target.value;
    if (newVal.length === 0) {
      setValue(0);
    } else if (value === 0) {
      const noZero = newVal.replaceAll("0", "");
      if (noZero === parseInt(noZero).toString()) {
        setValue(parseInt(noZero.replaceAll("0", "")));
      }
    } else if (newVal === parseInt(newVal).toString()) {
      setValue(parseInt(newVal));
    }
  }
  return (
    <div className="input-plus-minus">
      <input
        type="text"
        className="ltr"
        value={value}
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

type PropsType = {
  value: number;
  setValue: (n: number) => void;
  handlers?: boolean;
};

export default InputPlusMinus;
