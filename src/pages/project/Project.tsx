import PageBannerLayout, {
  PageBannerDataType,
} from "pages/page-banner-layout/PageBannerLayout";

import { useParams } from "react-router-dom";

function Project() {
  const { projectId } = useParams();
  const data: PageBannerDataType = {
    bgImage:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    title: `المشروع ${projectId}`,
  };
  return <PageBannerLayout data={data}></PageBannerLayout>;
}

export default Project;
