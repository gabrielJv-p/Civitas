import { HeartPulse, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function UnidadesSaude() {
  return (
    <main style={{ padding: "30px", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "#0052A5", fontWeight: "bold", marginBottom: "20px" }}>
        <ArrowLeft size={18} /> Voltar para o Início
      </Link>
      <h2 style={{ color: "#0052A5", display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
        <HeartPulse size={24} /> Unidades de Saúde
      </h2>
      <div style={{ backgroundColor: "#fff", padding: "25px", borderRadius: "12px", border: "1px solid #e0e0e0", display: "flex", flexDirection: "column", gap: "15px" }}>
        <div>
          <h4 style={{ margin: "0 0 5px 0", color: "#111" }}>UPA Olinda (Peixinhos)</h4>
          <p style={{ margin: 0, color: "#666", fontSize: "0.9rem" }}>📍 Av. Olinda Dom Hélder Câmara</p>
        </div>
        <hr style={{ border: "0", borderTop: "1px solid #eee" }} />
        <div>
          <h4 style={{ margin: "0 0 5px 0", color: "#111" }}>Policlínica Martagão Gesteira</h4>
          <p style={{ margin: 0, color: "#666", fontSize: "0.9rem" }}>📍 Bairro Do Carmo, Olinda</p>
        </div>
      </div>
    </main>
  );
}