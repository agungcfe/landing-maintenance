// Tahun otomatis di footer
document.getElementById("year").textContent = new Date().getFullYear();

// Animasi masuk setelah halaman siap
window.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(() => document.body.classList.add("is-ready"));
});
