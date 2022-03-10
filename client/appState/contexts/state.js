import { createContext, useReducer, useEffect } from "react";
import { object, func } from "prop-types";
import { LOGIN } from "../actions/userActions";

const Context = createContext();

function AppStateProvider({ reducer, initialState = {}, children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({
      type: LOGIN,
      payload: JSON.parse(window.localStorage.getItem("user")),
    });
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}

AppStateProvider.propTypes = {
  reducer: func,
  initialState: object,
};

export { Context, AppStateProvider };
