import React from "react";
import { useSelector } from "react-router-dom";
import SignInPage from "../Sign-in/Sign-in.page";
import Career from "../Carrier/Career.page";

const AdminPage = () => {
  const user = useSelector((state) => state.user.Token);
  return user ? <Career /> : <SignInPage />;
};

export default AdminPage;
