export function showError(errorMessage) {
  console.error("Error:", errorMessage);

  // Additionally, update the webpage to inform the user
  const errorContainer = document.getElementById("error-message");
  if (errorContainer) {
    errorContainer.innerHTML = `<h1 class="text-red-500 text-xl font-bold">${errorMessage}</h1>`;

    errorContainer.style.display = "block"; // Make sure the element is visible
  } else {
    console.error("Error container element not found");
  }
}
