// Animate skills when scrolling
document.addEventListener("scroll", () => {
  const skills = document.querySelectorAll(".skill");
  skills.forEach(skill => {
    const rect = skill.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      skill.style.opacity = "1";
      skill.style.transform = "scale(1)";
    }
  });
});

// Initial hidden state for animation
window.onload = () => {
  const skills = document.querySelectorAll(".skill");
  skills.forEach(skill => {
    skill.style.opacity = "0";
    skill.style.transform = "scale(0.8)";
    skill.style.transition = "all 0.6s ease-out";
  });
};