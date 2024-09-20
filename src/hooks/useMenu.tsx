import { useContext } from "react";
import { MenuContextType,MenuContext } from "../context/menuContext";


function useMenu(): MenuContextType {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error('Should be used in the provider');
    }
    return context;
}

export default useMenu