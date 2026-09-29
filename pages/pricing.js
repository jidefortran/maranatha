export async function getServerSideProps() {
  return { redirect: { destination: "/contact-us/", permanent: false } };
}

export default function PricingRedirect() { return null; }
