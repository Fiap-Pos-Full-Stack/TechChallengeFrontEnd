import styled from "styled-components";


export const HeaderContainer  = styled.header`
    background-color: rgb(${props => props.theme.colors.primary});
    padding: 20px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const HeaderWrapper  = styled.div`
    width: 1005px;
    display: flex;
    align-items: center;
    margin: 16px 30px;
    gap: 27px;
`

export const Menu = styled.ul`
    color:  rgb(${props => props.theme.colors.secondary});
    margin-left: auto;
    list-style: none;
    display: flex;
    gap: 30px;
`