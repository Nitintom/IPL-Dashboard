import './MatchCard.css'

export default function MatchCard(props) {
    const {recentMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    result,
    matchStatus,
  } = recentMatchDetails

  const resultStyle = matchStatus === 'Won' ? 'won' : 'lost'
  return (
    <div>
      <li className="match-card">
      <div className="logo-container">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="competing-team-logo"
        />
      </div>

      <p className="competing-team-name">{competingTeam}</p>
      <p className="game-result">{result}</p>
      <p className={`match-status ${resultStyle}`}>{matchStatus}</p>
    </li>
    </div>
  )
}
