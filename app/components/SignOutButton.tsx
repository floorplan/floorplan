import React from "react";
import { signOut } from "../firebase/auth";

import Button from "@mui/material/Button";

export const SignOutButton = (props) => (
  <>
    <Button onClick={() => signOut()} {...props}>sign out</Button>
  </>
);

