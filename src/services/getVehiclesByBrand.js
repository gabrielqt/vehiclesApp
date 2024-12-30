import axios from "axios";

const getVehiclesByBrand = async (id) => {
  try {
    const response = await axios.get(
      `https://parallelum.com.br/fipe/api/v1/carros/marcas/${id}/modelos`
    );
    return response.data;
  } catch (error) {
    console.log("Erro: " + error);
    throw new Error("Não foi possível obter os carros da marca.");
  }
};

export default getVehiclesByBrand;
