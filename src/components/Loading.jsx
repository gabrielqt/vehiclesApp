import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

// or

const style = {
  position: "absolute",
  top: "0%",
  width: 1,
  height: 1,
  bgcolor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

function Loading() {
  return (
    <Box sx={style}>
      <CircularProgress color="primary" />
    </Box>
  );
}

export default Loading;
