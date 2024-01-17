import { PatientData } from "@/services/types";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface GlobalContextData {
  setSizeScreen: Dispatch<SetStateAction<{ width: number; height: number }>>;
  sizeScreen: { width: number; height: number };
  setSizeChildrenContainer: Dispatch<
    SetStateAction<{ width: number; height: number }>
  >;
  sizeChildrenContainer: { width: number; height: number };
  setCurrentPatient: Dispatch<SetStateAction<PatientData | undefined | null>>;
  currentPatient: PatientData | undefined | null;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  darkMode: boolean;
}

interface GlobalProps {
  children: ReactNode;
}

export const GlobalContext = createContext({} as GlobalContextData);

export const GlobalContextProvider = ({ children }: GlobalProps) => {
  const [sizeScreen, setSizeScreen] = useState<{
    width: number;
    height: number;
  }>({
    width: typeof window === "object" ? window.innerWidth : 0,
    height: typeof window === "object" ? window.innerHeight : 0,
  });
  const [sizeChildrenContainer, setSizeChildrenContainer] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });

  const [currentPatient, setCurrentPatient] = useState<
    PatientData | undefined | null
  >(undefined);

  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "object") {
      window.addEventListener("resize", () =>
        setSizeScreen({ width: window.innerWidth, height: window.innerHeight })
      );

      return () => {
        window.removeEventListener("resize", () =>
          setSizeScreen({
            width: window.innerWidth,
            height: window.innerHeight,
          })
        );
      };
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        setCurrentPatient,
        currentPatient,
        setSizeChildrenContainer,
        sizeChildrenContainer,
        setSizeScreen,
        sizeScreen,
        setDarkMode,
        darkMode,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
