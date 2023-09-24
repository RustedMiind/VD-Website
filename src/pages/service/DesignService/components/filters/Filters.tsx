import InputPlusMinus from "components/input-plus-minus/InputPlusMinus";
import { useState } from "react";

function Filters() {
  const [tempVal, setTempVal] = useState(0);

  return (
    <div className="lg:w-1/3 xl:w-1/4  w-full ">
      <form className="flex flex-col gap-4">
        <div className="input-container third">
          <label htmlFor="code">كود البناء</label>
          <select>
            <option value="1">1</option>
          </select>
        </div>
        <div className="input-container third">
          <label htmlFor="sizeMin">كود البناء</label>
          <div className="double">
            <InputPlusMinus value={tempVal} setValue={setTempVal} />
            <InputPlusMinus value={tempVal} setValue={setTempVal} />
          </div>
        </div>
        <div className="input-container third">
          <label htmlFor="sizeMin">كود البناء</label>
          <div className="double">
            <InputPlusMinus value={tempVal} setValue={setTempVal} handlers />
            <InputPlusMinus value={tempVal} setValue={setTempVal} handlers />
          </div>
        </div>
        <div className="input-container third">
          <label htmlFor="sizeMin">كود البناء</label>
          <div className="double">
            <InputPlusMinus value={tempVal} setValue={setTempVal} handlers />
            <InputPlusMinus value={tempVal} setValue={setTempVal} handlers />
          </div>
        </div>
        <div className="input-container third">
          <label htmlFor="code">كود البناء</label>
          <input type="text" />
        </div>
        <div className="input-container third">
          <label htmlFor="code">كود البناء</label>
          <input type="text" />
        </div>
        <div className="input-container third">
          <label htmlFor="code">كود البناء</label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
}

export default Filters;
