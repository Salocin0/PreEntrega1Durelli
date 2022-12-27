import CartWidget from "./CartWidget"

const NavBar = (props) => {

const { isHeader, textLinkFooter, hrefLinkFooter } = props
    
if (isHeader) {
    return (
        <nav className="header__navbar">
            <a className="header__link" href="http://localhost:3000/">Inicio</a>
            <a className="header__link" href="http://localhost:3000/">Productos</a>
            <a className="header__link" href="http://localhost:3000/">Contacto</a>
            <CartWidget/>
        </nav>
    )
} else {
    return (
        <nav className="header__navbar">
            <a href={hrefLinkFooter}>{textLinkFooter}</a>
        </nav>
        )
    }
}

export default NavBar