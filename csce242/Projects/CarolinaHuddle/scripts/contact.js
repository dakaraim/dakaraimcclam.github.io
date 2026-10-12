const form = document.getElementById("contact-form");
const submitBtn = form.querySelector('button[type="submit"]');
const result = document.getElementById("form-result");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const formData = new FormData(form);

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    result.style.display = "block";
    result.textContent = "Sending message...";

    try {

        const response = await fetch(
            "https://api.web3forms.com/submit",
            {
                method: "POST",
                body: formData
            }
        );

        const data = await response.json();

        if (response.ok) {

            result.textContent = "Success! Your message has been sent.";
            result.className = "success";

            form.reset();

        } else {

            result.textContent = "Error: " + data.message;
            result.className = "error";

        }

    } catch (error) {

        result.textContent =
            "Something went wrong. Please try again.";

        result.className = "error";

    } finally {

        submitBtn.textContent = originalText;
        submitBtn.disabled = false;

    }

});