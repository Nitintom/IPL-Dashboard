import TeamCard from './TeamCard'
import './Home.css'
import {useEffect, useState} from 'react'
// import IPLTeamList from './IPLTeamList'

  function Home() {
const [teamList, setTeamList]=useState([])
const [isLoading, setIsLoading]=useState(true)
    
 useEffect(()=>{
  getTeamsData()
 },[])

 const  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formattedData = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
     setTeamList(formattedData)
     setIsLoading(false)
  }

  const renderIplTeams = () => {
   
    return isLoading ? (
      <div className="loader-container">
        Loading...

      </div>
    ) : (
      teamList.map(each => <TeamCard teamDetails={each} key={each.id} />)
    )
  }



  return (
    <>
    
    <div className="home-container">
        <div className="ipl-header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="dashboard-heading">IPL Dashboard</h1>
        </div>
        <ul className="teams-container">{renderIplTeams()}</ul>
      </div>
      </>
  )
}

export default Home
