import React from "react";
import ScheduleSelector from "react-schedule-selector";

class Main extends React.Component {
  state = { schedule: [] };

  handleChange = newSchedule => {
    this.setState({ schedule: newSchedule });
  };

  render() {
    console.log(this.state.schedule);
    return (
      <ScheduleSelector
        selection={this.state.schedule}
        numDays={5}
        minTime={7}
        maxTime={22}
        onChange={this.handleChange}
        dateFormat="ddd, M/D"
      />
    );
  } 
}

export default Main;