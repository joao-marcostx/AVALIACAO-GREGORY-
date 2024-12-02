import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";

const url = ""


const Login = () => {


  const[email, setEmail]= useState("")
  const[senha, setSenha]= useState("") 
  
  const [alertClass, setAlertClass] = useState("mb-3 d-none")
  const [alertMessage, setAlertMensagem] = useState("")
  const[alertVariant, setAlertVariant] = useState("danger")

  const handleLogin = async (e) => {
    //Previne a página de ser recarregada
    e.preventDefault();

    // Verifica se há aquele usuário digitados na lista 
    const userToFind = usuarios.find(
      (user)=>user.email == email
    )
    if (email != "") {
      if (senha != "") {
        if(userToFind != undefined && userToFind.senha == senha){
          gravarLocalStorage(userToFind)
          setAlertClass("mb-3 mt-2");
          setAlertVariant("success")
          setAlertMensagem("Login efetuado com sucesso");
          alert("Login efetuado com sucesso")
          navigate("/home")
        }
        else{
          setAlertClass("mb-3 mt-2");
          setAlertMensagem("Usuário ou senha inválidos");
        }
      } 
      else {
        setAlertClass("mb-3 mt-2");
        setAlertMensagem("O campo senha não pode ser vazio");
      }
    } 
    else {
      setAlertClass("mb-3 mt-2");
      setAlertMensagem("O campo email não pode ser vazio");
    }
  };
  return (
    <div>
      <Container
        className="justify-content-center align-content-center widht-100%"
        style={{ height: "100vh", backgroundColor: "#ffcbdb" }}
      >
        <Form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleLogin}>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
          <Alert variant={alertVariant} class= {alertClass}>
            {alertMessage}
          </Alert>
          <Button
            variant="primary"
            type="submit"
            className="mt-4"
            size="lg"
            style={{
              width: "100px",
            }}
          >
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
