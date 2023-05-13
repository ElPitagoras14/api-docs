const cleanForm = () => {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
  document.getElementById("message").placeholder = "Your message has been sent successfully!";
  setTimeout(() => {
    document.getElementById("message").placeholder = "Enter your message";
  }, 3000)
};

const button = document.getElementById("button-form");

button.onclick = () => {
  const nameValue = document.getElementById("name").value;
  const correoValue = document.getElementById("email").value;
  const mensajeValue = document.getElementById("message").value;

  const isInvalid = [nameValue, correoValue, mensajeValue].some(
    (txt) => txt.trim() == ""
  );


  const body = `{
        "Nombre": "${nameValue}",
        "Correo": "${correoValue}",
        "Mensaje": "${mensajeValue}"
    }`;
  const options = { method: "POST", body, mode: "no-cors" };
  if (!isInvalid) {
    fetch("https://formspree.io/f/mvoygrrb", options)
      .then((response) => {
        cleanForm()
      })
      .catch((err) => {
      });
  }
};

