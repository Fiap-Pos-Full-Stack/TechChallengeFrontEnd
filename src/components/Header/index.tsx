import { HeaderContainer, HeaderWrapper,  Menu } from "./style"
import useAuth from "../../hooks/useAuth";
import { Title } from "../ui/Typography";

const Header =() =>{
    const {token, setToken} = useAuth();
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <Title className="color-secondary">{token ? "Área Logada": "Blog"}</Title>
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