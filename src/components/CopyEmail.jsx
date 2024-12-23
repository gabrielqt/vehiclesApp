import React from "react";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

export default function CopyEmail() {
  const handleCopy = () => {
    const textToCopy = "gabriel.traiano@outlook.com";
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Texto copiado para a área de transferência!");
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
}
