let coins = 100;
let hearts = 0;
let copies = 0;

const callHistory = document.getElementById("call-history");
const coinDisplay = document.getElementById("coin-count");
const heartDisplay = document.getElementById("heart-count");
const copyDisplay = document.getElementById("copy-count");

// Heart buttons
document.querySelectorAll(".heart-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    hearts++;
    heartDisplay.innerText = hearts;
  });
});

// Call buttons
document.querySelectorAll(".call-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card-body");
    const name = card.querySelector(".card-title").innerText;
    const number = card.querySelector(".service-number").innerText;

    if (coins < 20) {
      alert("❌ Not enough coins!");
      return;
    }

    coins -= 20;
    coinDisplay.innerText = coins;
    alert(`📞 Calling ${name}: ${number}.....`);

    const now = new Date();
    const time = now.toLocaleTimeString("en-US");

    const li = document.createElement("li");
    li.className = "bg-gray-100 rounded-xl p-4 mb-3 flex justify-between items-start flex-col gap-1";

    li.innerHTML = `
      <div class="flex justify-between w-full">
        <span class="font-semibold text-lg">${name}</span>
        <span class="text-right text-black text-sm">${time}</span>
      </div>
      <span class="text-gray-500 text-sm">${number}</span>
    `;

    callHistory.prepend(li);
  });
});

// Copy buttons
document.querySelectorAll(".copy-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card-body");
    const number = card.querySelector(".service-number").innerText;

  
    navigator.clipboard.writeText(number)
      .then(() => {
        copies++;
        copyDisplay.innerText = `${copies} Copy`;
        alert(`📋 Copied: ${number}`);
      })
      .catch(err => {
        console.error("Failed to copy text: ", err);
      });
  });
});

// Clear history button
document.getElementById("clear-history-btn").addEventListener("click", () => {
  callHistory.innerHTML = "";
});
