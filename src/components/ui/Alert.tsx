import { styled } from "styled-components";
import { AlertType } from "../../context/alertContext";

type AlertBoxProps =  {
    alertType:AlertType,
    open: boolean
}
export const AlertBox = styled.div<AlertBoxProps>`
background-color: rgb(${props => props.alertType == AlertType.ERROR ? props.theme.colors.error:(props.alertType == AlertType.SUCESS)?props.theme.colors.sucess :props.theme.colors.secondary});
position: fixed;
color: rgb(${props=>props.theme.colors.white});
padding:20px 40px;
bottom: 20px;
right: 20px;
opacity: ${props => props.open ? 1:0};
visibility: ${props => props.open ? "visible":"hidden"};
transition: opacity linear 0.2s,visibility linear 0.2s;;
`
type AlertBoxYesNoProps =  {
    open: boolean
}
export const AlertBoxYesNo = styled.div<AlertBoxYesNoProps>`
background-color: rgb(${props => props.theme.colors.secondary});
position: relative;
color: rgb(${props=>props.theme.colors.white});
padding:50px 70px;
opacity: ${props => props.open ? 1:0};
visibility: ${props => props.open ? "visible":"hidden"};
transition: opacity linear 0.2s,visibility linear 0.2s;
z-index: 99999;

& .buttons{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-top: 20px;
}
& button{
    padding: 8px 8px;
    font-size: 1.6rem;
    border-radius: 5px;
    transition: all linear 0.2s;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover
    {
        transform: translateY(-5px);
    }
}
`

export const BlackOpacity = styled.div<AlertBoxYesNoProps>`
background-color: ${props => props.open ? "rgb(0,0,0,0.1)":"rgb(0,0,0,0.0)"};
display: flex;
align-items: center;
justify-content: center;
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
z-index: 99997;
visibility: ${props => props.open ? "visible":"hidden"};
transition: all linear 0.2s;
`