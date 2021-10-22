import { React, useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import LaunchItem from "./LaunchItem";
const LAUNCH_QUERY = gql`
  query LaunchesQuery {
    launches {
      name
      flight_number
      date_local
    }
  }
`;

const Launches = () => {
const [launchData, setLaunchData] = useState({})
const { loading, error, data } = useQuery(LAUNCH_QUERY)
useEffect(() => {
    setLaunchData(data)
})
console.log(launchData)
  return (
    <div>
      <p>Check the console dummy</p>
      <div>
          {/* {launchData.map(function(launch){
              return <LaunchItem key={launch.flight_number} data={launch} />
          })} */}
      </div>
    </div>
  );
}
export default Launches;
