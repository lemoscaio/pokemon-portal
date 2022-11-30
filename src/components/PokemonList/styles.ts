import styled from "styled-components"

interface ListProps {
	chosenPokemon: string
}

export const List = styled.div<ListProps>`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 2px;

	background-color: hsl(240, 100%, 0%);

	transition: width 1300ms;

	width: ${({ chosenPokemon }) => (chosenPokemon ? "0px" : "100%")};
	height: ${({ chosenPokemon }) => (chosenPokemon ? "0px" : "100%")};
	overflow: ${({ chosenPokemon }) => (chosenPokemon ? "hidden" : "initial")};

	/* transform: translateX(${(props) =>
		props.chosenPokemon ? "-100%" : "0%"}); */
`
