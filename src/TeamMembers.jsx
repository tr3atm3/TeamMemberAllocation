import TeamMembersCard from './TeamMembersCard'

const TeamMembers= ({employees,selectedTeam,handleEmployeeCardClick}) => {
  return (
    employees.map(employee => (
              <TeamMembersCard employee={employee} selectedTeam={selectedTeam} handleEmployeeCardClick= {handleEmployeeCardClick}/>
            ))
  )
}

export default TeamMembers