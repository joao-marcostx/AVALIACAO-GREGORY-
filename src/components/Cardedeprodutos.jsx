import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Cardedeprodutos = (props) => {
  const handleDelete = async (e) => {
    const req = await fetch(`http://localhost:5000/produtos/${props.id}`,
    {
      method: "DELETE",
    });
    const res = await req.json();
    console.log(res);
    alert(`Produto ${res.nome} removido`);
  };

  return (
    <div>
      <Card style={{ width: "18em", height: "20em" }}>
        <Card.Img
          variant="top"
          src={props.imagemUrl}
          height="150px"
          width="150px"
        />
        <Card.Body>
          <Card.Title>{props.nome}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Preço: {props.preco}
          </Card.Subtitle>

          <Card.Text>
            <b>Descrição: </b>
            {props.descricao}
          </Card.Text>
          <Card.Text>
            <b>categoria: </b>
            {props.categoria}
          </Card.Text>

          <Card.Link href={`/produto/editar/${props.id}`}>
            <Button variant="warning" >Editar</Button>
          </Card.Link>

          <Card.Link href="/home">
            <Button variant="danger" onClick={handleDelete}>
              excluir
            </Button>
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cardedeprodutos;
