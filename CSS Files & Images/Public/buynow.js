document.addEventListener("DOMContentLoaded", function() {
    let popup = document.getElementById("popup");
  
    // Function to open the modal
    function openModal() {
      popup.classList.add("open-popup");
    }
  
    // Function to close the modal
    function closeModal() {
      popup.classList.remove("open-popup");
    }
  
    // Get the form element
    let form = document.querySelector(".buy_form");
  
    // Add event listener to the form
    form.addEventListener("submit", function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
  
      // Check if all required fields are filled before opening the modal
      let nameInput = document.getElementById("name1");
      let addressInput = document.querySelector("[name=myAddr]");
      let paymentInput = document.getElementById("paym");
      let phoneInput = document.getElementById("phone");
  
      // Check if all fields are filled
      let isCompleted = nameInput.value.trim() !== "" &&
        addressInput.value.trim() !== "" &&
        paymentInput.value.trim() !== "" &&
        phoneInput.value.trim() !== "";
  
      // If all fields are filled, open the modal
      if (isCompleted) {
        openModal();
      } else {
        // Otherwise, show an alert or handle the incomplete form as needed
        alert("Please fill in all required fields.");
      }
    });
  
    // Event delegation for "Proceed to Pay" button
    popup.addEventListener("click", function(event) {
      if (event.target.id === "closeit") {
        // Prevent the default behavior of the button
        event.preventDefault();
  
        // Close the modal when "Proceed to Pay" is clicked
        closeModal();
  
        // Here you can add additional logic if needed
      }
    });
  
    // Event delegation for payment method change
    document.getElementById("paym").addEventListener("change", function() {
      var selectedOption = this.value;
      var popupContent = document.getElementById("popup");
  
      // Reset content
      popupContent.innerHTML = "";
  
      if (selectedOption === "upi") {
        popupContent.innerHTML = `
          UPI ID
          <input type="text">
          <br>
          OR
          <br>
          Holder Name
          <input type="text">
          Amount ₹99999
          <button class="btn1" id="closeit">Proceed to Pay</button>
        `;
      }
      else if (selectedOption === "cash") {
        popupContent.innerHTML = `
          Thank You for ordering 
          <br>
          You will receive your order in 2-3 days
          <br>
          Payment will be done in cash
          <br>
           <button class="btn1" id="closeit">Close</button>
        `;
  
  
      }
      else if (selectedOption === "card") {
        popupContent.innerHTML = `
        Card Number
        <input type="text">
        <br>
        Expiry Date
        <input type="date">
        CVV
        <input type="text">
        Amount ₹99999
        <button class="btn1" id="closeit">Proceed to Pay</button>
      `;
      } else if (selectedOption === "emi") {
        var tenureOptions = `
        <option value="3">3 months</option>
        <option value="6">6 months</option>
        <option value="12">12 months</option>
      `;
        popupContent.innerHTML = `
        <strong>Choose Tenure:</strong>
        <select id="emiTenure">${tenureOptions}</select>
        <br>
        <p id="emiAmount"></p>
        <button class="btn1" id="closeit">Proceed to Pay</button>
      `;
        document.getElementById("emiTenure").addEventListener("change", function() {
          var selectedTenure = parseInt(this.value);
          var totalAmount = 99999; // Total amount
          var amountPerMonth = totalAmount / selectedTenure;
          document.getElementById("emiAmount").textContent = `Amount per month: ₹${amountPerMonth.toFixed(2)}`;
        });
      }
    });
  });