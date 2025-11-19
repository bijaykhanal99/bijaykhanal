// Function to apply selected colors to preview elements
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("nameColor").addEventListener("input", function () {
    document.getElementById("fullNames").style.color = this.value;
  });

  document.getElementById("classColor").addEventListener("input", function () {
    document.getElementById("classPosition").style.color = this.value;
  });

  document.getElementById("dateColor").addEventListener("input", function () {
    document.getElementById("daTe").style.color = this.value;
  });

  document.getElementById("cardTypeColor").addEventListener("input", function () {
    document.getElementById("cardtYpe").style.color = this.value;
  });

    document.getElementById("sclColor").addEventListener("input", function () {
    document.getElementById("schoolName").style.color = this.value;
  });

      document.getElementById("wishColor").addEventListener("input", function () {
    document.getElementById("wishEs").style.color = this.value;
  });






});
// Function to reset all colors and inputs
function cancelColours() {
  const inputs = document.querySelectorAll('.colours input[type="color"]');
  inputs.forEach(input => {
    input.value = "#000000"; // Default to black or you can leave it blank
  });

  // Reset text color
  document.getElementById("fullNames").style.color = "";
  document.getElementById("classPosition").style.color = "";
  document.getElementById("daTe").style.color = "";
  document.getElementById("cardtYpe").style.color = "";
  document.getElementById("schoolName").style.color = "";
  document.getElementById("wishEs").style.color = "";
}




document.addEventListener("DOMContentLoaded", function () {
  const fonts = [
    "Arial",
    "Georgia",
    "Times New Roman",
    "Courier New",
    "Verdana",
    "'Comic Sans MS', cursive",
    "'Lucida Handwriting', cursive",
    "'Brush Script MT', cursive",
    "'Dancing Script', cursive",
    "'Pacifico', cursive"
  ];

  // Mapping of font selectors to element IDs
  const fontMap = {
    schoolFont: "schoolName",
    cardTypeFont: "cardtYpe",
    nameFont: "fullNames",
    classFont: "classPosition",
    dateFont: "daTe",
    wishesFont: "wishEs"
  };

  // Fill all dropdowns with fonts
  for (const selectId in fontMap) {
    const select = document.getElementById(selectId);
    fonts.forEach(font => {
      const option = document.createElement("option");
      option.value = font;
      option.textContent = font.replace(/['"]/g, "").split(",")[0]; // Clean label
      option.style.fontFamily = font;
      select.appendChild(option);
    });

    // Add change listener
    select.addEventListener("change", function () {
      const targetId = fontMap[selectId];
      const element = document.getElementById(targetId);
      if (element) {
        element.style.fontFamily = this.value;
      }
    });
  }
});

// Hide font panel
function closeFontPanel() {
  document.querySelector(".fonts").style.display = "none";
}
function openFontPanel() {
  document.querySelector(".fonts").style.display = "block";
}



function toggleStyle(elementId, styleType) {
  const el = document.getElementById(elementId);
  if (!el) return;

  switch (styleType) {
    case 'bold':
      el.style.fontWeight = el.style.fontWeight === 'bold' ? 'normal' : 'bold';
      break;
    case 'italic':
      el.style.fontStyle = el.style.fontStyle === 'italic' ? 'normal' : 'italic';
      break;
    case 'underline':
      el.style.textDecoration = el.style.textDecoration === 'underline' ? 'none' : 'underline';
      break;
    case 'transform':
      const current = el.style.textTransform;
      if (current === 'capitalize') {
        el.style.textTransform = 'uppercase';
      } else if (current === 'uppercase') {
        el.style.textTransform = 'none';
      } else {
        el.style.textTransform = 'capitalize';
      }
      break;
  }
}



function openStylePanel() {
  document.querySelector(".styles").style.display = "block";
}
// Hide style panel
function closeStylePanel() {
  document.querySelector(".styles").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {

  // Universal function to bind inputs
  function bindStyleControls(prefix, targetId) {
    const bg = document.getElementById(prefix + "Bg");
    const border = document.getElementById(prefix + "Border");
    const outline = document.getElementById(prefix + "Outline");
    const target = document.getElementById(targetId);

    if (!target) return;

    if (bg) {
      bg.addEventListener("input", () => {
        target.style.backgroundColor = bg.value;
      });
    }

    if (border) {
      border.addEventListener("input", () => {
        target.style.border = "2px solid " + border.value;
      });
    }

    if (outline) {
      outline.addEventListener("input", () => {
        target.style.outline = "2px solid " + outline.value;
      });
    }
  }

  // Bind all elements in one place
  bindStyleControls("school", "schoolName");
  bindStyleControls("card", "cardtYpe");
  bindStyleControls("full", "fullNames");
  bindStyleControls("pos", "classPosition");
  bindStyleControls("date", "daTe");
  bindStyleControls("wish", "wishEs");

});




function clearStyles(id) {
  const el = document.getElementById(id);

  el.style.backgroundColor = "transparent";
  el.style.border = "none";
  el.style.outline = "none";
  el.style.padding = "0px";
}

