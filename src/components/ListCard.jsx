import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

import { fetchPokemons } from "../services/pokemonFetch";
import Card from "./Card";
import PageListCard from "./PageListCard";

const ListContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: 20px 40px;
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
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
      </ListContainer>
    </>
  );
};

export default ListCard;
