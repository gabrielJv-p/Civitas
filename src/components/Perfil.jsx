import { User, ArrowLeft, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function Perfil() {
  return (
    <main style={{ padding: "30px", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "#0052A5", fontWeight: "bold", marginBottom: "20px" }}>
        <ArrowLeft size={18} /> Voltar para o Início
      </Link>

      <h2 style={{ color: "#0052A5", display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
        <User size={24} /> Meu Perfil
      </h2>

      <div style={{ backgroundColor: "#fff", padding: "25px", borderRadius: "12px", border: "1px solid #e0e0e0", boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}>
        
        <div style={{ textAlign: "center", paddingBottom: "20px", borderBottom: "1px solid #eee", marginBottom: "20px" }}>
          <div style={{ width: "70px", height: "70px", borderRadius: "50%", backgroundColor: "#0052A5", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px auto", fontSize: "1.8rem", fontWeight: "bold" }}>
            L
          </div>
          <h3 style={{ margin: "0 0 5px 0", color: "#111" }}>Luiza</h3>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          
          <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#444" }}>
            <Mail size={20} color="#0052A5" />
            <div>
              <small style={{ color: "#888", display: "block" }}>E-mail</small>
              <strong>luiza@email.com</strong>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#444" }}>
            <Phone size={20} color="#0052A5" />
            <div>
              <small style={{ color: "#888", display: "block" }}>Telefone</small>
              <strong>(81) 98765-4321</strong>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#444" }}>
            <MapPin size={20} color="#0052A5" />
            <div>
              <small style={{ color: "#888", display: "block" }}>Município</small>
              <strong>Olinda - PE</strong>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}