import React, { useState, useEffect } from 'react'
const ApiPlayers = "https://soccer-backend.onrender.com/api/jugadores/kevin"


const Cards = () => {
    const [players, setPlayers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getPlayers = async () => {
        try {
            const response = await fetch(ApiPlayers);
            const data = await response.json();
            setPlayers(data.players);
            setIsLoading(false);
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getPlayers();
    }, []);

    return (
        <div className="container row">
            <h1>Jugadores TOP</h1>
            {isLoading ? (
                <h1>Cargando...</h1>
            ) : (
                players.map((player) => {
                    return (
                        <div key={player._id} className="card" style={{ width: "18rem" }}>
                            <img
                                src={player.playerImgProfile}
                                className="card-img-top"
                                alt={player.playerName}
                                style={{
                                    width: "100%",
                                    height: "300px",
                                    objectFit: "cover",
                                }}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{player.playerName}</h5>
                                <p className="card-text">{player.position}</p>
                                <a href="/" className="btn btn-primary">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default Cards    