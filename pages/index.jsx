import Layout from "../component/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout
      title="Home | Next.js"
      description="Esta es la descripcion del Home"
      home
    >
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
