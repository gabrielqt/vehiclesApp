import { useQuery } from "@tanstack/react-query";
import getBrands from "../services/fetchServices";
import Loading from "../components/Loading";

function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["carBrands"], // Identificador único do cache
    queryFn: getBrands, // Função que busca os dados
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return <h1>ola</h1>;
}

export default Home;
