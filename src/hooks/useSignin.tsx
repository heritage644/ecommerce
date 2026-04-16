import { useState } from "react";
import AuthPageCheckEmail from "@/auth/checkEmail";

export default function UseSignUp() {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <AuthPageCheckEmail   />
    </div>
  );
}
