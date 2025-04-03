let darkMode = localStorage.getItem("darkMode") === "true";
const app = document.querySelector("#html");

if (darkMode) {
  app.classList.add("dark");
}

const changeDarkMode = () => {
  darkMode = !darkMode;

  if (darkMode) {
    app.classList.add("dark");
  } else {
    app.classList.remove("dark");
  }

  localStorage.setItem("darkMode", darkMode);
};


function handleMenuShow() {
  const menu = document.getElementById("mobile-menu");
  const openIcon = document.querySelector(".menu-open-icon");
  const closeIcon = document.querySelector(".menu-close-icon");

  if (menu.classList.contains("translate-y-0")) {
    menu.classList.add("hidden");
    menu.classList.remove("block");
    menu.classList.remove("translate-y-0", "opacity-100");
    menu.classList.add("-translate-y-full", "opacity-0");
    openIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  } else {
    menu.classList.add("block");
    menu.classList.remove("hidden");
    menu.classList.remove("-translate-y-full", "opacity-0");
    menu.classList.add("translate-y-0", "opacity-100");
    openIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
  }
}



document.addEventListener("DOMContentLoaded", () => {
  const mobileLinks = document.querySelectorAll("#mobile-menu a");
  const desktopLinks = document.querySelectorAll("#menu a");

  function handleLinkClick(event) {
    const text = event.target.textContent.trim(); 

    [...mobileLinks, ...desktopLinks].forEach(l => {
      l.classList.remove("bg-gray-700", "dark:bg-gray-900", "text-white");
      l.classList.add("text-gray-300");
    });

    [...mobileLinks, ...desktopLinks].forEach(l => {
      if (l.textContent.trim() === text) {
        l.classList.add("bg-gray-700", "dark:bg-gray-900", "text-white");
        l.classList.remove("text-gray-300");
      }
    });
  }

  [...mobileLinks, ...desktopLinks].forEach(link => {
    link.addEventListener("click", handleLinkClick);
  });
});

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
      }
  });
});

document.querySelectorAll('footer ul a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
      }
  });
});
