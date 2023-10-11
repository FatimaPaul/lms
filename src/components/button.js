import Button from "@mui/material/Button";

export default function FButton({ children, color, onclick }) {
  return (
    <>
      <Button variant="outlined" color={color} sx={{ m: 3 }} onClick={onclick}>
        {children}
      </Button>
    </>
  );
}
