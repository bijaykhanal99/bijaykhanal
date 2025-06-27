
  const result = document.querySelector('.result');
  const bgOptions = document.querySelectorAll('.bg-options img');
  const bgUpload = document.getElementById('bgUpload');

  // Change background when clicking predefined images
  bgOptions.forEach(img => {
    img.addEventListener('click', () => {
      const imgSrc = img.getAttribute('src');
      result.style.backgroundImage = `url('${imgSrc}')`;
    });
  });

  // Upload custom background
  bgUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(event) {
        result.style.backgroundImage = `url('${event.target.result}')`;
      };
      reader.readAsDataURL(file);
    }
  });
  function openBackground() {
    document.querySelector('.backgrounds').style.display = 'block';
  }
  function closeBackground() {
    document.querySelector('.backgrounds').style.display = 'none';
  }
