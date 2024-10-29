const messageForm = document.getElementById("messageForm");

async function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(messageForm);
  const body = Object.fromEntries(formData);

  const response = await fetch("http://localhost:8080/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  console.log(response);
}

messageForm.addEventListener("submit", handleSubmit);
