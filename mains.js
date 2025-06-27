    function back(){
    window.history.back();}

window.onload = function() {
  var mainInput = document.getElementById("dAte");
  mainInput.nepaliDatePicker({
    onChange: function() {
      document.getElementById('daTe').textContent = "BS. " + mainInput.value;
    }
  });
}
  const studentRadio = document.getElementById('student');
  const staffRadio = document.getElementById('staff');
  const studentlabel = document.querySelector('.studentlabel');
  const stafflabel = document.querySelector('.stafflabel');  
  function updateRole() {
    if (studentRadio.checked) {
   
    studentlabel.style.background = "#fff";
   studentlabel.style.color = "#333";
   stafflabel.style.background = "#333";
   stafflabel.style.color = "#fff";
   document.getElementById('cLass').style.display="block";
     document.getElementById('pOsition').style.display="none";
    } else if (staffRadio.checked) {
     
   stafflabel.style.background = "#fff";
  stafflabel.style.color = "#333";
      studentlabel.style.background = "#333";
      studentlabel.style.color = "#fff";
        document.getElementById('cLass').style.display="none";
         document.getElementById('pOsition').style.display="block";
    } else {
     


    }
  }
  
  studentRadio.addEventListener('change', updateRole);
  staffRadio.addEventListener('change', updateRole);
  function fullName(){
    document.getElementById('fullNames').innerHTML =
    document.getElementById('mR').value+" "+
     document.getElementById('fullName').value;
  }
  function schoolnAme(){
    document.getElementById('schoolName').innerHTML = document.getElementById('schoolnAme').value;
  }
  function wisHes(){
    document.getElementById('wishEs').innerHTML = document.getElementById('wisHes').value;
  }
    function cLass(){
    document.getElementById('classPosition').innerHTML =
    "Class :- "+ document.getElementById('cLass').value;
  }
     function pOsition(){
    document.getElementById('classPosition').innerHTML =
   document.getElementById('pOsition').value;
  }
    function cardType(){
    document.getElementById('cardtYpe').innerHTML =
   document.getElementById('cardType').value;
  }
  function openForm(){
    document.querySelector('.form').style.display = "block";
  }
    function cancelForm(){
    document.querySelector('.form').style.display = "none";
  }

  function openSize(){
    document.querySelector('.size').style.display = "block";
  }
    function closeSize(){
    document.querySelector('.size').style.display = "none";
  }
  function openPosition(){
    document.querySelector('.position').style.display = "block";
  }
    function cancelPosition(){
    document.querySelector('.position').style.display = "none";
  }

  function openColours(){
    document.querySelector('.colours').style.display = "block";
  }
    function closeColourss(){
    document.querySelector('.colours').style.display = "none";
  }

      document.addEventListener('keydown', function(event) {
      if (event.ctrlKey && event.key === '1') {
        event.preventDefault(); // Prevent browser's default find behavior
        const form = document.querySelector('.form');
        form.style.display = 'block'; // Show the form
      }
    });
      document.addEventListener('keydown', function(event) {
      if (event.ctrlKey && event.key === '7') {
        event.preventDefault(); // Prevent browser's default find behavior
        const position = document.querySelector('.backgrounds');
        position.style.display = 'block'; // Show the form
      }
    });

function setupSlider(sliderId, valueId, targetId, cssProperty, unit) {
      const slider = document.getElementById(sliderId);
      const valueDisplay = document.getElementById(valueId);
      const target = document.getElementById(targetId);

      const update = () => {
        const val = slider.value;
        valueDisplay.textContent = val;
        target.style[cssProperty] = val + unit;
      };

      update();
      slider.addEventListener('input', update);
    }

    // Connect sliders to corresponding elements
    setupSlider('nameSize', 'nameValue', 'fullNames', 'fontSize', 'px');
    setupSlider('schoolSize', 'schoolValue', 'schoolName', 'fontSize', 'px');
 setupSlider('dateSize', 'dateValue', 'daTe', 'fontSize', 'px');
setupSlider('ctypeSize', 'ctypeValue', 'cardtYpe', 'fontSize', 'px');
setupSlider('wishesSize', 'wishesValue', 'wishEs', 'fontSize', 'px');

setupSlider('wishesWSize', 'wishesWValue', 'wishEs', 'width', '%');
setupSlider('wishesHSize', 'wishesHValue', 'wishEs', 'height', '%');
    setupSlider('classSize', 'classValue', 'classPosition', 'fontSize', 'px');
    setupSlider('imageSize', 'imageValue', 'imageko', 'width', '%');
  setupSlider('imageSize', 'imageValue', 'imageko', 'height', '%');
 setupSlider('logoSize', 'logoValue', 'logo', 'width', '%');
  setupSlider('logoSize', 'logoValue', 'logo', 'height', '%');

    // Function to apply position changes
  function applyPosition() {
    // Get slider values
    const nameTop = document.getElementById('nameTop').value;
    const nameLeft = document.getElementById('nameLeft').value;

   const snameTop = document.getElementById('snameTop').value;
    const snameLeft = document.getElementById('snameLeft').value;

   const cardtypeTop = document.getElementById('ctypeTop').value;
    const cardtypeLeft = document.getElementById('ctypeLeft').value;

    const classTop = document.getElementById('classTop').value;
    const classLeft = document.getElementById('classLeft').value;

    const wishTop = document.getElementById('wishTop').value;
    const wishLeft = document.getElementById('wishLeft').value;

    const dateTop = document.getElementById('dateTop').value;
    const dateLeft = document.getElementById('dateLeft').value;

    const imageTop = document.getElementById('imageTop').value;
    const imageLeft = document.getElementById('imageLeft').value;

 const logoTop = document.getElementById('logoTop').value;
    const logoLeft = document.getElementById('logoLeft').value;
    // Apply styles
    const nameElem = document.getElementById('fullNames');
     const snameElem = document.getElementById('schoolName');
    const classElem = document.getElementById('classPosition');
    const imageElem = document.getElementById('imageko');
    const logoElem = document.getElementById('logo');
    const cardtypeElem = document.getElementById('cardtYpe');
   const dateElem = document.getElementById('daTe');
 const wishElem = document.getElementById('wishEs');

    nameElem.style.position = 'absolute';
    nameElem.style.top = `${nameTop}%`;
    nameElem.style.left = `${nameLeft}%`;

    snameElem.style.position = 'absolute';
   snameElem.style.top = `${snameTop}%`;
    snameElem.style.left = `${snameLeft}%`;

  cardtypeElem.style.position = 'absolute';
   cardtypeElem.style.top = `${cardtypeTop}%`;
    cardtypeElem.style.left = `${cardtypeLeft}%`;

    classElem.style.position = 'absolute';
    classElem.style.top = `${classTop}%`;
    classElem.style.left = `${classLeft}%`;

wishElem.style.position = 'absolute';
    wishElem.style.top = `${wishTop}%`;
    wishElem.style.left = `${wishLeft}%`;

 dateElem.style.position = 'absolute';
    dateElem.style.bottom = `${dateTop}%`;
    dateElem.style.right = `${dateLeft}%`;

    imageElem.style.position = 'absolute';
    imageElem.style.top = `${imageTop}%`;
    imageElem.style.left = `${imageLeft}%`;

       logoElem.style.position = 'absolute';
    logoElem.style.top = `${logoTop}%`;
    logoElem.style.left = `${logoLeft}%`;
  }

  // Function to reset positions
  function cancelSize() {
    document.getElementById('fullNames').style = '';
    document.getElementById('classPosition').style = '';
    document.getElementById('tbirt').style = '';
  }

  // Optional: Auto-update on slider move
  document.querySelectorAll('input[type="range"]').forEach(slider => {
    slider.addEventListener('input', applyPosition);
  });



      document.getElementById("download").addEventListener("click", function () {
      const resultDiv = document.querySelector(".result");

      html2canvas(resultDiv).then(canvas => {
        const link = document.createElement("a");
        link.download = "birthday_card.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      });
    });
