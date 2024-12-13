import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function InputComplete(props) {
  return (
    <Autocomplete
      disablePortal
      options={props.data}
      sx={{ width: 300, bgcolor: "background.paper", m: 2, borderRadius: 2 }}
      renderInput={(params) => <TextField {...params} label={props.title} />}
    />
  );
}
