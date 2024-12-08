const menuIcon = document.getElementById("menu-icon");
const sidebar = document.getElementById("sidebar");
const closeIcon = document.getElementById("close-sidebar");

// Open sidebar
menuIcon.addEventListener("click", () => {
    sidebar.classList.add("active");
});

// Close sidebar
closeIcon.addEventListener("click", () => {
    sidebar.classList.remove("active");
});
