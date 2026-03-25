const form = document.getElementById("form");
const output = document.getElementById("output");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const subject = document.getElementById("subject").value;
  const days = document.getElementById("days").value;
  const level = document.getElementById("level").value;

  output.innerHTML = "Generating your study plan...";

  try {
    if (!subject || days <= 0) {
      output.innerHTML = "Please enter valid inputs.";
      return;
    }
    const res = await fetch("/generate-plan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subject, days, level }),
    });

    const data = await res.json();

    // Split into days
    const lines = data.plan.split("\n").filter(line => line.trim() !== "");

    output.innerHTML = lines.map(line => `
      <div class="card">${line}</div>
    `).join("");

  } catch (err) {
    output.innerHTML = "Error generating plan.";
  }
});