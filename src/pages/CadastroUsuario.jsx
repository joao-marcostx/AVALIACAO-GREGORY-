import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

// URL da API
const url = "http://localhost:5000/usuario";
const fotoLoja = "img/bolo-chocolate-branco-tradicional.png";


const CadastroUsuario = () => {
  const navigate = useNavigate();

  // Variáveis de estado para os campos
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

  // Variáveis de alerta
  const [alertClass, setAlertClass] = useState("mb-3 d-none");
  const [alertMensagem, setAlertMensagem] = useState("");
  const [alertVariant, setAlertVariant] = useState("danger");

  // Função para lidar com o envio do formulário
  const handleCadastro = async (e) => {
    e.preventDefault();

    // Validação dos campos
    if (!nome || !email || !senha || !confirmaSenha) {
      setAlertClass("mb-3 mt-2");
      setAlertMensagem("Todos os campos devem ser preenchidos.");
      return;
    }
    if (senha !== confirmaSenha) {
      setAlertClass("mb-3 mt-2");
      setAlertMensagem("As senhas não coincidem.");
      return;
    }

    try {
      const novoUsuario = { nome, email, senha };
      const req = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoUsuario),
      });

      if (req.ok) {
        setAlertVariant("success");
        setAlertMensagem("Cadastro realizado com sucesso!");
        setAlertClass("mb-3 mt-2");
        setTimeout(() => {
          alert("Cadastro efetuado com sucesso");
          navigate("/home"); // Redireciona para a página de login
        }, 2000);
      } else {
        setAlertMensagem("Erro ao realizar cadastro. Tente novamente.");
        setAlertClass("mb-3 mt-2");
      }
    } catch (error) {
      setAlertMensagem("Erro ao conectar ao servidor.");
      setAlertClass("mb-3 mt-2");
    }
  };

  return (
    <Container
      style={{ height: "100vh" }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <img
        src={fotoLoja}
        alt="Imagem Local"
        style={{
          width: "256px", // Largura da imagem
          height: "256px", // Altura da imagem
          borderRadius: "50%", // Borda arredondada (circular)
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)", // Sombra para destaque
          objectFit: "cover", // Ajusta a imagem sem distorção
          display: "block", // Centraliza a imagem em elementos block
          margin: "20px", // Centraliza dentro do contêiner pai
        }}
      />
      <Form style={{ width: "75%" }} onSubmit={handleCadastro}>
        <FloatingLabel controlId="floatingNome" label="Nome" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingSenha" label="Senha" className="mb-3">
          <Form.Control
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingConfirmaSenha"
          label="Confirmação de Senha"
          className="mb-3"
        >
          <Form.Control
            type="password"
            placeholder="Confirmação de Senha"
            value={confirmaSenha}
            onChange={(e) => setConfirmaSenha(e.target.value)}
          />
        </FloatingLabel>

        {/* Alerta para erros ou sucesso */}
        <Alert variant={alertVariant} className={alertClass}>
          {alertMensagem}
        </Alert>

        <Button variant="primary" type="submit" className="mt-4" size="lg">
          Cadastrar
        </Button>
        <p className="mt-3 text-center">
          Já tem uma conta?{" "}
          <Link to="/login" className="text-primary">
            Faça login
          </Link>
        </p>
      </Form>
    </Container>
  );
};

export default CadastroUsuario;