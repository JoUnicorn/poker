import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const Stock =  (props) => (
    <Layout>
      <h1> Stock</h1>
        <p> 1st financial product: stock</p>
          <h2> Mechanisms and profit </h2>
            <p> Mechanism: </p>
            <ol>
              <li> Bull strategy: buy at time t and sell at time t+n </li>
              <li> Bear strategy: sell at time t and buy at time t+n </li>
            </ol>
            <p> Profit: </p>
            <ol>
              <li> Bull strategy: selling price - buying price - transaction cost </li>
              <li> Bear strategy: buying price - selling price - transaction cost </li>
            </ol>
          <h2> Example </h2>
          <p>{props.show.dataset.name}</p>
          <table>
            <thead>
              <tr>
                <th>{props.show.dataset.column_names[0]}</th>
                <th>{props.show.dataset.column_names[2]}</th>
                <th>{props.show.dataset.column_names[3]}</th>
              </tr>
            </thead>
            <tbody>
              {props.show.dataset.data.map((x) => (
                <tr>
                  <td> {x[0]}</td>
                  <td> {x[2]}</td>
                  <td> {x[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
    </Layout>
)

Stock.getInitialProps = async function (context) {
  const res = await fetch(`https://www.quandl.com/api/v3/datasets/WIKI/FB.json?api_key=MS2Rg8PPdkKdQix6s2dY`)
  const show = await res.json()

  return { show }
}

export default Stock
