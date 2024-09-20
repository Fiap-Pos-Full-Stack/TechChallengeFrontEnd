import { styled } from "styled-components";

type OpenCloseIconProps = {
 open:boolean,
 onClick: ()=>void
}

type IconLineProps =  {
    open:boolean,
}
export const IconLine = styled.div`
    height: 3px;
    background-color: rgb(${props=> props.theme.colors.white});
    border-radius: 1px;
    transition: .2s;

`
export const IconWrapper = styled.div<IconLineProps>`
   display: flex;
    flex-direction: column;
    row-gap: 5px;
    width: 32px;
    cursor: pointer;
    &:hover ${IconLine}
    {
        background-color: rgb(${props=>props.theme.colors.secondary});
    }
    & ${IconLine}:first-child {
        transform: rotate(${props=>props.open? "40deg" : "0deg"}) translate(${props=>props.open? "5px, 6.45px" : "0"});
    }
    & ${IconLine}:nth-child(2) {
        opacity: ${props=>props.open? "0" : "a"};
    }
    & ${IconLine}:last-child {
        transform: rotate(${props=>props.open? "-40deg" : "0deg"}) translate(${props=>props.open? "5px,-6.45px" : "0"})
    }
`

const OpenCloseIcon =({ open,onClick }: OpenCloseIconProps) =>{
    return (
        <IconWrapper onClick={onClick} open={open} role="button">
            <IconLine />
            <IconLine />
            <IconLine />
        </IconWrapper>
    );
}

export default OpenCloseIcon