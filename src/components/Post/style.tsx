import styled from "styled-components";
import { SmallLink } from "../ui/Links";


export const PostWrapper  = styled.a`
    width: 100%;
    display: flex;
    margin-bottom: 20px;
    align-items: center; 
    transition: all linear 0.2s;
    height: auto;
    &:hover
    {
        transform: translateY(-8px);
    }
    &:hover ${SmallLink}
    {
        color: rgb(${props=> props.theme.colors.primary});
        background-color: rgb(${props=> props.theme.colors.secondary});
        
    }
    & article{
        height: 100%;
        display: flex;
        flex-direction: column;
    }
`
export const PostThumb = styled.div`
    width: 100%;
    height: 150px;
    position: relative;

    & time
    {
        font-size: 0.8rem;
        color: rgb(${props=> props.theme.colors.secondary});
        background-color: rgb(${props=> props.theme.colors.primary});
        padding: 5px 8px;
        position: absolute;
        top:10px;
        left:10px;
        border-radius: 5px;
        
    }

    & img{
        object-fit:cover;  /* This is the mainly problematic line*/
        overflow:hidden;
        width:100%;
        height:100%;
        border-radius: 10px;
    }
`
export const PostTitle = styled.h2`
    color: rgb(${props=> props.theme.colors.black},0.7);
    margin: 5px 0;
    line-height: 30px;
  
`
export const PostDescription = styled.p`
    font-size:0.8rem;
    color: rgb(${props=> props.theme.colors.black},0.7);
    line-height: 1.8rem;
`
export const PostInfo = styled.div`
    font-size: 0.8rem;
    font-weight: 400;
    margin: 8px 0;
    color: rgb(${props=> props.theme.colors.black},0.5);
`

export const PostReadMore = styled.div`
margin-top: auto;
`