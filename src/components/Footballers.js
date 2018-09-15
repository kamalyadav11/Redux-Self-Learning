import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectFootballer } from "../actions/index";

class Footballers extends Component {
  render() {
    return (
      <div>
        {this.props.footballers.map(football => {
          return (
            <li
              key={football.Name}
              onClick={() => this.props.selectFootballer(football)}
            >
              {football.Name}
            </li>
          );
        })}
        <h3>Details for:</h3>
        {this.props.selectedFootballer.Name}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  footballers: state.football,
  selectedFootballer: state.selectedFootballer
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ selectFootballer: selectFootballer }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footballers);
