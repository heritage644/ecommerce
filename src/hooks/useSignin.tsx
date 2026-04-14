import { useState } from "react";
import AuthPage from "@/auth/signUp";

export default function UseSignIn() {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <AuthPage  />
    </div>
  );
}
