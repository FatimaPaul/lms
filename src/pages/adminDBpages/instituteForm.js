import { Box, Typography } from "@mui/material";
import Input from "../../components/input";
import DropDown from "../../components/dropdown";
import FButton from "../../components/button";

export default function InstituteForm() {
  return (
    <div className="inst-form mx-3 shadow">
      <Typography variant="h5" color="error" sx={{ m: 1 }}>
        Institute Form
      </Typography>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 2, width: "40ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Input placeholder="Institute Name" color="error" type="text" />
        <Input placeholder="Institute Short Name" color="error" type="text" />
        <Input placeholder="No. Of Campus" color="error" type="text" />
        <Input placeholder="Location" color="error" type="text" />
        <Input placeholder="Address" color="error" type="text" />
        <Input placeholder="Contact" color="error" type="text" />
        <Input placeholder="Owner Contact" color="error" type="text" />
        <Input placeholder="Owner Email" color="error" type="email" />
        <DropDown
          placeholder="Institute type"
          arrDropdown={["school", "college", "university", "institute"]}
        />
        <DropDown placeholder="User type" arrDropdown={["institute"]} />
      </Box>
      <FButton color="error">Done</FButton>
    </div>
  );
}
