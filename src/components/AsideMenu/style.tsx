import { styled } from "styled-components";

type MenuNavProp = 
{
    $openMenu:boolean
}
export const MenuNav = styled.nav`
    width: 41.791vw;
    max-width: 420px;
    height: 100%;
    padding:51px 15px;
    position: relative;
    left: 0;
    background-color: ${props=> props.theme.background};
    transition: all 0.6s linear;
`
export const MenuWrapper = styled.div<MenuNavProp>`
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 99;
    left: 0;
    background: #6C6868C9;
    opacity: ${props => props.$openMenu ? "1" : "0"};
    visibility: ${props => props.$openMenu ? "visible" : "hidden"};;
    transition: opacity 0.5s linear, visibility 0.5s linear;
    & ${MenuNav}
    {
        transform: translateX(${props => props.$openMenu ? "0%" : "-100%"});
    }
    
`

export const MenuItem = styled.a`
    margin-bottom: 21px;
    display: block;
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: black;
    border-bottom: 1px solid ${props=>props.theme.primary+"7F"};
    text-decoration: none;
    transition: all 0.4s linear;

    &:hover
    {
        color: ${props=>props.theme.primary};
    }

`
