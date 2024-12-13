import { useQuery } from "@tanstack/react-query";
import getBrands from "../services/fetchServices";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import InputComplete from "../components/InputComplete";
import ListCards from "../components/ListCards";
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
    return (
      <div>
        <InputComplete
          title={"Nome da marca"}
          data={data.map((brand) => {
            return brand.nome;
          })}
        />
        <br></br>
        <ListCards data={data} />
      </div>
    );
  }
}

export default Home;
