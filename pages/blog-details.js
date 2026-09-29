export async function getServerSideProps() {
  return { redirect: { destination: "/blog/", permanent: false } };
}

export default function BlogDetailsRedirect() { return null; }
