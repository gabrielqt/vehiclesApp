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
      onInputChange={(event, newInputValue) => {
        props.handleChange(newInputValue);
      }}
      onChange={(event, newValue) => {
        // Captura quando o usuário seleciona uma opção
        props.handleSelect(newValue);
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
