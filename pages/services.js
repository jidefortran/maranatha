import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import PageBanner from "../components/Common/PageBanner";

const services = [
  ["/mental-health/", "Mental Health Support"],
  ["/supported-independent-living/", "Supported Independent Living"],
  ["/respite-accommodation/", "Respite / Short Stay Accommodation"],
  ["/community-participation/", "Community Participation"],
  ["/psycho-social-recovery/", "Psycho-Social Recovery"],
  ["/support-daily-task/", "Support with Daily Tasks"],
  ["/drug-and-alcohol-support/", "Drug & Alcohol Support"],
  ["/counselling/", "Counselling"],
  ["/homelessness-support/", "Homelessness Support"],
  ["/domestic-violence-support/", "Domestic Violence Support"],
  ["/youth-services/", "Youth Services"],
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | Maranatha Wellbeing Support</title>
        <meta
          name="description"
          content="Explore Maranatha Wellbeing Support services for disability, mental health and community participation."
        />
      </Head>

      <Navbar />
      <PageBanner
        pageTitle="Our Services"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services"
        bgImgClass="item-bg2"
      />

      <main className="container py-5">
        <div className="row">
          {services.map(([href, title]) => (
            <div className="col-lg-4 col-md-6 mb-4" key={href}>
              <div className="p-4 h-100 border rounded">
                <h2 className="h4">
                  <Link href={href}>{title}</Link>
                </h2>
                <Link href={href} className="default-btn">
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
