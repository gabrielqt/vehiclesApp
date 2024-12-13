import { useQuery } from "@tanstack/react-query";
import getBrands from "../services/fetchServices";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";

function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["carBrands"], // Identificador único do cache
    queryFn: getBrands, // Função que busca os dados
  });

  const [fakeLoading, setFakeLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeout(() => {
        setFakeLoading(false);
        if (!fakeLoading && isLoading) {
          return;
        }
      }, 2000);
    });
  });

  if (fakeLoading) {
    return <Loading />;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  if (!isLoading) {
    return <h1>ola</h1>;
  }
}

export default Home;
