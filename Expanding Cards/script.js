// Selecting all elements with the class "panel"
const panels = document.querySelectorAll(".panel");

// Adding a click event listener to each panel
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    // Calling the function to remove active classes from other panels
    removeActiveClasses();

    // Adding the "active" class to the clicked panel
    panel.classList.add("active");
  });
});

// Function to remove active classes from all panels
function removeActiveClasses() {
  panels.forEach((panel) => {
    // Removing the "active" class from each panel
    panel.classList.remove("active");
  });
}
