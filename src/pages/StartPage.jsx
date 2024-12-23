import { motion } from "motion/react";
import "../assets/startpage.css";
import { useNavigate } from "react-router-dom";
import CarIcon from "../components/CarIcon";

export default function StartPage() {
  const navigate = useNavigate();

  return (
    <div className="divmain">
      <motion.div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{
          opacity: 1,
          scale: 0.94,
        }}
        transition={{ duration: 2, type: "spring" }}
      >
        <motion.div
          className="carIcon"
          animate={{ x: [10000, 0] }}
          transition={{ duration: 4 }}
        >
          <CarIcon color="white" width="64" height="64" />
        </motion.div>

        <h1 className="text">
          <span className="spanTitle">Car</span>App
        </h1>
        <h3 className="text">
          Confira o preço FIPE de qualquer carro no Brasil e descubra mais
          informações detalhadas!
        </h3>
        <p className="text">
          <motion.button
            className="btnApp"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/app/home")}
          >
            Acessar Aplicativo
          </motion.button>
        </p>
      </motion.div>
      <div className="text">oi</div>
    </div>
  );
}
