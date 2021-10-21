import { React, Fragment } from "react";
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

function Launches() {
  const { loading, error, data } = useQuery(LAUNCH_QUERY)
console.log(data.launches)
  return (
    <div>
      <p>Check the console dummy</p>
      <div>
          {/* {
              data.Launches.launches.map(launch => (
                  <LaunchItem key={launch.flight_number} launch={launch} />
              ))
          } */}
      </div>
    </div>
  );
}
export default Launches;
