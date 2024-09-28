import styled from "styled-components";


export const PostWrapper  = styled.article`
    width: 100%;
    display: flex;
    align-items: center; 
    transition: all linear 0.2s;

`
export const PostThumb = styled.div`
    width: 100%;
    height: 350px;
    position: relative;

    & time
    {
        font-size: 0.8rem;
        color: rgb(${props=> props.theme.colors.secondary});
        background-color: rgb(${props=> props.theme.colors.primary});
        padding: 5px 8px;
        position: absolute;
        top:10px;
        right:10px;
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
    margin: 10px 0;
`
export const PostInfo = styled.div`
    font-size: 0.8rem;
    font-weight: 400;
    margin: 8px 0;
    color: rgb(${props=> props.theme.colors.black},0.5);
`

export const PostContent = styled.p`
    font-size:1rem;
    color: rgb(${props=> props.theme.colors.black},0.7);
    line-height: 1.8rem;
    margin: 20px 0;
`

export const PostOperations = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    & .admin-operations
    {
        margin-left: auto;
        display: flex;
        gap: 10px;
    }
`