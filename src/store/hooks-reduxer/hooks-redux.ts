import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useSelector, useDispatch,TypedUseSelectorHook } from "react-redux";
import { RootState,AppDispath,TypeRootState } from "store/store";
import { rootAcnions } from "store/root-actions";



//export const userAppSelector = useSelector.withTypes<RootState>;
//export const useAppDispath = useDispatch.withTypes<AppDispath>
export const useActionsRedux = () => {
     const dispatch = useDispatch()
    //useMemo нужен для оптимизации, возврощает результат и меняет его только при изминении зависимости из массива. 
    // bindActionCreators передаёт функции из  Redux в хук из react
    return useMemo(() => bindActionCreators(rootAcnions,dispatch), [dispatch])
};

//Получение данных из хранилища 
export const useTupedSelector: TypedUseSelectorHook<TypeRootState> = useSelector

// Хук авторизации
export const useAuth = () => useTupedSelector(state => state.user);

// Profile хук

//3:45


