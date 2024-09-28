import React, { createContext, useState, ReactNode, useCallback, useEffect } from 'react';
import { LOCAL_STORAGE_TOKEN, LOCAL_STORAGE_USERID, LOCAL_STORAGE_USERNAME } from '../configs/constraints';
import { jwtDecode } from 'jwt-decode';
type UserToken = {
    exp?: number
    iat?: number
    username?: string
    _id?: number
}
export type AuthContextType = {
    token: string;
    setToken: React.Dispatch<React.SetStateAction<string>>;
    login: (token:string) => void
    logout: () => void
    authorId: number;
    authorName: string;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export type AuthProviderProps = {
    initial?:string,
    children: ReactNode;
}

function AuthProvider({ initial = "",children }: AuthProviderProps) {
    const [token, setToken] = useState<string>(initial);
    const [authorId, setAuthorId] = useState<number>(0);
    const [authorName, setAuthorName] = useState<string>("");

    useEffect(()=>{
        if(token)
        {
            try{
                const user = jwtDecode<UserToken>(token); // decode your token here
                setToken(token)
                setAuthorId(user._id || 0)
                setAuthorName(user.username||"")
            }
            catch{  }
        }

    },[token])
    const login = useCallback((authToken:string)=>{
        const user = jwtDecode<UserToken>(authToken); // decode your token here
        localStorage.setItem(LOCAL_STORAGE_TOKEN, authToken)
        localStorage.setItem(LOCAL_STORAGE_USERNAME, user.username?.toString() || "")
        localStorage.setItem(LOCAL_STORAGE_USERID, user._id?.toString() || "0")
        setToken(authToken)
        setAuthorId(user._id || 0)
        setAuthorName(user.username||"")
    },[])
    const logout = useCallback(()=>{
        localStorage.removeItem(LOCAL_STORAGE_TOKEN)
        localStorage.removeItem(LOCAL_STORAGE_USERNAME)
        localStorage.removeItem(LOCAL_STORAGE_USERID)
        setToken("")
        setAuthorId(0)
        setAuthorName("")
    },[])
    return (
        <AuthContext.Provider value={{ token, setToken,login,logout,authorId,authorName }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;