import { useAppState } from "../hooks/useAppState";
import { ADD_TOAST, DELETE_TOAST } from "../appState/actions/toastAction";

export function useToast() {
  const { state, dispatch } = useAppState();

  function toast(type, message) {
    const id = Math.random().toString(36).substr(2, 9);
    dispatch({ type: ADD_TOAST, toast: { type, message, id } });

    setTimeout(() => {
      dispatch({ type: DELETE_TOAST, id: id });
    }, 5000);
  }

  return toast;
}
