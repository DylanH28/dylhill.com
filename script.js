let mouseCursor = document.querySelector('.cursor');
let buttons = document.querySelectorAll('.buttons');
let submitBtn = document.querySelector('.submitBtn');

window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.clientY + 'px';
    mouseCursor.style.left = e.clientX + 'px';
}

buttons.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('linkGrow');
    });
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('linkGrow');
    });
});



var form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Thanks for reaching out!";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)