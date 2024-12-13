import { useQuery } from "@tanstack/react-query";
import getBrands from "../services/fetchServices";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import InputComplete from "../components/InputComplete";
import ButtonSearchBrand from "../components/ButtonSearchBrand";
import ListCards from "../components/ListCards";
import { Box } from "@mui/material";

function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["carBrands"], // dentificador único do cache
    queryFn: getBrands, // função que busca os dados
  });

  const [fakeLoading, setFakeLoading] = useState(true);
  const [brandSearch, setBrandSearch] = useState([]);

  useEffect(() => {
    if (data) {
      const timer = setTimeout(() => {
        setFakeLoading(false);
        setBrandSearch(data);
      }, 2000);

      return () => clearTimeout(timer); // limpa o timer para evitar vazamentos de memória
    }
  }, [data]);

  if (fakeLoading) {
    return <Loading />;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  if (!isLoading) {
    return (
      <div>
        <Box sx={{ display: "flex" }}>
          <InputComplete
            title={"Nome da marca"}
            data={data.map((brand) => {
              return brand.nome;
            })}
          />
          <ButtonSearchBrand />
        </Box>
        <ListCards brandSearch={brandSearch} />
      </div>
    );
  }
}

export default Home;
