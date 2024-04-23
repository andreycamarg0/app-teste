import React from "react";
import Button from 'react-bootstrap/Button';

const Contato = () => {
    return (
        <div className="Container">
            <h1> Contato </h1>
            <form>
                <div className="form-group">
                    <label>Nome</label>
                    <input type="text" id="nome" className="FormControl"> Nome </input>
                </div>
                <div className="form-group">
                    <label>Telefone</label>
                    <input type="text" id="telefone" className="FormControl"> Telefone </input>
                </div>
                <div className="form-group">
                    <label>Assunto</label>
                    <input type="text" id="assunto" className="FormControl"> Assunto </input>
                </div>
                <div className="form-group">
                    <label>Mensagem</label>
                    <input type="text" id="mensagem" className="FormControl"> Mensagem </input>
                </div>
                <button type="submit" variant="primary">Enviar</button>
            </form >
        </div>
    )
}

export default Contato;