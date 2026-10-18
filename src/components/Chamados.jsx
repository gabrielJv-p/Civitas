import { List, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Chamados() {
  return (
    <main style={{ padding: "30px", maxWidth: "800px", margin: "0 auto", fontFamily: "sans-serif" }}>
      {/* Link de voltar para a Home */}
      <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "#0052A5", fontWeight: "bold", marginBottom: "20px" }}>
        <ArrowLeft size={18} /> Voltar para o Início
      </Link>

      <h2 style={{ color: "#0052A5", display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
        <List size={24} /> Meus Chamados Registrados
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        
        {/* Chamado 1 */}
        <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "12px", border: "1px solid #e0e0e0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
            <h4 style={{ margin: 0, color: "#111" }}>Iluminação Pública - Poste Apagado</h4>
            <span style={{ fontSize: "0.8rem", padding: "4px 10px", borderRadius: "20px", backgroundColor: "#e8f0fe", color: "#1a73e8", fontWeight: "bold" }}>
              Em andamento
            </span>
          </div>
          <p style={{ margin: "0 0 5px 0", color: "#666", fontSize: "0.9rem" }}>📍 Av. Olinda, 120</p>
          <small style={{ color: "#999" }}>Registrado em: 17/10/2026</small>
        </div>

        {/* Chamado 2 */}
        <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "12px", border: "1px solid #e0e0e0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
            <h4 style={{ margin: 0, color: "#111" }}>Tapa-Buraco na via</h4>
            <span style={{ fontSize: "0.8rem", padding: "4px 10px", borderRadius: "20px", backgroundColor: "#fef7e0", color: "#b06000", fontWeight: "bold" }}>
              Recebido
            </span>
          </div>
          <p style={{ margin: "0 0 5px 0", color: "#666", fontSize: "0.9rem" }}>📍 Rua do Amparo, 45</p>
          <small style={{ color: "#999" }}>Registrado em: 16/10/2026</small>
        </div>

        {/* Chamado 3 */}
        <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "12px", border: "1px solid #e0e0e0" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
            <h4 style={{ margin: 0, color: "#111" }}>Zeladoria / Limpeza de Praça</h4>
            <span style={{ fontSize: "0.8rem", padding: "4px 10px", borderRadius: "20px", backgroundColor: "#e6f4ea", color: "#137333", fontWeight: "bold" }}>
              Resolvido
            </span>
          </div>
          <p style={{ margin: "0 0 5px 0", color: "#666", fontSize: "0.9rem" }}>📍 Praça do Carmo</p>
          <small style={{ color: "#999" }}>Registrado em: 14/10/2026</small>
        </div>

      </div>
    </main>
  );
}