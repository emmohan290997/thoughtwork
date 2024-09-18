import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="card">
        <h1>Event Creater</h1>
        <div className="name">
          <label for="eventName">Event Name</label>
          <input id="eventName" className="event" placeholder="EventName" />
        </div>
        <div className="name">
          <label for="eventDate">Event Date</label>
          <input id="eventDate" className="event" placeholder="EventDate" />
        </div>
        <div className="name">
          <label for="eventTime">Event Time</label>
          <input id="eventTime" className="event" placeholder="EventTime" />
        </div>
        <div className="name">
          <label for="description">description</label>
          <input id="description" className="event" placeholder="description" />
        </div>
      </div>
      <div>
        <h1>Upcoming Events</h1>
        <div className="upcome">
          <h3>Freshes</h3>
          <p>10-nov-2025</p>
          <p>evening 6 o clock</p>
          <p>freshes is celebrated before college is completely started</p>
        </div>
        <div className="upcome">
          <h3>Freshes</h3>
          <p>10-nov-2025</p>
          <p>evening 6 o clock</p>
          <p>freshes is celebrated before college is completely started</p>
        </div>
        <div className="upcome">
          <h3>Freshes</h3>
          <p>10-nov-2025</p>
          <p>evening 6 o clock</p>
          <p>freshes is celebrated before college is completely started</p>
        </div>
      </div>
    </div>
  );
}
