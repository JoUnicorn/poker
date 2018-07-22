import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const Post =  (props) => (
    <Layout>
       <h1>{props.show.dataset.name}</h1>
    </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://www.quandl.com/api/v3/datasets/WIKI/${id}.json?api_key=MS2Rg8PPdkKdQix6s2dY`)
  const show = await res.json()

  console.log(`Fetched show: ${show.dataset.dataset_code}`)

  return { show }
}

export default Post
