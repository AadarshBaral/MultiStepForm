
import { useState, ReactNode } from "react";
import { AppContext } from "./AppContext";

interface AppContextProviderProps {
    children: ReactNode; // ReactNode represents any JSX content
}
const AppContextProvider = ({ children }: AppContextProviderProps) => {
    const [step, setStep] = useState(1)
    return (
        <AppContext.Provider value={{ step, setStep }}>
            {children}
        </AppContext.Provider>
    );
};
export default AppContextProvider;
