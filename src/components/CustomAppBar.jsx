import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import ModalSearch from "./ModalSearch";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <DirectionsCarFilledIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            VehicleApp
          </Typography>
          <Button
            color="inherit"
            sx={{
              "&:hover": {
                color: "secondary.main",
              },
            }}
          >
            <BookmarksIcon />
          </Button>
          <ModalSearch />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
