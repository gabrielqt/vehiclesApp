import { useQuery } from "@tanstack/react-query";
import getBrands from "../services/fetchServices";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import InputComplete from "../components/InputComplete";
import ListCards from "../components/ListCards";
import { Box, capitalize } from "@mui/material";

function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["carBrands"], // dentificador único do cache
    queryFn: getBrands, // função que busca os dados
  });

  const [fakeLoading, setFakeLoading] = useState(true);
  const [brandSearch, setBrandSearch] = useState([]);
  const [handleInput, setHandleInput] = useState("");

  useEffect(() => {
    if (data) {
      const timer = setTimeout(() => {
        setFakeLoading(false);
        setBrandSearch(data);
      }, 2000);

      return () => clearTimeout(timer); // limpa o timer para evitar vazamentos de memória
    }
  }, [data]);

  function handleChange(event) {
    if (event.target.value.trim() != null && event.target.value.trim() !== "") {
      setHandleInput(capitalize(event.target.value));
      console.log(handleInput);
      setBrandSearch(data.filter((e) => e.nome.startsWith(handleInput)));
      return;
    }
    setBrandSearch(data);
  }

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
            data={data.map((data) => {
              return data.nome;
            })}
            handleChange={handleChange}
          />
        </Box>
        <ListCards brandSearch={brandSearch} />
      </div>
    );
  }
}

export default Home;
