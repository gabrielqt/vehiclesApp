import { useQuery } from "@tanstack/react-query";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { useSearchParams } from "react-router-dom";
import getYearVehicles from "../services/getYearVehicles";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import CarIcon from "../components/CarIcon";
import { useNavigate } from "react-router-dom";

const Item = styled("div")(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  backgroundColor: "#f5f5f5",
  padding: theme.spacing(2),
  borderRadius: "8px",
  width: 200,
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.9)",
  transition: "0.2s ease all", // Sombra leve
  "&:hover": {
    cursor: "pointer",
    transform: "scale(1.05)",
  },
}));

export default function ListVehicles_2() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const idModelo = searchParams.get("id_modelo");
  const idMarca = searchParams.get("id_marca");
  const nomeModelo = searchParams.get("nome");
  console.log(idModelo);
  console.log(idMarca);

  const { data, isLoading, error } = useQuery({
    queryKey: ["carModels", idModelo, idMarca], // adiciona o parâmetro ao queryKey
    // cria uma função que passa querykey como argumento (em seguida retorna a queryFn)
    queryFn: ({ queryKey }) => {
      const [, idModelo, idMarca] = queryKey; // extrai o parâmetro do queryKey
      return getYearVehicles(idModelo, idMarca); // passa o parâmetro para a função
    },
  });

  if (!isLoading) {
    return (
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <h1 style={{ color: "white" }}>{nomeModelo}</h1>
        <br />
        <Grid
          container
          spacing={2} // espaçamento entre os itens
          justifyContent="center"
          alignItems="center"
        >
          {data.map((ano) => (
            <Grid
              key={ano.codigo}
              item
              size={{ xs: 6, sm: 6, md: 2 }}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Item onClick={() => navigate(`${ano.codigo}`)}>
                <p>{ano.nome}</p>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  return <h1></h1>;
}
