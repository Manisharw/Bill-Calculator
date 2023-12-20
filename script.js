document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("amount").addEventListener("keyup", function () {
    var input = this;
    var errorMessage = document.getElementById("amount-error");
    input.value = input.value.replace(/[^0-9]/g, "");
    if (input.value.trim() === "") {
      input.classList.add("invalid");
      errorMessage.style.display = "inline";
    } else {
      input.classList.remove("invalid");
      errorMessage.style.display = "none";
    }
  });
});
