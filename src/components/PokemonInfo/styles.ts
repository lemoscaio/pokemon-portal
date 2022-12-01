import styled from "styled-components"
import { toRem } from "../../utils/calcs"

interface PokemonInfoWrapperProps {
	chosenPokemon: string
}
interface PokemonInfoProps {
	chosenPokemon: string
}

export const StyledNav = styled.nav`
	width: 100%;

	display: flex;
	justify-content: flex-start;

	padding: 16px;

	button {
		background-color: ${({ theme }) => theme.colors.main200};

		color: ${({ theme }) => theme.colors.accent};

		padding: 8px 16px;

		border: 1px solid ${({ theme }) => theme.colors.accent};
		border-radius: 16px;

		transition: all 100ms ease-in-out;
		&:hover {
			transform: scale(1.05);
		}
	}
`

export const StyledPokemonInfoWrapper = styled.div<PokemonInfoWrapperProps>`
	position: absolute;
	top: 0;
	bottom: 0;
	width: 100%;
	height: 100%;

	z-index: 2;

	transition: all 300ms;
	transform: translateX(100vw);
	transform: translateX(${({ chosenPokemon }) => chosenPokemon && "0vw"});
`

export const StyledPokemonInfo = styled.main<PokemonInfoProps>`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;

	height: 100%;

	background-color: ${(props) => props.theme.colors.main500};

	color: ${(props) => props.theme.colors.font};

	.pokemon-header {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;

		padding: 16px 0;
		margin-bottom: 16px;

		.pokemon-sprite {
			width: 200px;
			aspect-ratio: 1;
		}

		.pokemon-name {
			font-size: ${toRem(24)};
			margin-bottom: 4px;
		}

		.pokemon-types {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 8px;
		}
	}
`

export const StyledInfoBox = styled.article`
	width: 80%;

	background-color: ${({ theme }) => theme.colors.main400};

	border-radius: 16px;
	overflow: hidden;

	padding: 12px;

	.box-header {
		padding: 16px;
		border-bottom: 1px solid ${({ theme }) => theme.colors.main200};

		font-size: ${toRem(18)};
	}

	.box-content {
		padding: 16px;
	}
`
