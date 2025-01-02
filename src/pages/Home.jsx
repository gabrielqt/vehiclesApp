import { useQuery } from "@tanstack/react-query";
import getBrands from "../services/getBrands";
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
      }, 1000);

      return () => clearTimeout(timer); // limpa o timer para evitar vazamentos de memória
    }
  }, [data]);

  function handleChange(NewValue) {
    if (NewValue.trim() != null && NewValue.trim() !== "") {
      setHandleInput(capitalize(NewValue));
      // filtra o array (retorna um novo array:)
      setBrandSearch(data.filter((e) => e.nome.startsWith(handleInput)));
      return;
    }
    setBrandSearch(data);
  }

  const handleOptionSelect = (value) => {
    // filtra o array (retorna um novo array:)
    if (value == null || value.trim() == "") {
      setBrandSearch(data);
      return;
    }
    setBrandSearch(data.filter((e) => e.nome.startsWith(value)));
  };

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
            handleSelect={handleOptionSelect}
          />
        </Box>
        <ListCards brandSearch={brandSearch} />
      </div>
    );
  }
}

export default Home;
