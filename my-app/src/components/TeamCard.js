import './TeamCard.css'
import {Link} from 'react-router-dom'

export default function TeamCard(props) {
    const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  const newId = id.toLowerCase()
  return (
    <div>
      <Link to={`/team-matches/${id}`} className="team-card-link">
      <li className={`team-card ${newId}`}>
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
    </div>
  )
}
