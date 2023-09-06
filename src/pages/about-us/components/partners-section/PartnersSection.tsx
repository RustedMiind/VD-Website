import { useTranslation } from "react-i18next";
import PartnersIconsContainer from "./PartnersIconsContainer";
import "./partners-section-about.scss";
function PartnersSectionAbout(props: PropsType) {
  const { t } = useTranslation();

  return (
    <div className="partners-section-about tight-section centered-paragraph">
      <div className="header">
        <h4>{t("titles.partners")}</h4>
        {/* <p>
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا.{" "}
        </p> */}
      </div>
      <PartnersIconsContainer icons={props.icons} />
    </div>
  );
}

type PropsType = {
  icons: string[];
};

export default PartnersSectionAbout;
