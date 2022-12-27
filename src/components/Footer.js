import NavBar from "./NavBar"
const Footer = () => {

    return (
        <footer>
            <a>Copyright &copy; 2022</a>
            <NavBar
                //{
                textLinkFooter="Home" //,
                hrefLinkFooter="http://localhost:3000/"
                //}
            />
        </footer>
    )
}

export default Footer