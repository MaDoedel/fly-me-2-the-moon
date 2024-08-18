import * as React from "react"
import $ from 'jquery';


function MyHeader() {
  return (
    <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* <link rel="icon" type="image/x-icon" href="favicon.ico"></link> */}
          <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
          <title>Fly me to the moon</title>
    </head>
  );
}

function MyBody(props) {
  return (
    <body>
      <div class="w3-container w3-teal">
        <h1>My First Heading</h1>
        <p>Welcome to my website.</p>
      </div>
      <UserInput />

      {props.dates.map(date => (
        <DateDelete key={date} dates={props.dates} setDates={props.setDates}/>
      ))}
      


    </body>
  );
}


class DateButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={this.handleClick}></button>
    );
  }
}

class DateDelete extends DateButton {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    const updatedDates = this.props.dates.filter(date => date.id !== this.props.id);
    this.props.setDates(updatedDates);
  };

  render() {
    return (
      <button class="w3-button w3-blue" onClick={this.handleclick}>Delete</button>
    );
  }
}

class DateAdd extends DateButton {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    const newDate = { id: Date.now(), date: new Date() };
    const updatedDates = [...this.props.dates, newDate];
    this.props.setDates(updatedDates);
  };

  render() {
    return (
      <button class="w3-button w3-blue" onClick={this.handleClick}>Add</button>
    );
  }
}


function UserInput() {
  return (
    <form class="w3-container">
      <div class="w3-row">
        <div class="w3-third w3-container">
          <input class="w3-input" type="text" name="destination"/>
          <label>Destination</label>
        </div>
        <div class="w3-third w3-container">
          <input class="w3-input" type="date" name="dates"/>
          <label>Dates</label>
        </div>
        <div class="w3-third w3-container">
          {/* <DateAdd dates={dates} setDates={props.setDates} /> */}
        </div>
      </div> 
    </form> 
  );
}

function FlightsOutput() {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);  

  // don't have cors permission

  function handleClick() {
    $.ajax({
      url: 'https://www.ryanair.com/api/booking/v4/en-gb/availability?ADT=1&TEEN=0&CHD=0&INF=0&Origin=BER&Destination=MRS&promoCode=&IncludeConnectingFlights=false&DateOut=2024-08-25&DateIn=&FlexDaysBeforeOut=2&FlexDaysOut=2&FlexDaysBeforeIn=2&FlexDaysIn=2&RoundTrip=false&ToUs=AGREED',
      type: 'GET',
      dataType: 'json',
      cors: true ,
      timeout: 5000,
      success: function(data) {
        setIsLoaded(true);
        setItems(data);
      },
      error: function(error) {
        setIsLoaded(true);
        setError(error);
        console.log(error);
      }
    });
  }

  return (
    <button class="w3-button w3-blue" onClick={handleClick}>Get Flights</button>
  );
}

export default function IndexPage() {
  const [dates, setDates] = React.useState([{id: 1, date: 'same date'}]);

  return (
    <> <main>
      <MyHeader />
      <MyBody dates={dates} setDates={setDates}/>
      <FlightsOutput />
    </main>
    </>
  )
}

export const Head = () => <title>Home Page</title>
