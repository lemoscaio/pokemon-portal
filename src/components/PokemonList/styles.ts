import styled from "styled-components"

interface StyledListWrapperProps {
	chosenPokemon: string
}
interface StyledListProps {
	chosenPokemon: string
}

export const StyledListWrapper = styled.aside<StyledListWrapperProps>`
	position: absolute;
	top: 0;
	bottom: 0;
	z-index: 1;

	width: 100%;
	height: 100%;

	overflow: hidden;
`

export const StyledList = styled.div<StyledListProps>`
	width: 100%;
	height: 100%;

	overflow: auto;

	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-gap: 2px;

	background-color: ${(props) => props.theme.colors.background};

	transition: all 300ms;

	transform: translateX(
		${({ chosenPokemon }) => (chosenPokemon ? "-20vw" : 0)}
	);
`
