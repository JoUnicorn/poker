import Header from './Header'
import Sidebar from './Sidebar'

const layoutStyle = {
  margin: '0px auto',
  padding: 20,
  width: '960px',
  textAlign: 'left'
}

const layoutContent = {
  float: 'right',
  width: '700px',
  backgroundColor: 'grey'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    <Sidebar />
    <div style={layoutContent}>
      {props.children}
    </div>
  </div>
)

export default Layout
