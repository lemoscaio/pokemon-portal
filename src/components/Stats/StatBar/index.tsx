import { PokemonStat } from "pokenode-ts"
import { formatters } from "../../../utils/formatters"
import { StyledStatBar } from "./styles"

interface StatBarProps {
	stat: PokemonStat
	max: number
}

export default function StatBar({ stat, max }: StatBarProps) {
	return (
		<>
			<StyledStatBar max={max} statValue={stat.base_stat}>
				<div className="statbar-label">
					{formatters.statName(stat.stat.name)}
				</div>
				<div className="statbar-wrapper">
					<div className="statbar-background"></div>
					<div className="statbar-foreground"></div>
				</div>
			</StyledStatBar>
		</>
	)
}
