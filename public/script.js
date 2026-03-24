const form = document.getElementById("form");
const output = document.getElementById("output");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const subject = document.getElementById("subject").value;
  const days = document.getElementById("days").value;
  const level = document.getElementById("level").value;

  output.textContent = "Generating...";

  try {
    const res = await fetch("/generate-plan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subject, days, level }),
    });

    const data = await res.json();
    output.textContent = data.plan;
  } catch (err) {
    output.textContent = "Error generating plan.";
  }
});