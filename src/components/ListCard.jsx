import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

import { fetchPokemons } from "../services/pokemonFetch";
import Card from "./Card";
import PageListCard from "./PageListCard";

const ListContainer = styled.div`
  margin: 0 auto;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(5, 200px);
  grid-template-rows: repeat(2, 1fr);
  flex-wrap: wrap;
  gap: 20px 40px;
`;

const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* Estilos adicionales para el contenido dentro de cada celda */
  width: 100%;
  height: 100%;
`;

const ListCard = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const max = 10;
  const pages = parseInt(pokemons.length / max) + 1;

  useEffect(() => {
    fetchPokemons()
      .then((pokemonNames) => {
        setPokemons(pokemonNames);
      })
      .catch((error) => {
        console.log(error);
        setPokemons([]);
      });
  }, []);

  return (
    <>
      <div style={{ margin: "0 auto" }}>
        <PageListCard
          page={page}
          setPage={setPage}
          max={max}
          pages={pages}
        ></PageListCard>
        <ListContainer>
          {pokemons
            .slice((page - 1) * max, (page - 1) * max + max)
            .map((pokemon) => (
              <GridItem>
                <Card key={pokemon.id} pokemon={pokemon} />
              </GridItem>
            ))}
        </ListContainer>
      </div>
    </>
  );
};

export default ListCard;
