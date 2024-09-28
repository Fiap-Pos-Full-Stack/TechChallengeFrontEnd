import { styled } from "styled-components";

export const Link = styled.a`
    padding: 9px 8px;
    font-size: 10px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.1em;
    text-align: center;
    border-radius: 5px;
    background-color: ${props=> props.theme.linkBg};
    color: ${props=> props.theme.linkColor};
    cursor: pointer;
    transition: background-color 0.4s linear;

    &:hover
    {
        background-color: ${props=> props.theme.linkBg+"CC"};
    }

`

export const SmallLink = styled.a`
    background-color: rgb(${props=> props.theme.colors.primary});
    color: rgb(${props=> props.theme.colors.secondary});
    padding: 5px 8px;
    font-size: 0.8rem;
    border-radius: 5px;
    transition: all linear 0.2s;
    cursor: pointer;

    &:hover
    {
        color: rgb(${props=> props.theme.colors.primary});
        background-color: rgb(${props=> props.theme.colors.secondary});
    }
`

export const SmallLinkDel = styled.a`
    background-color: rgb(${props=> props.theme.colors.error});
    color: white;
    padding: 5px 8px;
    font-size: 0.8rem;
    border-radius: 5px;
    transition: all linear 0.2s;
    cursor: pointer;

    &:hover
    {
        color: white;
        background-color: #5f0303;
        transform: scale(1.2);
    }
    &:hover
    {
        color: rgb(${props=> props.theme.colors.error});
        background-color: rgb(${props=> props.theme.colors.white});
    }
`
export const SmallLinkEdit = styled.a`
    background-color: #1873D3;
    color: white;
    padding: 5px 8px;
    font-size: 0.8rem;
    border-radius: 5px;
    transition: all linear 0.2s;
    cursor: pointer;

    &:hover
    {
        color: white;
        background-color: #0a3664;
        transform: scale(1.2);
    }
`

export const BigLink = styled.a`
    background-color: rgb(${props=> props.theme.colors.sucess});
    color: white;
    padding: 8px 8px;
    font-size: 1.6rem;
    border-radius: 5px;
    transition: all linear 0.2s;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 170px;

    &:hover
    {
        color: white;
        background-color: #034621;
        transform: scale(1.2);
    }
`

export default BigLink