import { ReactNode } from "react";
import { ChallengesProvider } from "./ChallengesContext";

interface ContextProviderProps {
  children: ReactNode;
}

export function ContextProvider({ children }: ContextProviderProps) {
  return (
    <ChallengesProvider>
      {children}
    </ChallengesProvider>
  )
}