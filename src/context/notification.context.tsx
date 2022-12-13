import React from "react";
import { Notification } from "../components";
import { AlertColor } from "@mui/material/Alert";

type ContextProps = {
  notify: (msg: string, status: AlertColor | undefined) => void;
};

const NofiticationContext = React.createContext<ContextProps | null>(null);

export const NotificationProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [msg, setMsg] = React.useState<string>("");
  const [open, setopen] = React.useState<boolean>(false);
  const [severity, setSeverity] = React.useState<AlertColor | undefined>(
    undefined
  );

  const handleClose = () => {
    setopen(false);
  };

  const notify = (msg: string, status: AlertColor | undefined) => {
    setSeverity(status);
    setMsg(msg);
    setopen(true);
  };

  return (
    <NofiticationContext.Provider value={{ notify }}>
      <Notification
        open={open}
        severity={severity}
        msg={msg}
        handleClose={handleClose}
      />
      {children}
    </NofiticationContext.Provider>
  );
};

export const useNotification = () => {
  const context = React.useContext(NofiticationContext);
  if (!context) throw new Error("Non existant context");
  return context;
};
