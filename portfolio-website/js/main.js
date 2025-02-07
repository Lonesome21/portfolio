document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "切换深色模式";
    toggleBtn.style.position = "fixed";
    toggleBtn.style.top = "10px";
    toggleBtn.style.right = "10px";
    toggleBtn.style.padding = "10px";
    toggleBtn.style.background = "#333";
    toggleBtn.style.color = "white";
    toggleBtn.style.border = "none";
    toggleBtn.style.cursor = "pointer";

    document.body.appendChild(toggleBtn);

    toggleBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });
});
