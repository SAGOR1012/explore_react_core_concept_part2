import { useState } from "react";

export default function Team() {
  const teamStyle = {
    border: "2px solid purple",
    margin: "15px",
    paddng: "15px",
    borderRaduos: "15px",
  };
  const [team, setTeam] = useState(11);
  const haldleAdd = () => {
    const newTeam = team + 1;
    setTeam(newTeam);
  };
  const haldeReduce = () => {
    // const newTeam = team - 1;
    setTeam(team - 1);
  };
  return (
    <div style={teamStyle}>
      <h2>Players : {team}</h2>
      <button onClick={haldleAdd}>Add Player</button>
      <button onClick={haldeReduce}>Reduce Team</button>
    </div>
  );
}
