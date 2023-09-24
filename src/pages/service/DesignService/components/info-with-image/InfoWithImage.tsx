import { EyeFill } from "react-bootstrap-icons";

function InfoWithImage() {
  return (
    <div className="advantages my-4 p-8 flex flex-wrap">
      <div className="pe-8  w-full md:w-1/2">
        <h4>عنوان الفيلا</h4>
        <p>
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
          النصوص الأخرى إضافة
        </p>
        <h6>يبدأ من</h6>
        <h5 className="text-third">6,000 ر.س</h5>
        <div className="w-full flex items-center justify-between">
          <h5>عرض الكتيب</h5>
          <button className="flex items-center justify-center gap-1 text-third cursor-pointer">
            <div>عرض</div>
            <EyeFill className="text-lg" />
          </button>
        </div>
      </div>
      <div className="ps-8 w-full md:w-1/2">
        <div className="image-container-16-9">
          <img
            src="https://img.freepik.com/premium-photo/modern-corporate-architecture-can-be-seen-cityscape-office-buildings_410516-276.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default InfoWithImage;
