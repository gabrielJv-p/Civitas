import { Phone, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Telefones() {
  return (
    <main style={{ padding: "30px", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "#0052A5", fontWeight: "bold", marginBottom: "20px" }}>
        <ArrowLeft size={18} /> Voltar para o Início
      </Link>
      <h2 style={{ color: "#0052A5", display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
        <Phone size={24} /> Telefones Úteis
      </h2>
      <div style={{ backgroundColor: "#fff", padding: "25px", borderRadius: "12px", border: "1px solid #e0e0e0", display: "flex", flexDirection: "column", gap: "12px" }}>
        <p>🚨 <strong>SAMU:</strong> 192</p>
        <p>🚒 <strong>Corpo de Bombeiros:</strong> 193</p>
        <p>👮 <strong>Polícia Militar:</strong> 190</p>
        <p>🛡️ <strong>Defesa Civil (Olinda):</strong> 199</p>
        <p>💡 <strong>Iluminação Pública (Plantão):</strong> 0800 000 0000</p>
      </div>
    </main>
  );
}