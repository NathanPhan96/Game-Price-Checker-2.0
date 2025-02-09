// Frontend JS for signup page, this is loaded via the script tag in the signup.handlebars file
const signupFormHandler = async function (event) {
  event.preventDefault();

  const usernameEl = document.querySelector("#username-input-signup");
  const passwordEl = document.querySelector("#password-input-signup");


  window.localStorage.setItem('username', usernameEl.value);
  window.localStorage.setItem('password', passwordEl.value);

  
  const response = await fetch('/api/user', {
    method: 'POST',

    body: JSON.stringify({
      username: usernameEl.value,
      password: passwordEl.value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to sign up");
  }
};

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);
