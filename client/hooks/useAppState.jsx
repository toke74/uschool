import { useContext } from "react";
import { Context } from "../appState/contexts/state";

export const useAppState = () => {
  return useContext(Context);
};
