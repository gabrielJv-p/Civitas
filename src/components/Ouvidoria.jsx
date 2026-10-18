import { Headset, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Ouvidoria() {
  return (
    <main style={{ padding: "30px", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "#0052A5", fontWeight: "bold", marginBottom: "20px" }}>
        <ArrowLeft size={18} /> Voltar para o Início
      </Link>
      <h2 style={{ color: "#0052A5", display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
        <Headset size={24} /> Ouvidoria Municipal
      </h2>
      <div style={{ backgroundColor: "#fff", padding: "25px", borderRadius: "12px", border: "1px solid #e0e0e0" }}>
        <p style={{ color: "#444", lineHeight: "1.6" }}>
          Canal direto com a Prefeitura de Olinda para registro de sugestões, elogios, solicitações, reclamações e denúncias.
        </p>
        <p><strong>Telefone:</strong> 0800 081 1010</p>
        <p><strong>E-mail:</strong> ouvidoria@olinda.pe.gov.br</p>
      </div>
    </main>
  );
}