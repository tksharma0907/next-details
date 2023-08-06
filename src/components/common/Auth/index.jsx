"use client";

import { useAppSelector } from "@redux/hooks";

const withAuth = (Component) => {
  const Auth = (props) => {
    const { isLoggedIn } = useAppSelector((state) => state.userReducer);

    if (!isLoggedIn) {
      return <>Not logged in</>;
    }

    return <Component {...props} />;
  };

  return Auth;
};

export default withAuth;
