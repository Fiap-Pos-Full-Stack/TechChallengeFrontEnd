import { HeaderContainer, HeaderWrapper, MenuIconWrapper, Logo, Menu } from "./style"
import useMenu from "../../hooks/useMenu"
import OpenCloseIcon from "../../assets/openCloseIcon"
import useAuth from "../../hooks/useAuth";

const Header =() =>{
    const {open, setOpen} = useMenu();
    const {token, setToken} = useAuth();
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <Logo>{token ? "Area Logada": "Blog"}</Logo>
                <Menu>
                    {token ? <li><a href="/admin">Dashboard</a></li>: ""}
                    <li><a href="/">Posts</a></li>
                    <li>{!token ? <a href="/login">Login</a>: <a href="/logout">Logout</a>}</li>
                </Menu>
            </HeaderWrapper>
        </HeaderContainer>
    );
}
export default Header;