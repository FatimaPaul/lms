import { TextField } from "@mui/material";

export default function Input({ placeholder, color, value, onchange, type }) {
  return (
    <>
      <TextField
        id="standard-basic"
        label={placeholder}
        variant="standard"
        placeholder={placeholder}
        color={color}
        type={type}
        value={value}
        onChange={onchange}
      />
    </>
  );
}
