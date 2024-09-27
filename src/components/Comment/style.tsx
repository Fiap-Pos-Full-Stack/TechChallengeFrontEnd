import styled from "styled-components";




export const CommentHeader  = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
& time
{
    font-size: 0.9rem;
    opacity: 0.5;
}
`
export const CommentWrapper  = styled.a`
    width: 100%;
    display: flex;
    align-items: center; 
    transition: all linear 0.2s;
    flex-direction: column;
    align-items: start;
    border-bottom: 1px solid rgb(${props=> props.theme.colors.black},0.7);
    margin-bottom: 20px;
`

export const CommentTitle = styled.h2`
    color: rgb(${props=> props.theme.colors.primary});
    font-size: 1.2rem;
`
export const CommentContent = styled.div`
    font-size: 1.0rem;
    font-weight: 400;
    margin: 8px 0;
    color: rgb(${props=> props.theme.colors.black},0.5);
    line-height: 2rem;
`