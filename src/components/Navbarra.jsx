import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navbarra = () => {
  const usuarioNome = localStorage.getItem("userName");
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/home">Navbar</Navbar.Brand>

          <Navbar.Toggle aria-controls="minha-nav" />
          <Navbar.Collapse id="minha-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home" className="active">
                Produtos
              </Nav.Link>
              <Nav.Link href="/produto/Cadastro">Cadastro produto</Nav.Link>
              <Nav.Link href="/cadastro/usuarios">Cadastra usuario</Nav.Link>

            </Nav>


            <Nav className="justify-content-end">
              <Navbar.Text style={{ color: "white" }}>
                Usuário: | {usuarioNome}
              </Navbar.Text>
              <Nav.Link href="/login">Sair</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarra;
