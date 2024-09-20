import { styled } from "styled-components";

export const FormWrapper = styled.div`
  & label{
        font-size: 1.2rem;
    }
    & input, & textarea{
        font-size: 1.2rem;
        border: 1px solid rgb(${props=> props.theme.colors.secondary});
        background-color: rgb(${props=> props.theme.colors.secondary});
        color: rgb(${props=> props.theme.colors.primary});
        margin: 10px 0 20px;
        padding: 10px;
    }
    & textarea{
        height:300px
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
    & button:hover{
        color: rgb(${props=> props.theme.colors.primary});
        background-color: rgb(${props=> props.theme.colors.secondary});

    }
    & input::placeholder, & textarea::placeholder {
        color: rgb(${props=> props.theme.colors.primary});
        opacity: 0.4;
    }
    & form{
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    @media (max-width: ${({theme}) => theme.smBreakpoint}px) {
        flex-direction: column;
        padding: 0%;
        gap: 46px 18px;
  }

`

export default FormWrapper