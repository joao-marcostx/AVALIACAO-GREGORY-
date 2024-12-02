import React from "react";
import NavBarra from "../components/Navbarra";
import Cardedeprodutos from "../components/Cardedeprodutos";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";

const url = "http://localhost:5000/produtos"

const Home = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const req = await fetch(url);
        const prods = await req.json();
        console.log(prods);
        setProdutos(prods);
      } catch (erro) {
        console.log(erro.message);
      }
    }
    fetchData()
  }, [produtos])
  
  return (
    <div>
      <NavBarra />
      <h1>Lista de produtos</h1>
      <Container>
        <div className="lista-produtos d-flex col-12 gap-2 mt-3 justify-content-start flex-wrap">
          {produtos.map((prod) => (
            <Cardedeprodutos
              key={prod.id}
              id={prod.id}
              nome={prod.nome}
              descricao={prod.descricao}
              preco={prod.preco}
              categoria={prod.categoria}
              imagemUrl={prod.imagemUrl}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
