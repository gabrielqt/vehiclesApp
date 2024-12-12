import { useQuery } from "@tanstack/react-query";
import getBrands from "../services/fetchServices";

function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["carBrands"], // Identificador único do cache
    queryFn: getBrands, // Função que busca os dados
  });

  if (isLoading) {
    return <h1>carregando</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <h1>ola</h1>
    // <ul>
    //   {data.map((brand) => (
    //     <li key={brand.codigo}>
    //       {brand.nome} (Código: {brand.codigo})
    //     </li>
    //   ))}
    // </ul>
  );
}

export default Home;
