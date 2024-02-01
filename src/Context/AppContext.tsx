import { useContext } from "react";
import { createContext } from "react";

export interface stepType {
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>
}
export const AppContext = createContext<stepType | undefined>(undefined);
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("Eror")
    }
    return context
}
