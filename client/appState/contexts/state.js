import { createContext, useReducer, useEffect } from "react";
import { object, func } from "prop-types";
import axios from "axios";
import { useRouter } from "next/router";
import { LOGIN, LOGOUT } from "../actions/userActions";

const Context = createContext();

function AppStateProvider({ reducer, initialState = {}, children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // router
  const router = useRouter();

  useEffect(() => {
    dispatch({
      type: LOGIN,
      payload: JSON.parse(window.localStorage.getItem("user")),
    });
  }, []);

  axios.interceptors.response.use(
    function (response) {
      return response;
    },

    function (error) {
      let res = error.response;

      console.log(res);

      if (res.status === 401 && res.config && !res.config.__isRetryRequest) {
        return new Promise((resolve, reject) => {
          axios
            .get("/api/v1/auth/logout")
            .then((data) => {
              console.log("/401 error > logout");
              dispatch({ type: LOGOUT });
              window.localStorage.removeItem("user");
              router.push("/login");
            })
            .catch((err) => {
              console.log("AXIOS INTERCEPTORS ERR", err);
              reject(error);
            });
        });
      }
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    const getCsrfToken = async () => {
      const { data } = await axios.get("/api/v1/csrf-token");
      console.log("CSRF", data);
      axios.defaults.headers["X-CSRF-Token"] = data.getCsrfToken;
    };
    getCsrfToken();
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
