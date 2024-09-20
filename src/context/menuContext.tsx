import React, { createContext, useState, ReactNode } from 'react';

export type MenuContextType = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuContext = createContext<MenuContextType | undefined>(undefined);

export type MenuProviderProps = {
    initial?:boolean,
    children: ReactNode;
}

function MenuProvider({ initial = false,children }: MenuProviderProps) {
    const [open, setOpen] = useState<boolean>(initial);
    return (
        <MenuContext.Provider value={{ open, setOpen }}>
            {children}
        </MenuContext.Provider>
    );
}

export default MenuProvider;