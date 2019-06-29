import React from "react";
import { connect } from "react-redux";
import Tweet from "./Tweet";

class Dashboard extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3 className="center">Your timeline</h3>
        <ul className="dashboard-list">
          {this.props.tweetIDs.map(id => (
            <li key={id}>
              <Tweet id={id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ tweets }) => {
  return {
    tweetIDs: Object.keys(tweets).sort(
      (a, b) => tweets[b].timestamp - tweets[a].timestamp
    )
  };
};

export default connect(mapStateToProps)(Dashboard);
