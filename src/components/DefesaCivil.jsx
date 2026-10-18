import { ShieldAlert, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function DefesaCivil() {
  return (
    <main style={{ padding: "30px", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "#0052A5", fontWeight: "bold", marginBottom: "20px" }}>
        <ArrowLeft size={18} /> Voltar para o Início
      </Link>
      <h2 style={{ color: "#C5221F", display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
        <ShieldAlert size={24} /> Defesa Civil - Alertas
      </h2>
      <div style={{ backgroundColor: "#fef7e0", padding: "25px", borderRadius: "12px", border: "1px solid #f9ab00" }}>
        <h4 style={{ margin: "0 0 10px 0", color: "#b06000" }}>⚠️ Alerta de Chuvas Fortes</h4>
        <p style={{ color: "#444", margin: 0, lineHeight: "1.5" }}>
          Atenção moradores de áreas de encosta em Olinda. Em caso de deslizamentos ou alagamentos, ligue imediatamente para o número de emergência <strong>199</strong>.
        </p>
      </div>
    </main>
  );
}