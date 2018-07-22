import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const Post =  (props) => (
    <Layout>
       <h1>{props.show.start_date}</h1>
    </Layout>
)

Post.getInitialProps = async function (context) {
  const { id } = "MS2Rg8PPdkKdQix6s2dY"
  const res = await fetch(`https://www.quandl.com/api/v3/datasets/WIKI/FB/data.json?api_key=${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.frequency}`)

  return { show }
}

export default Post
