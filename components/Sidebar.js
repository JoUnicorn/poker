import Link from 'next/link'

const sidebarM = {
  float: 'left',
  width: '260px',
  backgroundColor: 'red'
}

const Sidebar = () => (
    <div style={sidebarM}>
      <h1>Menu</h1>
      <ul>
      <li>
        <Link href="/stock">
          <a>Stock</a>
        </Link>
      </li>
      </ul>
      <style jsx>{`
        h1, a {
          font-family: "Arial";
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
          font-family: "Arial";
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </div>
)

export default Sidebar
