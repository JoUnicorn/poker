import Link from 'next/link'

const linkStyle = {
  marginRight: 15,
  fontSize: 24
}

const headerM = {
  width: '960px',
  backgroundColor: 'orange'
}

const Header = () => (
    <div style={headerM}>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
    </div>
)

export default Header
