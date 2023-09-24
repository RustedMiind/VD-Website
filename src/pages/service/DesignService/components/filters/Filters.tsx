import InputPlusMinus from "components/input-plus-minus/InputPlusMinus";
import { useState } from "react";

function Filters() {
  const [tempVal, setTempVal] = useState("");

  return (
    <div className="lg:w-1/3 xl:w-1/4  w-full ">
      <form className="flex flex-col gap-4">
        <div className="input-container third">
          <label htmlFor="code">كود البناء</label>
          <select name="code">
            <option value="1">1</option>
          </select>
        </div>
        <div className="input-container third">
          <label htmlFor="area">المساحة</label>
          <div className="double">
            <InputPlusMinus name="area" value={tempVal} setValue={setTempVal} />
            <InputPlusMinus
              name="areaMax"
              value={tempVal}
              setValue={setTempVal}
            />
          </div>
        </div>
        <div className="input-container third">
          <label htmlFor="rooms">غرف النوم</label>
          <div className="double">
            <InputPlusMinus
              name="rooms"
              value={tempVal}
              setValue={setTempVal}
              handlers
            />
            <InputPlusMinus
              name="roomsMax"
              value={tempVal}
              setValue={setTempVal}
              handlers
            />
          </div>
        </div>
        <div className="input-container third">
          <label htmlFor="floorsCount">عدد الطوابق</label>
          <div className="double">
            <InputPlusMinus
              name="floorsCount"
              value={tempVal}
              setValue={setTempVal}
              handlers
            />
            <InputPlusMinus
              name="floorsCountMax"
              value={tempVal}
              setValue={setTempVal}
              handlers
            />
          </div>
        </div>
        <div className="input-container third">
          <label htmlFor="landWidth">عرض الارض</label>
          <InputPlusMinus
            name="landWidth"
            value={tempVal}
            setValue={setTempVal}
          />
        </div>
        <div className="input-container third">
          <label htmlFor="landHeight">طول الارض</label>
          <InputPlusMinus
            name="landHeight"
            value={tempVal}
            setValue={setTempVal}
          />
        </div>
        <div className="input-container third">
          <label htmlFor="streetWidth">عرض الشارع الامامي</label>
          <InputPlusMinus
            name="streetWidth"
            value={tempVal}
            setValue={setTempVal}
          />
        </div>
      </form>
    </div>
  );
}

export default Filters;
