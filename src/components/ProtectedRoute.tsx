import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  //   const user = useAppSelector(authUserSelectors);
  // не совсем понял, можно ли использовать jwt для проверки на авторизованность , но в крайнем случае , как я понял можно сделать через персист(чтобы данные после обновления сохранялись в селекторе)
  const jwt = localStorage.getItem("jwt");
  if (!jwt) {
    return <Navigate to="/sign-in" />;
  } else {
    return <>{children}</>;
  }
};

export default ProtectedRoute;
