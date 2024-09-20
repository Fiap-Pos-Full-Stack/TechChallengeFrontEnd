import styled from "styled-components";
import SmallLink from "../SmallLink";


export const PostWrapper  = styled.article`
    width: 100%;
    display: flex;
    align-items: center; 
    justify-content: space-between;
    align-items: center;
    transition: all linear 0.2s;
    border-bottom: 1px solid rgb(${props=> props.theme.colors.black},0.5);
`
export const PostTitle = styled.h2`
    color: rgb(${props=> props.theme.colors.black},0.7);
    padding-bottom: 15px;
    margin-top: 15px;
`

export const PostOperations = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`