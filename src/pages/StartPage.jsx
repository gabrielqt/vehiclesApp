import { motion } from "motion/react";
import "../assets/startpage.css";
import { useNavigate } from "react-router-dom";

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100vw",
};

export default function StartPage() {
  const navigate = useNavigate();

  return (
    <div className="divmain">
      <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, type: "spring" }}
      >
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
    </div>
  );
}
