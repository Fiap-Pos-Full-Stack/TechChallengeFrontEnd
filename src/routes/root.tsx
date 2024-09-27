import Header from '../components/Header';
import GlobalStyle from '../styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import normalTheme from '../styles/Normal.styled';
import { Main } from '../components/Main';
import { Outlet } from 'react-router-dom';
import AuthProvider from '../context/authContext';
import { LOCAL_STORAGE_TOKEN } from '../configs/constraints';
import adminTheme from '../styles/Admin.styled';
import AlertProvider from '../context/alertContext';

function Root() {
    const token = localStorage.getItem(LOCAL_STORAGE_TOKEN)
    return (
        <ThemeProvider theme={token ?  adminTheme:normalTheme }>
            <GlobalStyle />
            <AlertProvider>
                <AuthProvider initial={token || ""}>
                    <Header />
                <Main>
                    <Outlet />
                </Main>
                </AuthProvider>
            </AlertProvider>
        </ThemeProvider>
    );
}

export default Root;
