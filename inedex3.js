const seats = document.querySelectorAll('.seat');
const selectedSeatsList = document.getElementById('selected-seats');
const totalPriceElement = document.getElementById('total-price');

let selectedSeats = [];
let totalPrice = 0;

seats.forEach(seat => {
  seat.addEventListener('click', () => {
    const seatId = seat.getAttribute('data-seat');

    if (seat.classList.contains('selected')) {
      selectedSeats = selectedSeats.filter(selectedSeat => selectedSeat !== seatId);
      totalPrice -= 20; 
      seat.classList.remove('selected');
      updateSelectedSeatsList();
      updateTotalPrice();
    } else {
      selectedSeats.push(seatId);
      totalPrice += 20; 
      seat.classList.add('selected');
      updateSelectedSeatsList();
      updateTotalPrice();
    }
  });
});

function updateSelectedSeatsList() {
  selectedSeatsList.innerHTML = ''; 

  selectedSeats.forEach(seatId => {
    const seatElement = document.createElement('li');
    seatElement.textContent = seatId;
    selectedSeatsList.appendChild(seatElement);
  });
}

function updateTotalPrice() {
  totalPriceElement.textContent = totalPrice;
}
