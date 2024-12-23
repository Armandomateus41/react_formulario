import Head from "next/head";
import { useState } from "react";

function Home() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!data.name || !data.email || !data.message) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    // Simular envio de dados (substitua isso por uma chamada real de API, se necessário)
    console.log("Dados enviados:", data);

    // Resetar o formulário após o envio
    setSubmitted(true);
    setData({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <>
      <Head>
        <title>Dynner - Formulário</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <div
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
            maxWidth: "400px",
            width: "100%",
            backdropFilter: "blur(10px)",
          }}
        >
          <h1>Formulário de Contato</h1>
          {submitted && (
            <p style={{ color: "lightgreen", textAlign: "center", marginBottom: "20px" }}>
              Formulário enviado com sucesso!
            </p>
          )}
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nome do Cliente"
              value={data.name}
              onChange={handleInputChange}
              required
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                color: "#333",
              }}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email do Cliente"
              value={data.email}
              onChange={handleInputChange}
              required
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                color: "#333",
              }}
            />
            <label htmlFor="message">Mensagem:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Mensagem do Cliente"
              rows="5"
              value={data.message}
              onChange={handleInputChange}
              required
              style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                color: "#333",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "10px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Enviar
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Home;
