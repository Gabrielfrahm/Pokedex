import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Content, Card } from './styles';

interface exactPokemons {
  id: number;
  sprites: {
    front_default: string;
  };
}

interface pokemons {
  next: string;
  previous: string;
  results: [
    {
      name: string;
      url: string;
      imgUrl: string;
    },
  ];
}

const DashBoard: React.FC = () => {
  const [pokemon, setPokemon] = useState<pokemons[]>([]);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/`).then(res => {
      setPokemon([res.data]);
    });
  }, [setPokemon]);

  const pokeUrl = pokemon.map(urls => {
    return urls.results.map(url => url.url);
  });

  const pokeNumber = pokeUrl.map(urls => {
    return urls.map(url => {
      return url
        .replace('https://pokeapi.co/api/v2/pokemon/', '')
        .replace('/', '');
    });
  });

  const gif = pokeNumber.map(num =>
    num.map(numb => {
      const gifs = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${numb}.gif`;
      return gifs;
    }),
  );

  console.log(gif);

  return (
    <Container>
      {pokemon.map(poke =>
        poke.results.map(pok => (
          <Content key={pok.name}>
            <Card>
              <p>{pok.name}</p>
            </Card>
          </Content>
        )),
      )}
    </Container>
  );
};

export default DashBoard;
