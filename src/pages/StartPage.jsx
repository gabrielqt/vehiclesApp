import { motion } from "motion/react";
import "../assets/startpage.css";
import { useNavigate } from "react-router-dom";
import CarIcon from "../components/CarIcon";
import { useRef } from "react";
import KeyboardDoubleArrowDownRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowDownRounded";

export default function StartPage() {
  const navigate = useNavigate();
  const divSecondRef = useRef(null);

  const scrollToDivSecond = () => {
    divSecondRef.current?.scrollIntoView({ behavior: "smooth" });
  };

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
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
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

        <KeyboardDoubleArrowDownRoundedIcon
          className="arrowIcon"
          color="primary"
          sx={{ fontSize: "3rem" }}
          onClick={scrollToDivSecond}
        />
      </motion.div>
      <div className="divsecond" ref={divSecondRef}>
        <h2>
          Esse projeto foi feito graças a API do{" "}
          <span style={{ fontWeight: 800 }}>Deivid Fortuna</span>:
        </h2>
        <a target="_blank" href="https://github.com/gabrielqt/">
          github.com/gabrielqt/
        </a>
      </div>
    </div>
  );
}
