import { HeaderContainer, HeaderWrapper,  Menu } from "./style"
import useAuth from "../../hooks/useAuth";
import { Title } from "../ui/Typography";

const Header =() =>{
    const {token} = useAuth();
    return (
        <HeaderContainer>
            <HeaderWrapper className="mobile-col">
                <Title className="color-secondary">{token ? "Área Logada": "Blog"}</Title>
                <Menu className="mobile-col">
                    {token ? <li><a href="/admin">Administração</a></li>: ""}
                    <li><a href="/">Posts</a></li>
                    <li>{!token ? <a href="/login">Login</a>: <a href="/logout">Sair</a>}</li>
                </Menu>
            </HeaderWrapper>
        </HeaderContainer>
    );
}
export default Header;