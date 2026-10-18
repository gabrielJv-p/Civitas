import React from 'react';
import { Bell, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Notificacoes() {
  return (
    <main style={{ padding: "30px", maxWidth: "600px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none", color: "#0052A5", fontWeight: "bold", marginBottom: "20px" }}>
        <ArrowLeft size={18} /> Voltar para o Início
      </Link>
      <h2 style={{ color: "#0052A5", display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
        <Bell size={24} /> Notificações
      </h2>
      <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "12px", border: "1px solid #e0e0e0" }}>
        <p style={{ margin: 0, color: "#444" }}>🔔 O seu chamado "Iluminação Pública" mudou para o status: <strong>Em campo</strong>.</p>
        <small style={{ color: "#999", display: "block", marginTop: "8px" }}>Há 2 horas</small>
      </div>
    </main>
  );
}