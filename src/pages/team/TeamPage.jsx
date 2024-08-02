import React from 'react'
import Teambanner from '../../assets/images/Teambanner.png'
import TeamContent from './TeamContent'
import AboutTeam from './AboutTeam'
import Banners from '../../components/Banners'

const TeamPage = () => {
  return (
    <div>
        <Banners
      backgroundImage={Teambanner}
      title="Team "
      subTitle="Our Team"
      customMargin={true}
      
      
      />
        <TeamContent/>
        <AboutTeam/>
        
        

    </div>
  )
}

export default TeamPage