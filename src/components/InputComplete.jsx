import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function InputComplete(props) {
  return (
    <Autocomplete
      disablePortal
      options={props.data}
      sx={{
        width: 300,
        m: 2,
        borderRadius: 2,
      }}
      onInputChange={(event) => {
        props.handleChange(event);
      }}
      onChange={(event) => {
        props.handlechange(event);
      }}
      color="success"
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.title}
          sx={{
            "& .MuiInputBase-root": {
              color: "#fff",
              border: "1px solid #fff",
            },
            "& .MuiInputLabel-root": {
              color: "#fff",
            },
            "& .MuiOutlinedInput-root.Mui-focused": {
              border: "none",
            },
          }}
        />
      )}
    />
  );
}
