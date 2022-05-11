import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Logo, Form, Input, Button, Forward } from "../../assets/styles/style.jsx";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

export default function SignUp(){
    const navigate = useNavigate();
    const [userData, setUserData] = useState({name: "", email: "", password: ""});
    const [tempPassword, setTempPasword] = useState("");
    const [disabled, setDisabled] = useState(false);

    function signUp(e) {
        e.preventDefault();

        if(tempPassword!==userData.password) {
            alert("Os campos de senhas não estão iguais.");
            return;
        }
        const URL_SIGNUP = `${process.env.REACT_APP_API_URL}/sign-up`;
        const request = axios.post(URL_SIGNUP, userData);
        setDisabled(true);
        request.then(() => navigate("/"));
        request.catch( error => {setDisabled(false);
            alert(`${error}! Preencha corretamente os campos!`);
        });
    }

    return (
        <Container>
            <Logo>MyWallet</Logo>
            <Form onSubmit={signUp}>
                <Input type="text" placeholder="Nome" value={userData.name} 
                onChange={e => setUserData({...userData, name:e.target.value})} 
                disabled={disabled} required />
                
                <Input type="email" placeholder="E-mail" value={userData.email} 
                onChange={e => setUserData({...userData, email:e.target.value})} 
                disabled={disabled} required pattern="^([\w\-]+\.)*[\w\- ]+@([\w\- ]+\.)+([\w\-]{2,3})$" 
                title="Digite um endereço de email válido"/>
                
                <Input type="password" placeholder="Senha" value={userData.password} 
                onChange={e => setUserData({...userData, password:e.target.value})} 
                disabled={disabled} required />
                
                <Input type="password" placeholder="Confirme a senha" value={tempPassword} 
                onChange={e => setTempPasword(e.target.value)} 
                disabled={disabled} required />
                
                <Button type="submit" disabled={disabled}>
                    {disabled ? <ThreeDots width="60" height="60" color="white" ariaLabel="loading"/> 
                    : "Cadastrar" }
                </Button>
            </Form>
            <Forward to="/">Já tem uma conta? Entre agora!</Forward>
        </Container>
    );
}