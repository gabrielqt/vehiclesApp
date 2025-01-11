import { useQuery } from "@tanstack/react-query";
import getVehiclesByBrand from "../services/getVehiclesByBrand";
import { useNavigate, useParams } from "react-router-dom";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { Navigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

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

export default function ListVehicles() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const nome = searchParams.get("nome");

  const { data, isLoading, error } = useQuery({
    queryKey: ["carModels", id], // adiciona o parâmetro ao queryKey
    // cria uma função que passa querykey como argumento (em seguida retorna a queryFn)
    queryFn: ({ queryKey }) => {
      const [, id] = queryKey; // extrai o parâmetro do queryKey
      return getVehiclesByBrand(id); // passa o parâmetro para a função
    },
  });

  if (!isLoading) {
    return (
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <h1 style={{ color: "white" }}>{nome}</h1>

        <Grid
          container
          spacing={2} // espaçamento entre os itens
          justifyContent="center"
          alignItems="center"
        >
          {data.modelos.map((modelo) => (
            <Grid
              key={modelo.codigo}
              item
              size={{ xs: 6, sm: 6, md: 2 }}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Item
                onClick={() =>
                  navigate(
                    `/app/home/marca/modelo?nome=${modelo.nome}&id_modelo=${modelo.codigo}&id_marca=${id}`
                  )
                }
              >
                <p>{modelo.nome}</p>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  return <h1></h1>;
}
