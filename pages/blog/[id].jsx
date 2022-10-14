import Layout from "../../component/layout";

export default function primerPost({data}) {
  return (
    <Layout
      title="Mi primer post | next.js"
      description="agregue una descripcion al primer post"
    >
      <h1>{data.id} - {data.title}</h1>
      <p>{data.body}</p>

    </Layout>
  )
}

// eslint-disable-next-line @next/next/no-typos
export async function getStaticPaths(){
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    const paths = data.map(({id}) => ({params: {id: `${id}`}}));

    return {
      paths,
      fallback: false
    }
  } catch (error) {
    
  }
}

export async function getStaticProps({params}) {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + params.id);
    const data = await res.json();

    return {
      props: {
        data
      },
    };
  } catch (error) {
    console.log(error);
  }
}