const printButtons = document.querySelectorAll("[data-print-document]");

printButtons.forEach((button) => {
  button.addEventListener("click", () => {
    window.print();
  });
});
