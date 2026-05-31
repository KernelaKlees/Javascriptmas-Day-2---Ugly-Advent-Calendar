const calendarContainer = document.getElementById('calendar');
const gifts = [
    "Chocolate Bar",
    "Talking Picture Frame",
    "Socks",
    "Cat Hammock",
    "Toy Car",
    "Gift Card",
    "Board Game",
    "Gift Wrap Set",
    "Christmas Sweater",
    "Hot Chocolate Set"
];

// Load the saved state from localStorage
let openedDays = JSON.parse(localStorage.getItem('openedDays')) || [];

for (let i = 1; i <= 24; i++) {
    let box = document.createElement('li');
    box.classList.add('calendar-box');
    
    // Create the number and icon
    let number = document.createElement('span');
    number.innerHTML = i; // Day number
    
    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-gift');
    
    // Create the random gift
    const randomGift = gifts[Math.floor(Math.random() * gifts.length)];
    let giftMessage = document.createElement('p');
    giftMessage.classList.add('gift');
    giftMessage.innerHTML = randomGift; // Random gift or chocolate
    
    // Add event listener to handle day clicks
    box.addEventListener('click', () => openDay(i, box));
    
    // Mark day as opened if already opened in localStorage
    if (openedDays.includes(i)) {
        box.classList.add('opened');
        giftMessage.style.display = 'block'; // Display the gift message
    }
    
    box.appendChild(number);
    box.appendChild(icon);
    box.appendChild(giftMessage);
    
    calendarContainer.appendChild(box);
}
//inizio
function openDay(day, box) {
    if (openedDays.includes(day)) {
        // close the day
        openedDays = openedDays.filter(d => d !== day);
        localStorage.setItem('openedDays', JSON.stringify(openedDays));
        box.classList.remove('opened');
        box.querySelector('.gift').style.display = 'none';
    } else {
        // open the day
        openedDays.push(day);
        localStorage.setItem('openedDays', JSON.stringify(openedDays));
        box.classList.add('opened');
        box.querySelector('.gift').style.display = 'block';
    }
}
//fine

document.addEventListener("keydown", function (e) {
    if (e.key === "r") {
        document.querySelectorAll(".opened").forEach(box => {
            box.classList.remove("opened");
        });
    }
});


