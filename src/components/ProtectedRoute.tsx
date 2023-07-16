import { FC } from "react";
import { useAppSelector } from "../redux-hooks";
import { Navigate } from "react-router-dom";
import { authUserSelectors } from "../features/auth/auth-selectors";

interface PropType {
  component: React.FC;
}

const PrivateRoute: FC<PropType> = ({ component: Component }) => {
  const user = useAppSelector(authUserSelectors);

  if (user) return <Component />;
  return <Navigate to="/sign-in" />;
};

export default PrivateRoute;
