import styled from "styled-components"
import { typeHelpers } from "../../utils/typeHelpers"

interface PokemonCardProps {
	type: string
}

export const StyledPokemonType = styled.p<PokemonCardProps>`
	background-color: ${(props) => typeHelpers.getBackgroundColor(props.type)};

	padding: 6px 8px;

	border-radius: 150px;

	height: 100%;
	width: 100%;

	p {
		color: ${(props) => typeHelpers.getFontColor(props.type)};
		font-size: 12px;
		font-weight: 700;
	}
`
