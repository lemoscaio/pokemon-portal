import styled from "styled-components"

export const StyledSmallCard = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;

	background-color: ${(props) => props.theme.colors.main500};
	padding: 8px 8px;

	cursor: pointer;

	transition: all 50ms ease-in-out;

	&:hover {
		background-color: ${(props) => props.theme.colors.mainHover};
	}

	.icon {
		aspect-ratio: 1;
		height: 100%;
	}

	.second-column {
		width: 100%;
		height: 100%;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		gap: 8px;
	}

	.types-list {
		display: flex;
		gap: 6px;
	}

	.pokemon-name {
		color: ${(props) => props.theme.colors.font};
	}
`
