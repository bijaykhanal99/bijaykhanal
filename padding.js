document.addEventListener("DOMContentLoaded", function () {

  function bindPadding(padInputId, targetId) {
    const padInput = document.getElementById(padInputId);
    const target = document.getElementById(targetId);

    if (!padInput || !target) return;

    padInput.addEventListener("input", function () {
      target.style.padding = this.value + "px";
    });
  }

  // Bind padding for all sections
  bindPadding("schoolbgpad", "schoolName");
  bindPadding("cardPad", "cardtYpe");
  bindPadding("fullPad", "fullNames");
  bindPadding("posPad", "classPosition");
  bindPadding("datePad", "daTe");
  bindPadding("wishPad", "wishEs");

});
