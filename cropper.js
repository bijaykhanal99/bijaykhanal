let cropper;
const cropContainer = document.getElementById('cropperModal'); // correct ID
const cropImage = document.getElementById('cropImage');         // correct ID
const cropButton = document.getElementById('cropButton');
const crops = document.getElementById('crop');       // correct ID
const cancelCrop = document.getElementById('cancelCrop');       // cancel button
const imageInput = document.getElementById('uploadImage');
const birtImage = document.getElementById('tbirt');
const loLogo = document.getElementById('logo');
const logoUpload = document.getElementById('uploadLogo');

imageInput.addEventListener('change', (e) => {
  if (e.target.files && e.target.files[0]) {
    const reader = new FileReader();
    reader.onload = (event) => {
      cropImage.src = event.target.result;
      cropContainer.style.display = 'block';

      if (cropper) {
        cropper.destroy();
      }

      cropper = new Cropper(cropImage, {
        aspectRatio: 1,
        viewMode: 1,
      });
    };
    reader.readAsDataURL(e.target.files[0]);
  }
});

cropButton.addEventListener('click', () => {
  if (cropper) {
    const croppedCanvas = cropper.getCroppedCanvas();
    birtImage.src = croppedCanvas.toDataURL('image/png');
    cropContainer.style.display = 'none';
    cropper.destroy();
    cropper = null;
  }
});

// Optional: handle cancel button
cancelCrop.addEventListener('click', () => {
  cropContainer.style.display = 'none';
  if (cropper) {
    cropper.destroy();
    cropper = null;
  }
});



    logoUpload.addEventListener('change', function() {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
          loLogo.src = e.target.result;
        }

        reader.readAsDataURL(file);
      }
    });











    const image = document.getElementById('imageko');
const imagee = document.getElementById('tbirt');

const borderSize = document.getElementById('borderSize');
const borderColor = document.getElementById('borderColor');
const outlineSize = document.getElementById('outlineSize');
const outlineColor = document.getElementById('outlineColor');

const topleftRadius = document.getElementById('topleftRadius');
const toprightRadius = document.getElementById('toprightRadius');
const bottomleftRadius = document.getElementById('bottomleftRadius');
const bottomrightRadius = document.getElementById('bottomrightRadius');
const totalRadius = document.getElementById('totalRadius');

const valTopleftRadius = document.getElementById('valTopleftRadius');
const valToprightRadius = document.getElementById('valToprightRadius');
const valBottomleftRadius = document.getElementById('valBottomleftRadius');
const valBottomrightRadius = document.getElementById('valBottomrightRadius');
const valTotalRadius = document.getElementById('valTotalRadius');

function updateStyles() {
  // Border for imageko
  image.style.border = `${borderSize.value || 0}px solid ${borderColor.value || '#000'}`;

  // Outline (used as border here) for tbirt
  imagee.style.border = `${outlineSize.value || 0}px solid ${outlineColor.value || '#000'}`;

  // Apply border-radius
  if (totalRadius.value > 0) {
    const radius = `${totalRadius.value}px`;
    image.style.borderRadius = radius;
    imagee.style.borderRadius = radius;
  } else {
    image.style.borderTopLeftRadius = `${topleftRadius.value}px`;
    image.style.borderTopRightRadius = `${toprightRadius.value}px`;
    image.style.borderBottomLeftRadius = `${bottomleftRadius.value}px`;
    image.style.borderBottomRightRadius = `${bottomrightRadius.value}px`;

    imagee.style.borderTopLeftRadius = `${topleftRadius.value}px`;
    imagee.style.borderTopRightRadius = `${toprightRadius.value}px`;
    imagee.style.borderBottomLeftRadius = `${bottomleftRadius.value}px`;
    imagee.style.borderBottomRightRadius = `${bottomrightRadius.value}px`;
  }

  // Show live values
  valTopleftRadius.textContent = topleftRadius.value;
  valToprightRadius.textContent = toprightRadius.value;
  valBottomleftRadius.textContent = bottomleftRadius.value;
  valBottomrightRadius.textContent = bottomrightRadius.value;
  valTotalRadius.textContent = totalRadius.value;
}

// Add event listeners
[
  borderSize, borderColor, outlineSize, outlineColor,
  topleftRadius, toprightRadius, bottomleftRadius, bottomrightRadius, totalRadius
].forEach(input => {
  input.addEventListener('input', updateStyles);
});

// Show/Hide Panel
function openBorderradius() {
  document.querySelector('.borderBorder').style.display = 'block';
}
function closeBorderradius() {
  document.querySelector('.borderBorder').style.display = 'none';
}

// Initialize on load
updateStyles();
