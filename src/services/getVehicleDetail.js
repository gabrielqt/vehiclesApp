import axios from "axios";

const getYearVehicles = async (id_modelo, id_marca) => {
  try {
    const response = await axios.get(
      `https://parallelum.com.br/fipe/api/v1/carros/marcas/${id_marca}/modelos/${id_modelo}/anos`
    );
    return response.data;
  } catch (error) {
    console.log("Erro: " + error);
    throw new Error("Não foi possível obter os carros da marca.");
  }
};

export default getYearVehicles;
