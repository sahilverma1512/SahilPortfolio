// Prfile photo jo badi ho rhi h iss function se ho rhi h
function openProfile(imageUrl) {
  var modal = document.getElementById("profile-image-animation");
  // var modalImg = document.getElementById("profile-image-photo");

  modal.style.display = "block";
  // modalImg.src = imageUrl;
}

function closeProfile() {
  var modal = document.getElementById("profile-image-animation");
  modal.style.display = "none";
}

// khatam vo function

// -----------------------------------------Typewriter ki JS-----------------------------------------

const texts = ["Developer ", "Programmer ", "Creator ", "Innovator "];
let count = 0;
let index = 0;
let currentText = '';
let isDeleting = false;

function type() {
  const typingContainer = document.getElementById('typing-container');

  if (count < texts.length) {
    if (!isDeleting && index <= texts[count].length) {
      currentText = texts[count].slice(0, index++);
      typingContainer.textContent = currentText;
    }

    if (isDeleting && index >= 0) {
      currentText = texts[count].slice(0, index--);
      typingContainer.textContent = currentText;
    }

    let typingSpeed = 60;
    if (isDeleting) {
      typingSpeed = 60;
    }

    if (!isDeleting && index === texts[count].length) {
      typingSpeed = 700; // Pause before starting to delete
      isDeleting = true;
    } else if (isDeleting && index === 0) {
      isDeleting = false;
      count++;
      if (count === texts.length) {
        count = 0;
      }
      typingSpeed = 40; // Pause before starting to type the next text
    }

    setTimeout(type, typingSpeed);
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  type();
});

// Images js

// document.addEventListener('DOMContentLoaded', function () {
//   const allBtn = document.getElementById('showAll');
//   const hackathonBtn = document.getElementById('showHackathon');
//   const othersBtn = document.getElementById('showOthers');
//   const boxes = document.querySelectorAll('.box');
//   const filterMenuLinks = document.querySelectorAll('.filter-menu a');

//   function setActiveFilter(activeBtn) {
//     filterMenuLinks.forEach(link => link.classList.remove('active'));
//     activeBtn.classList.add('active');
//   }

//   function filterBoxes(type) {
//     boxes.forEach(box => {
//       if (type === 'all' || box.getAttribute('data-type') === type) {
//         box.style.position = 'static';
//         box.classList.remove('hidden');
//         setTimeout(() => {
//           box.style.display = 'flex';
//         }, 10);
//       } else {
//         box.classList.add('hidden');
//         setTimeout(() => {
//           box.style.display = 'none';
//         }, 800); // Match this duration with the transition duration
//       }
//     });
//   }

//   allBtn.addEventListener('click', function () {
//     setActiveFilter(allBtn);
//     filterBoxes('all');
//   });

//   hackathonBtn.addEventListener('click', function () {
//     setActiveFilter(hackathonBtn);
//     filterBoxes('hackathon');
//   });

//   othersBtn.addEventListener('click', function () {
//     setActiveFilter(othersBtn);
//     filterBoxes('others');
//   });
// });



// form js


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

// Formspree code to stop redirecting it to formspree

// function redirectTo(url) {
//     window.location.href = url;
// }

// window.onload = function () {
//   const submit = document.querySelector('#submit-btn');


//   submit.addEventListener('click', function () {
//     const url = this.getAttribute('data-url'); // Get the URL from data-url attribute
//     redirectTo(url);
//   });
// }





// -------------------------------------------------------------------------------

function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission

  const form = event.target;

  // Display a success message
  // const successMessage = document.createElement('h6');
  // successMessage.innerText = 'Form submitted successfully. Redirecting...';
  // form.appendChild(successMessage);

  // Collect form data
  const formData = new FormData(form);

  // Send form data to Formspree
  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
    .then(response => {
      if (response.ok) {
        // Redirect to the specified URL after 5 seconds
        setTimeout(() => {
          window.location.href = form.querySelector('input[name="_next"]').value;
        }, 1000);
      } else {
        // Handle errors if necessary
        // successMessage.innerText = 'Form submission failed. Please try again.';
      }
    })
    .catch(error => {
      successMessage.innerText = 'Form submission failed. Please try again.';
    });
}