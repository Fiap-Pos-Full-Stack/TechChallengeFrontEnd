import Header from '../components/Header';
import GlobalStyle from '../styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import normalTheme from '../styles/Normal.styled';
import { Main } from '../components/Main';
import AsideMenu from '../components/AsideMenu';
import MenuProvider from '../context/menuContext';
import { Outlet } from 'react-router-dom';
import AuthProvider from '../context/authContext';
import { LOCAL_STORAGE_TOKEN } from '../configs/constraints';
import adminTheme from '../styles/Admin.styled';

function Root() {
    const token = localStorage.getItem(LOCAL_STORAGE_TOKEN)
    return (
        <ThemeProvider theme={token ?  adminTheme:normalTheme }>
            <GlobalStyle />
            <AuthProvider initial={token || ""}>
            <MenuProvider >
                <Header />
                <AsideMenu />
            </MenuProvider>
            <Main>
                <Outlet />
            </Main>
            </AuthProvider>
        </ThemeProvider>
    );
}

export default Root;
