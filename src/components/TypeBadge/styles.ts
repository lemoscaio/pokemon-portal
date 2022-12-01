import styled from "styled-components"
import { ThemeType } from "../../styles/theme"

interface PokemonCardProps {
	type: string
}

export const StyledPokemonType = styled.p<PokemonCardProps>`
	background-color: ${({ theme, type }) =>
		theme.types[type as keyof ThemeType["types"]]};

	padding: 6px 8px;

	border-radius: 150px;

	height: 100%;
	width: 100%;

	p {
		color: ${({ theme, type }) =>
			theme.typesFont[type as keyof ThemeType["types"]] || "white"};
		font-size: 12px;
		font-weight: 700;
	}
`
