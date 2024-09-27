import Header from '../components/Header';
import GlobalStyle from '../styles/GlobalStyle';
import { ThemeProvider, useTheme } from 'styled-components';
import normalTheme from '../styles/Normal.styled';
import { Main } from '../components/Main';
import { Outlet } from 'react-router-dom';
import AuthProvider from '../context/authContext';
import { LOCAL_STORAGE_TOKEN } from '../configs/constraints';
import adminTheme from '../styles/Admin.styled';
import { Paragraph, SubSubSubTitle, SubSubTitle, SubTitle, Title } from '../components/ui/Typography';
import BigLink, { SmallLink } from '../components/ui/Links';
function Root() {
    const token = localStorage.getItem(LOCAL_STORAGE_TOKEN)
    return (
        <ThemeProvider theme={token ?  adminTheme:normalTheme }>
            <GlobalStyle />
            <AuthProvider initial={token || ""}>
                <Header />
            <Main>
                <div style={{display:"flex", backgroundColor:"white", padding:"20px", gap:"30px", width:"100%", justifyContent:"space-between"}}>
                    <div  style={{width:"30%"}}>
                        <Title>Titulo</Title>
                        <SubTitle>Sub titulo</SubTitle>
                        <SubSubTitle>Sub sub titulo</SubSubTitle>
                        <SubSubSubTitle>Sub sub sub titulo</SubSubSubTitle>
                        <Paragraph>
                            Paragrafo Paragrafo Paragrafo Paragrafo Paragrafo Paragrafo Paragrafo Paragrafo Paragrafo Paragrafo Paragrafo Paragrafo        
                        </Paragraph>
                    </div>
                    <div>
                        <div >
                            <div style={{marginBottom:"10px", display:"flex", gap:"10px",  alignItems:"center", fontSize:"16px"}}>
                                <div style={{backgroundColor:"rgb(" + normalTheme.colors.primary +")", width:"60px", height:"60px"}}></div>
                                <div>Primaria</div>
                            </div>
                            <div style={{marginBottom:"10px", display:"flex", gap:"10px",  alignItems:"center", fontSize:"16px"}}>
                                <div style={{backgroundColor:"rgb(" + normalTheme.colors.secondary +")", width:"60px", height:"60px"}}></div>
                                <div>Secundaria</div>
                            </div>
                            <div style={{marginBottom:"10px", display:"flex", gap:"10px",  alignItems:"center", fontSize:"16px"}}>
                                <div style={{backgroundColor:"rgb(" + normalTheme.colors.white +")", width:"60px", height:"60px"}}></div>
                                <div>Branco</div>
                            </div>
                            <div style={{marginBottom:"10px", display:"flex", gap:"10px",  alignItems:"center", fontSize:"16px"}}>
                                <div style={{backgroundColor:"rgb(" + normalTheme.colors.black +")", width:"60px", height:"60px"}}></div>
                                <div>Preto</div>
                            </div>
                            <div style={{marginBottom:"10px", display:"flex", gap:"10px",  alignItems:"center", fontSize:"16px"}}>
                                <div style={{backgroundColor:"rgb(" + normalTheme.colors.error +")", width:"60px", height:"60px"}}></div>
                                <div>Error</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{marginBottom:"10px", display:"flex", gap:"10px",  alignItems:"center", fontSize:"16px"}}>
                            <SmallLink>Link pequeno</SmallLink>
                            <div>Link pequeno ativo</div>
                        </div>
                        <div style={{marginBottom:"10px", display:"flex", gap:"10px",  alignItems:"center", fontSize:"16px"}}>
                            <BigLink>Link grande</BigLink>
                            <div>Link grande ativo</div>
                        </div>
                        
                    </div>
                </div>
            </Main>
            </AuthProvider>
        </ThemeProvider>
    );
}

export default Root;
