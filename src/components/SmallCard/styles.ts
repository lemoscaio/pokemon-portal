import styled from "styled-components"

export const StyledSmallCard = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;

	background-color: hsl(0, 0%, 11%);
	padding: 8px 8px;

	cursor: pointer;

	transition: all 50ms ease-in-out;

	&:hover {
		background-color: hsl(203, 17%, 15%);
	}

	.icon {
		height: 70px;
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
		color: white;
	}
`
