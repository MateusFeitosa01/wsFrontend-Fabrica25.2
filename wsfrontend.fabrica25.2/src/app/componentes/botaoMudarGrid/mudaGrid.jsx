"use client";
import "./mudarGrid.css";

export default function MudarGrid({ layoutAlternativo, setLayoutAlternativo }) {
  const alterarLayout = (e) =>{
    e.preventDefault();
    setLayoutAlternativo(!layoutAlternativo)
  }

  return (
    <button className="botao-layout-mudar-grid" onClick={alterarLayout}>
      Alternar Layout
    </button>
  );
}
