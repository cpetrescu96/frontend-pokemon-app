import React, { Component } from 'react';
import Pokemon from '../../containers/Content/Pokemon';
import styled from 'styled-components';
import PokemonLineListed from '../../containers/Content/PokemonLineListed';

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  justify-content: space-between;
`;

export class PokemonList extends Component<any> {
  constructor(props) {
    super(props);
  }

  render() {
    const { pokemons, favsListOpen, favs } = this.props;

    const defaultPokemons =
      pokemons &&
      pokemons.map(pokemon => (
        <Pokemon
          toggleFavStatus={this.props.toggleFavStatus}
          key={pokemon.id}
          name={pokemon.name}
          types={pokemon.types}
          isFavorite={favs[`${pokemon.id}`]}
          image={pokemon.image}
          id={pokemon.id}
          isListedPokemon={false}
          classification={pokemon.classification}
          weaknesses={pokemon.weaknesses}
          resistant={pokemon.resistant}
        />
      ));
    const favoritePokemons =
      defaultPokemons &&
      defaultPokemons.filter(pokemon => favs[`${pokemon.key}`] !== false);

    const displayGrid = favsListOpen ? favoritePokemons : defaultPokemons;

    const defaultLineListedPokemons =
      pokemons &&
      pokemons.map(pokemon => (
        <PokemonLineListed
          toggleFavStatus={this.props.toggleFavStatus}
          key={pokemon.id}
          name={pokemon.name}
          types={pokemon.types}
          isFavorite={favs[`${pokemon.id}`]}
          image={pokemon.image}
          id={pokemon.id}
          isListedPokemon={true}
          classification={pokemon.classification}
          weaknesses={pokemon.weaknesses}
          resistant={pokemon.resistant}
        />
      ));
    const favoriteLineListedPokemons =
      defaultLineListedPokemons &&
      defaultLineListedPokemons.filter(
        pokemon => favs[`${pokemon.key}`] !== false
      );

    const displayLine = favsListOpen
      ? favoriteLineListedPokemons
      : defaultLineListedPokemons;

    return (
      <React.Fragment>
        {this.props.displayStyle ? (
          <ListWrapper>{displayLine}</ListWrapper>
        ) : (
          <ListWrapper>{displayGrid}</ListWrapper>
        )}
      </React.Fragment>
    );
  }
}

export default PokemonList;
