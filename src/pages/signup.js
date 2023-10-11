import { useState } from "react";
import Input from "../components/input";
import { Box, Typography } from "@mui/material";
import FButton from "../components/button";
import { useNavigate } from "react-router-dom";
import { SignUpMethod } from "../config/firebasemethods";

export default function SignUp() {
  const [signUpBody, setSignUpBody] = useState({});
  const navigate = useNavigate();

  function handleSignUp() {
    signUpBody.role = "admin";
    SignUpMethod(signUpBody)
      .then((res) => {
        if (signUpBody.role === "admin") {
          navigate(`/adminDashboard`);
        } else {
          navigate(`/student`);
        }
      })
      .catch((err) => console.log(err));

    setSignUpBody({});
  }

  return (
    <div className="h-body">
      <div className="form-body shadow">
        <Typography variant="h3" color="error" sx={{ m: 3 }}>
          SignUp
        </Typography>

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 2, width: "45ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Input
            placeholder="Email"
            color="error"
            type="email"
            value={signUpBody.email || ""}
            onchange={(e) =>
              setSignUpBody({ ...signUpBody, email: e.target.value })
            }
          />
          <Input
            placeholder="Password"
            color="error"
            type="password"
            value={signUpBody.password || ""}
            onchange={(e) =>
              setSignUpBody({ ...signUpBody, password: e.target.value })
            }
          />
        </Box>

        <FButton color="error" onclick={handleSignUp}>
          SignUp
        </FButton>
      </div>
    </div>
  );
}
