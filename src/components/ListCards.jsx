import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

// xs:  // (celulares)
// sm:  //  (tablets)
// md:  //  (PCs)

const Item = styled("div")(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  backgroundColor: "#f5f5f5", // Cor de fundo (pode ser ajustada)
  padding: theme.spacing(2), // Espaçamento interno
  borderRadius: "8px", // Borda arredondada
  width: 130,
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.9)",
  transition: "0.2s ease all", // Sombra leve
  "& img": {
    width: 90,
  },
  "&:hover": {
    cursor: "pointer",
    transform: "scale(1.05)",
  },
}));

export default function ListCards(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 20 }}
        sx={{ m: 2 }}
      >
        {props.brandSearch.map((brand) => (
          <Grid
            key={brand.codigo}
            size={{ xs: 2, sm: 4, md: 4 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Item src="">
              <img src={`/images/${brand.nome}.png`} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
