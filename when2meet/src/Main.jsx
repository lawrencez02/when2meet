// import React and the ScheduleSelector (When2Meet) component from the package
import React from "react";
import ScheduleSelector from "react-schedule-selector";

// define the a new class Main that contains the ScheduleSelector component and its state
class Main extends React.Component {
  // keeps the state of the selected hours/time blocks within the ScheduleSelector
  state = { schedule: [] };

  // function to handle change: when a new schedule is made (i.e., an edit is made by the user),
  // update the internal state to match the new schedule
  handleChange = newSchedule => {
    this.setState({ schedule: newSchedule });
  };


  // function that tells React how to render the component
  render() {
    // log for debugging purposes the internal state of the schedule
    console.log(this.state.schedule);
    // return a Schedule Selector component with the stored state as the user-selected times,
    // the number of possible days as 5 (a business week), with each day going from 7am to 10pm,
    // displayed with the specified date format, and with changes recorded by the handleChange helper function
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

// export this class so we can use it in index.js
export default Main;