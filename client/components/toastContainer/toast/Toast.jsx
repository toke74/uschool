import { useAppState } from "../../../appState/contexts/appState";
import { DELETE_TOAST } from "../../../appState/actions/toastAction";
import SuccessToast from "./SuccessToast";
import ErrorToast from "./ErrorToast";
import UpdateToast from "./UpdateToast";
import WarningToast from "./WarningToast";

const Toast = (props) => {
  const { type, message, id } = props;
  const [state, dispatch] = useAppState();

  return (
    <>
      {/* success alert */}
      {type == "success" && (
        <SuccessToast
          type="success"
          message={message}
          id={id}
          dispatch={dispatch}
          DELETE_TOAST={DELETE_TOAST}
        />
      )}

      {/* error alert */}
      {type == "error" && (
        <ErrorToast
          type="error"
          message={message}
          id={id}
          dispatch={dispatch}
          DELETE_TOAST={DELETE_TOAST}
        />
      )}

      {/* update alert */}
      {type == "update" && (
        <UpdateToast
          type="update"
          message={message}
          id={id}
          dispatch={dispatch}
          DELETE_TOAST={DELETE_TOAST}
        />
      )}

      {/* warning alert */}
      {type == "warning" && (
        <WarningToast
          type="warning"
          message={message}
          id={id}
          dispatch={dispatch}
          DELETE_TOAST={DELETE_TOAST}
        />
      )}
    </>
  );
};

export default Toast;
