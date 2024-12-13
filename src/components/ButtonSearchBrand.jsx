import { Button } from "@mui/material";
import PageviewIcon from "@mui/icons-material/Pageview";

export default function ButtonSearchBrand() {
  return (
    <Button sx={{ "& .MuiSvgIcon-root": { fontSize: 50 } }}>
      <PageviewIcon />
    </Button>
  );
}
