export default function ReservationForm() {
    return (
       <form className="reservation-form">
            <div>
                <label>First Name</label> <br></br>
                <input type="text" placeholder="First Name" required minLength={2} maxLength={50}></input>
            </div>

            <div>
                <label>Last Name</label> <br></br>
                <input type="text" placeholder="Last Name"></input>
            </div>

            <div>
                <label>Email</label> <br></br>
                <input type="email" placeholder="Email" required minLength={4} maxLength={200}></input>
            </div>

            <div>
                <label>Phone Number</label> <br></br>
                <input type="tel" placeholder="(xxx)-xxx-xxxx" required minLength={10} maxLength={25}></input>
            </div>

            <div>
                <label>Number of People</label> <br></br>
                <input type="number" required min={1} max={100}></input>
            </div>

            <div>
                <label>Select Date</label> <br></br>
                <input type="date" required></input>
            </div>

            <div>
                <label>Select Time</label> <br></br>
                <input type="time" required></input>
            </div>

            <div>
            <label>Seating preferences</label> <br></br>
                <select>
                    <option>Indoors</option>
                    <option>Outdoor (Patio)</option>
                    <option>Outdoor (Sidewalk)</option>
                </select>
            </div>

            <div>
                <label>Additional Comments</label> <br></br>
                <textarea rows={8} cols={50} placeholder="Additional Comments">
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