import { cleanRes } from "./components/reservations";
import { cleanAddress } from "./components/address";
import "../../styles/bookings.css";

export const createBookingPage = () => {
  const content = document.getElementById("content");
  const bookingBtn = document.querySelector("#bookingBtn");
  const homeBook = document.querySelector("#homeBook");

  if (bookingBtn) {
    bookingBtn.addEventListener("click", () => {
      content.innerHTML = "";
      content.innerHTML = cleanRes + cleanAddress;
    });
  }

  document.addEventListener("click", (event) => {
    if (event.target.id === "homeBook") {
      content.innerHTML = cleanRes + cleanAddress;
    }
  });
};
