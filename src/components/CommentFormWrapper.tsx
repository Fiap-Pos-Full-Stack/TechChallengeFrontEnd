import { styled } from "styled-components";

export const CommentFormWrapper = styled.div`
    & label{
        font-size: 1.2rem;
    }
    & input, & textarea{
        font-size: 1.2rem;
        border: 1px solid rgb(${props=> props.theme.colors.secondary});
        background-color: rgb(${props=> props.theme.colors.secondary});
        margin: 10px 0 20px;
    }
    & textarea{
        height:100px
    }
    & button{
        background-color: rgb(${props=> props.theme.colors.primary});
        color: rgb(${props=> props.theme.colors.secondary});
        padding: 8px 12px;
        font-size: 1.3rem;
        border-radius: 5px;
        transition: all linear 0.2s;
        display: inline ;
        width: auto;
    }
    & form{
        display: flex;
        flex-direction: column;
        margin-bottom: 40px;
    }
    

    @media (max-width: ${({theme}) => theme.smBreakpoint}px) {
        flex-direction: column;
        padding: 0%;
        gap: 46px 18px;
  }

`

export default CommentFormWrapper