import { useState } from "react";
import Input from "../components/input";
import { Box, Typography } from "@mui/material";
import FButton from "../components/button";
import { useNavigate } from "react-router-dom";
import { LoginMethod } from "../config/firebasemethods";

export default function SignUp() {
  const [loginBody, setLoginBody] = useState({});
  const navigate = useNavigate();

  function handleLogin() {
    LoginMethod(loginBody)
      .then((res) => navigate("/student"))
      .catch((err) => console.log(err));

    setLoginBody({});
  }

  return (
    <div className="h-body">
      <div className="form-body shadow">
        <Typography variant="h3" color="error" sx={{ m: 3 }}>
          Login
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
            value={loginBody.email || ""}
            onchange={(e) =>
              setLoginBody({ ...loginBody, email: e.target.value })
            }
          />
          <Input
            placeholder="Password"
            color="error"
            type="password"
            value={loginBody.password || ""}
            onchange={(e) =>
              setLoginBody({ ...loginBody, password: e.target.value })
            }
          />
        </Box>

        <FButton color="error" onclick={handleLogin}>
          Login
        </FButton>
      </div>
    </div>
  );
}
