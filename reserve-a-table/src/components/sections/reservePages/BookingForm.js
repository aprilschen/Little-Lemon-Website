import {useState} from 'react';

export default function ReservationForm() {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [people, setPeople] = useState(1);
    const [date, setDate] = useState("");
    const [time, setTime] = useState([]);
    const [occasion, setOccasion] = useState("");
    const [preferences, setPreferences] = useState("");
    const [comments, setComments] = useState("");

    return (
       <form className="reservation-form">
            <div>
                <label htmlFor="fName">First Name</label> <br></br>
                <input type="text" id="fName" placeholder="First Name"
                required minLength={2} maxLength={50}
                value={fName}
                onChange={e => setFName(e.target.value)}></input>
            </div>

            <div>
                <label htmlFor="lName">Last Name</label> <br></br>
                <input type="text" id="lName" placeholder="Last Name"
                minLength={2} maxLength={50}
                value={lName}
                onChange={e => setLName(e.target.value)}></input>
            </div>

            <div>
                <label htmlFor="email">Email</label> <br></br>
                <input type="email" id="email" placeholder="Email"
                value={email}
                required minLength={4} maxLength={200}
                onChange={e => setEmail(e.target.value)}></input>
            </div>

            <div>
                <label htmlFor="phonenum">Phone Number</label> <br></br>
                <input type="tel" id="phonenum" placeholder="(xxx)-xxx-xxxx"
                value={tel}
                required minLength={10} maxLength={25}
                onChange={e => setTel(e.target.value)}></input>
            </div>

            <div>
                <label htmlFor="people">Number of People</label> <br></br>
                <input type="number" id="people" placeholder="Number of People"
                value={people}
                required min={1} max={100}
                onChange={e => setPeople(e.target.value)}></input>
            </div>

            <div>
                <label htmlFor="date">Select Date</label> <br></br>
                <input type="date" id="date" required
                value={date}
                onChange={e => setDate(e.target.value)}></input>
            </div>

            <div>
                <label htmlFor="time">Select Time</label> <br></br>
                <select id="time" required
                value={time}
                onChange={e => setTime([e.target.value])}>
                    <option>11:00am</option>
                    <option>11:30am</option>
                    <option>12:00am</option>
                    <option>12:30am</option>
                    <option>1:00pm</option>
                    <option>1:30pm</option>
                    <option>2:00pm</option>
                    <option>2:30pm</option>
                    <option>3:00pm</option>
                    <option>3:30pm</option>
                    <option>4:00pm</option>
                    <option>4:30pm</option>
                    <option>5:00pm</option>
                    <option>5:30pm</option>
                    <option>6:00pm</option>
                </select>
            </div>

            <div>
                <label htmlFor="occasion">Occasion</label> <br></br>
                <select id="occasion"
                value={occasion}
                onChange={e => setOccasion(e.target.value)}>
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Engagement</option>
                    <option>Other</option>
                </select>
            </div>

            <div>
                <label htmlFor="preferences">Seating preferences</label> <br></br>
                <select id="preferences"
                value={preferences}
                onChange={e => setPreferences(e.target.value)}>
                    <option>None</option>
                    <option>Indoors</option>
                    <option>Outdoor (Patio)</option>
                    <option>Outdoor (Sidewalk)</option>
                </select>
            </div>

            <div>
                <label htmlFor="comments">Additional Comments</label> <br></br>
                <textarea id="comments" rows={8} cols={50} placeholder="Additional Comments"
                value={comments}
                onChange={e => setComments(e.target.value)}>
                </textarea>
            </div>

            <div>
                <br></br>
                <small><p>Note: You cannot edit your reservation after submission. Please double-check your answer
                    before submitting your reservation request.</p></small>
                <button className="action-button" type="submit">Book Table</button>
            </div>
       </form>
    );
}