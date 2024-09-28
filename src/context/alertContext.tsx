import React, { createContext, useState, ReactNode, useCallback } from 'react';
import { AlertBox, AlertBoxYesNo, BlackOpacity } from '../components/ui/Alert';

export enum AlertType{
    ERROR,
    SUCESS,
    YES_NO,
}
export type AlertContextType = {
    dispatchAlert: (alertText:string, alertType:AlertType, onYes?:() => void,onNo?:() => void) => void
}


export const AlertContext = createContext<AlertContextType | undefined>(undefined);

export type AlertProviderProps = {
    initial?:string,
    children: ReactNode;
}

function AlertProvider({ initial = "",children }: AlertProviderProps) {
    const [alertText, setAlertText] = useState<string>("");
    const [onYes, setOnYes] = useState<() => void>();
    const [onNo, setOnNo] = useState<() => void>();
    const [open, setOpen] = useState<boolean>(false);
    const [alertType, setAlertType] = useState<AlertType>(AlertType.YES_NO);
    const dispatchAlert = useCallback((alertText:string, alertType:AlertType, onYes?:() => void,onNo?:() => void)=>{
        setAlertText(alertText)
        setAlertType(alertType)
        setOpen(true)
        setOnYes(() => () => {onYes && onYes()})
        setOnNo(() => () => {onNo && onNo()})
        if(alertType != AlertType.YES_NO)
        {
            setTimeout(()=>setOpen(false), 7000)
        }
        
    },[])

    return (
        <AlertContext.Provider value={{ dispatchAlert }}>
            <div style={{position:"relative"}}>
                {children}
                {alertType == AlertType.YES_NO ? 
                <BlackOpacity open={open}>
                    <AlertBoxYesNo open={open}>
                        {alertText}
                    <div className='buttons'>
                        <button className='bg-sucess' onClick={()=> {onYes && onYes(); setOpen(false);} }>Sim</button>
                        <button className='bg-error' onClick={()=> {onNo && onNo(); setOpen(false);} }>Não</button>
                    </div>
                    </AlertBoxYesNo>
                </BlackOpacity>
                :
                <AlertBox open={open} alertType={alertType}>{alertText}</AlertBox>}
            </div>
        </AlertContext.Provider>
    );
}

export default AlertProvider;