import { useEffect } from "react";
import { useAuth } from "store/hooks-reduxer/hooks-redux";
import { useRouter } from "next/router";

export const useAuthRegister = ()=> {
    const {user} = useAuth();
    const {replace} = useRouter();
    useEffect(()=> {
        if(user)replace('/')
    },[user])
}