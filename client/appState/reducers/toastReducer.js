import { ADD_TOAST, DELETE_TOAST } from "../actions/toastAction";

function toastReducer(state, action) {
  switch (action.type) {
    case ADD_TOAST: {
      return {
        ...state,
        toast: [...state.toast, action.toast],
      };
    }
    case DELETE_TOAST: {
      const updatedToasts = state.toast.filter((e) => e.id != action.id);
      return {
        ...state,
        toast: updatedToasts,
      };
    }
    default: {
      throw new Error("unhandled action type");
    }
  }
}

export default toastReducer;
