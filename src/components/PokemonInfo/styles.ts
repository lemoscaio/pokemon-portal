import styled from "styled-components"

interface PokemonInfoProps {
	chosenPokemon: string
}

export const StyledPokemonInfo = styled.main<PokemonInfoProps>`
	background-color: red;

	transition: width 1300ms;

	width: ${({ chosenPokemon }) => (chosenPokemon ? "100%" : "0px")};
	height: ${({ chosenPokemon }) => (chosenPokemon ? "100%" : "0px")};
	overflow: ${({ chosenPokemon }) => (chosenPokemon ? "initial" : "hidden")};

	/* transform: translateX(${(props) =>
		props.chosenPokemon ? "0" : "100%"}); */
`
