// const form = document.querySelector(".contact-form");
// const firstname = document.querySelector("#firstname");
// const lastname = document.querySelector("#lastname");
// const email = document.querySelector("#email");
// const subject = document.querySelector("#subject");
// const message = document.querySelector("#message");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const formData = {
//     firstname: firstname.value,
//     lastname: lastname.value,
//     email: email.value,
//     subject: subject.value,
//     message: message.value,
//   };

//   const xhr = new XMLHttpRequest();
//   xhr.open("POST", "/");
//   xhr.setRequestHeader("content-type", "application/json");
//   xhr.onload = function () {
//     console.log(xhr.responseText);

//     if (xhr.responseText == "success") {
//       alert("Thank you. I will get back to you later.");
//       firstname.value = "";
//       lastname.value = "";
//       email.value = "";
//       subject.value = "";
//       message.value = "";
//     } else {
//       alert("Something went wrong.");
//     }
//   };
//   xhr.send(JSON.stringify(formData));
// });
