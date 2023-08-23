import PageBannerLayout from "pages/page-banner-layout/PageBannerLayout";
import "./contact-us-page.scss";

function ContactUsPage() {
  const data = { bgImage: "", title: "تواصل معنا" };

  return (
    <PageBannerLayout data={data}>
      <div className="contact-us-page"> تواصل معنا</div>
    </PageBannerLayout>
  );
}

export default ContactUsPage;
