import { useQuery } from "@tanstack/react-query";
import getVehiclesByBrand from "../services/getVehiclesByBrand";
import { useParams } from "react-router-dom";

export default function ListVehicles() {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["carModels", id], // adiciona o parâmetro ao queryKey
    // cria uma função que passa querykey como argumento (em seguida retorna a queryFn)
    queryFn: ({ queryKey }) => {
      const [, id] = queryKey; // extrai o parâmetro do queryKey
      return getVehiclesByBrand(id); // passa o parâmetro para a função
    },
  });

  console.log(data);
  return <h1>oi</h1>;
}
