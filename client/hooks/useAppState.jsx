import { useContext } from "react";
import { Context } from "../appState/contexts/state";

export function useAppState() {
  return useContext(Context);
}
