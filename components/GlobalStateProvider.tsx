import React from "react";
import { getData } from "../hooks/useData";
const defaultGlobalState = getData()
const globalStateContext = React.createContext(defaultGlobalState);
const dispatchStateContext = React.createContext(undefined);

const GlobalStateProvider = ({ children }: { children: any }) => {
    const [state, dispatch] = React.useReducer(
        (state: any, newValue: any) => ({ ...state, ...newValue }),
        defaultGlobalState
    );
    return (
        <globalStateContext.Provider value={state}>
            <dispatchStateContext.Provider value={dispatch}>
                {children}
            </dispatchStateContext.Provider>
        </globalStateContext.Provider>
    );
};
export default GlobalStateProvider;
