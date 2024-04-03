import DOMPurify from "dompurify";

const reservationsContent = `
<div class="resContainer">
    <div class="schedule">
        <h3>Time</h3>
        <p>OPEN</p>
        <div class="time">
            <h4>Monday<span>. . . . . . . . . .</span> 10AM-11PM</h4> 
        </div>
        <div class="time">
            <h4>Tuesday<span>. . . . . . . . . .</span> 10AM-11PM</h4> 
        </div>
        <div class="time">
            <h4>Wednesday<span>. . . . . . . . . . </span>10AM-11PM</h4> 
        </div>
        <div class="time">
            <h4>Thursday<span>. . . . . . . . . .</span> 10AM-11PM</h4> 
        </div>
        <div class="time">
            <h4>Friday<span>. . . . . . . . . .</span> 10AM-11PM</h4> 
        </div>
        <div class="time">
            <h4>Saturday<span>. . . . . . . . . .</span> 12PM-2AM</h4> 
        </div>
        <div class="time">
            <h4>Sunday<span>. . . . . . . . . . </span>12PM-2AM</h4> 
        </div>
    </div>
    <div class="reservations">
        <h3>Reservation</h3>
        <p>BOOK YOUR TABLE</p>
        <form id="reservationForm">
          <label for="people"></label>
            <select id="people" name="people" autocomplete="on">
                <option value="1">1 person</option>
                <option value="2" selected>2 people</option>
                <option value="3">3 people</option>
                <option value="4">4 people</option>
                <option value="5">5 people</option>
                <option value="6">6 people</option>
                <option value="7">7 people</option>
                <option value="8">8 people</option>
                <option value="9">9 people</option>
                <option value="10">10 people</option> 
            </select>
            <label for="date"></label>
            <input type="date" id="date" name="date" placeholder="Date" required autocomplete="on">
            <label for="time"></label>
            <input type="time" id="time" name="time" min="10:00" max="2:00" placeholder="Time" required autocomplete="on">
            <label for="name"></label>
            <input type="text" id="name" name="name" placeholder="Name" required autocomplete="on">
            <label for="phone"></label>
            <input type="tel" id="phone" name="phone" placeholder="Phone" required autocomplete="on">
            <label for="email"></label>
            <input type="email" id="email" name="email" placeholder="Email" required autocomplete="on">
        </form>
        <button type="submit" form="reservationForm">BOOK NOW</button>
    </div>
</div>
`;

export const cleanRes = DOMPurify.sanitize(reservationsContent);
