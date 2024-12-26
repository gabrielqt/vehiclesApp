import React from "react";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import Alert from "@mui/material/Alert";

const CopyEmail = ({ handleDisplaySuccess }) => {
  const handleCopy = () => {
    const textToCopy = "gabriel.traiano@outlook.com";
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        handleDisplaySuccess();
      })
      .catch((err) => {
        console.error("Erro ao copiar o texto: ", err);
      });
  };

  return (
    <div>
      <button
        onClick={handleCopy}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <AlternateEmailIcon />
      </button>
    </div>
  );
};

export default CopyEmail;
