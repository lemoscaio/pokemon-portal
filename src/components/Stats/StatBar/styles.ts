import styled from "styled-components"
import { calcStatBarWidth } from "../../../utils/calcs"

interface StyledStatBarProps {
	max: number
	statValue: number
}

export const StyledStatBar = styled.div<StyledStatBarProps>`
	display: grid;
	gap: 8px;

	width: 100%;

	.statbar-label {
		width: 100%;
	}

	.statbar-wrapper {
		height: 12px;
		width: 100%;

		.statbar-background {
			position: relative;

			height: 100%;

			width: 100%;
			background-color: ${({ theme }) => theme.colors.secondary};

			border-radius: 100px;
		}

		.statbar-foreground {
			background-color: ${({ theme }) => theme.colors.accent};
			position: relative;
			top: -100%;

			width: ${({ statValue, max }) => calcStatBarWidth(statValue, max)};
			height: 100%;

			border-radius: 100px;
		}
	}
`
