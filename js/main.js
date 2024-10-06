const modal = document.getElementById("my_modal_1");

document.getElementById("btn-donation").addEventListener("click", function () {
  addBtnStyle("btn-donation");
  showContentBy("donate");
});
document.getElementById("btn-history").addEventListener("click", function () {
  addBtnStyle("btn-history");
  showContentBy("history");
});
document
  .getElementById("btn-donate-noakhali")
  .addEventListener("click", function () {
    const inputDonation = getInputNumberbyId("input-donate-noakhali");
    const collection = getTextNumberbyId("current-collection-noakhali");
    const currentBalance = getTextNumberbyId("current-balance");
    const date = Date().toString();

    if (isNaN(inputDonation) || inputDonation > currentBalance || inputDonation < 0) {
      alert("Invalid Donation Amount");
    } else {
      const newBalance = currentBalance - inputDonation;
      const newCollection = collection + inputDonation;
      document.getElementById("current-balance").innerText = newBalance;
      document.getElementById("current-collection-noakhali").innerText =
        newCollection;
      modal.showModal();
      const div = document.createElement("div");
      div.innerHTML = `
            <div class="rounded-md bg-base-200 p-8 pl-10">
                    <h1 class="text-lg md:text-xl text-black font-medium">${inputDonation} Taka is Donated for famine-2024 at Noakhali,
                        Bangladesh</h1>
                    <p class="mt-5">Date: ${date}</p>
                </div>
        `;
      document.getElementById("history-content").appendChild(div);
    }
  });
document
  .getElementById("btn-donate-feni")
  .addEventListener("click", function () {
    const inputDonation = getInputNumberbyId("input-donate-feni");
    const collection = getTextNumberbyId("current-collection-feni");
    const currentBalance = getTextNumberbyId("current-balance");
    const date = Date().toString();

    if (isNaN(inputDonation) || inputDonation > currentBalance || inputDonation < 0) {
      alert("Invalid Donation Amount");
    } else {
      const newBalance = currentBalance - inputDonation;
      const newCollection = collection + inputDonation;
      document.getElementById("current-balance").innerText = newBalance;
      document.getElementById("current-collection-feni").innerText =
        newCollection;
      modal.showModal();
      const div = document.createElement("div");
      div.innerHTML = `
            <div class="rounded-md bg-base-200 p-8 pl-10">
                    <h1 class="text-lg md:text-xl text-black font-medium">${inputDonation} Taka is Donated for famine-2024 at Feni,
                        Bangladesh</h1>
                    <p class="mt-5">Date: ${date}</p>
                </div>
        `;
      document.getElementById("history-content").appendChild(div);
    }
  });
document
  .getElementById("btn-donate-student")
  .addEventListener("click", function () {
    const inputDonation = getInputNumberbyId("input-donate-student");
    const collection = getTextNumberbyId("current-collection-student");
    const currentBalance = getTextNumberbyId("current-balance");
    const date = Date().toString();

    if (isNaN(inputDonation) || inputDonation > currentBalance || inputDonation < 0) {
      alert("Invalid Donation Amount");
    } else {
      const newBalance = currentBalance - inputDonation;
      const newCollection = collection + inputDonation;
      document.getElementById("current-balance").innerText = newBalance;
      document.getElementById("current-collection-student").innerText =
        newCollection;
      modal.showModal();
      const div = document.createElement("div");
      div.innerHTML = `
            <div class="rounded-md bg-base-200 p-8 pl-10">
                    <h1 class="text-lg md:text-xl text-black font-medium">${inputDonation} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h1>
                    <p class="mt-5">Date: ${date}</p>
                </div>
        `;
      document.getElementById("history-content").appendChild(div);
    }
  });

