let rooms = [];

document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let room = document.getElementById("room").value;
  let bed = document.getElementById("bed").value;

  let booking = { name, room, bed };
  rooms.push(booking);

  displayRooms();
  alert("Room Booked Successfully!");
});

function displayRooms() {
  let list = document.getElementById("roomList");
  list.innerHTML = "";

  rooms.forEach((r, index) => {
    let li = document.createElement("li");
    li.textContent = `${r.name} booked Room ${r.room} - ${r.bed}`;
    list.appendChild(li);
  });
}
