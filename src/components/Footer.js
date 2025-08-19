import "./Footer.css"

const Footer = () => {
  const href = 'https://www.linkedin.com/in/michal-rais-1996x/'
  
  return <footer>
    <p>© 2025 AMAZINGSHOP.</p>
    <p>All rights reserved.</p>
    <p className="href">Contact: <a href={href}>www.linkedin.com</a></p>
    </footer>
  
}

export default Footer