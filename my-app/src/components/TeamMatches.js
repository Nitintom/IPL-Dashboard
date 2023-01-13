import LatestMatch from './LatestMatch'
import './TeamMatches.css'
import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

export default function TeamMatches() {
  const [teamBanner, setTeamBanner]=useState('')
  const [latestMatch, setLatestMatch]=useState({})
  const [recentMatches, setRecentMatches]=useState([])
  const [isLoading, setIsLoading]=useState(true)

 
  useEffect(()=>{
    getTeamMatchesData()
  },[])
 
  const {id} = useParams() 
  

      const getTeamMatchesData = async () => {
        
        const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
        const data = await response.json()
        const latestMatchData = data.latest_match_details
        const recentMatchesData = data.recent_matches
        const formattedLatestMatchData = {
          id: latestMatchData.id,
          competingTeam: latestMatchData.competing_team,
          competingTeamLogo: latestMatchData.competing_team_logo,
          date: latestMatchData.date,
          firstInnings: latestMatchData.first_innings,
          manOfTheMatch: latestMatchData.man_of_the_match,
          matchStatus: latestMatchData.match_status,
          result: latestMatchData.result,
          secondInnings: latestMatchData.second_innings,
          umpires: latestMatchData.umpires,
          venue: latestMatchData.venue,
        }
        const formattedRecentMatchesData = recentMatchesData.map(each => ({
          id: each.id,
          competingTeam: each.competing_team,
          competingTeamLogo: each.competing_team_logo,
          date: each.date,
          firstInnings: each.first_innings,
          manOfTheMatch: each.man_of_the_match,
          matchStatus: each.match_status,
          result: each.result,
          secondInnings: each.second_innings,
          umpires: each.umpires,
          venue: each.venue,
        }))
      
            
          setTeamBanner(data.team_banner_url) 
          setIsLoading(false)
          setLatestMatch(formattedLatestMatchData)
          setRecentMatches(formattedRecentMatchesData)
      
      }
  
    return (
    <div className={`team-matches-container ${id}`}>
        {isLoading ? (
          <div>
            {/* <Loader type="Oval" color="#ffffff" height={60} width={60} /> */}
          </div>
        ) : (
          <div className="team-match-details">
            <img src={teamBanner} alt="team banner" className="team-banner" />
            <div className="latest-match-container">
              <LatestMatch
                latestMatchDetails={latestMatch}
                recentMatches={recentMatches}
                key={latestMatch.id}
              />
            </div>
          </div>
        )}
      </div>
  )
}
