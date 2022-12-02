import { StyledStatsBox } from "./styles"

interface StatsBoxProps {
	children?: React.ReactNode
}

export default function StatsBox({ children }: StatsBoxProps) {
	return (
		<>
			<StyledStatsBox>{children}</StyledStatsBox>
		</>
	)
}
