import React from 'react';
import Challenge from './Challenge';

const UserInfo = (props) => {
  const data = JSON.parse(props.codeWarsData); // All the user info (passed from App)

  const challenges = props.userChallenges.map((challenge, index) => {
    return (
      <Challenge
        key={`challenge${index}`}
        name={challenge.name}
        language={challenge.completedLanguages[0]}
        date={challenge.completedAt}
      />
    );
  });

  return (
    <div id='user-info'>
      <center>
        <h1>Welcome back {data.cwusername}!</h1>
      </center>
      <br />
      <center>
        <ul>
          <li>
            <span>Completed Challanges:</span> {data.completed}
          </li>
          <li>
            <span>Favorite Language:</span> {'Javascript'}
          </li>
          <li>
            <span>Codewars Rank:</span> {data.rank}
          </li>
        </ul>

        <br />

        <h2>Most Recent Challenges</h2>

        <br />

        <div id='challenges'>{challenges}</div>
      </center>
      <br></br>
    </div>
  );
};

export default UserInfo;
