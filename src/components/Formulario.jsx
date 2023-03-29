import React, { useState } from "react";
import axios from "axios";
const API_URL = "https://soccer-backend.onrender.com/api/jugadores/kevin";

const formularioInicio = {
  playerName: "",
  playerPosition: "",
};

const Formulario = () => {
  const [formulario, setFormulario] = useState(formularioInicio);

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios
        .post(API_URL, formulario)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Formulario para enviar jugadores a la BD</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre del jugador:
          <input
            type="text"
            name="playerName"
            value={formulario.playerName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Posición del jugador:
          <input
            type="text"
            name="playerPosition"
            value={formulario.playerPosition}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Formulario;