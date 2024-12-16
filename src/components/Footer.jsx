import * as React from "react";
import Grid from "@mui/material/Grid2";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const style = {
  backgroundColor: "secondary.main",
  position: "absolute",
  color: "primary.contrastText",
  boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.5)",
  marginTop: 10,
  width: 1,
  p: 2,
  "& a": {
    color: "black",
    textDecoration: "none",
    position: "relative",
    bottom: 5,
  },
};

export default function Footer() {
  return (
    <Grid sx={style} container spacing={2}>
      <Grid size={{ xs: 6, md: 8 }}>
        <h3>Car App - Gabriel Augusto Queiroz Traiano</h3>
        <p>API utilizada: https://deividfortuna.github.io/fipe/</p>
      </Grid>
      <Grid size={{ xs: 6, md: 4 }}>
        <p>
          <GitHubIcon />{" "}
          <a target="_blank" href="https://github.com/gabrielqt/">
            github.com/gabrielqt/
          </a>
        </p>
        <p>
          <LinkedInIcon />{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/gabriel-queiroz4/"
          >
            linkedin.com/in/gabriel-queiroz4/
          </a>
        </p>
      </Grid>
      <Grid size={{ xs: 6, md: 4 }}>
        <p>
          <EmailIcon />
          <a href="mailto:gabriel.traiano@outlook.com">
            gabriel.traiano@outlook.com
          </a>
        </p>
      </Grid>
    </Grid>
  );
}
