import { PlusCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function NovoChamado() {
  return (
    <main style={{ padding: "30px", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "#0052A5", fontWeight: "bold", marginBottom: "20px" }}>
        <ArrowLeft size={18} /> Voltar para o Início
      </Link>

      <h2 style={{ color: "#0052A5", display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
        <PlusCircle size={24} /> Registrar Novo Chamado
      </h2>

      <div style={{ backgroundColor: "#fff", padding: "25px", borderRadius: "12px", border: "1px solid #e0e0e0", boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
        
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px", color: "#333" }}>Tipo de Serviço:</label>
          <select style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ccc", fontSize: "1rem" }}>
            <option>Iluminação Pública</option>
            <option>Tapa-Buraco e Vias</option>
            <option>Zeladoria e Limpeza</option>
            <option>Denúncias e Ouvidoria</option>
          </select>
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px", color: "#333" }}>Local / Endereço:</label>
          <input 
            type="text" 
            style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ccc", fontSize: "1rem", boxSizing: "border-box" }} 
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px", color: "#333" }}>Descrição do Problema:</label>
          <textarea 
            rows="4" 
            style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ccc", fontSize: "1rem", boxSizing: "border-box" }}
          ></textarea>
        </div>

        <button 
          style={{ width: "100%", backgroundColor: "#0052A5", color: "#fff", border: "none", padding: "12px", borderRadius: "6px", fontSize: "1rem", fontWeight: "bold", cursor: "pointer" }}
        >
          Enviar Chamado
        </button>

      </div>
    </main>
  );
}