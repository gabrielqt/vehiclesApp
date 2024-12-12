import axios from "axios";

const getBrands = async () => {
  try {
    const response = await axios.get(
      "https://parallelum.com.br/fipe/api/v1/carros/marcas"
    );
    return response.data;
  } catch (error) {
    console.log("Erro: " + error);
    throw new Error("Não foi possível obter as marcas de carro.");
  }
};

export default getBrands;
