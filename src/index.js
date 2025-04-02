let darkMode = true;
const app = document.querySelector("#html");

const changeDarkMode = () => {
  darkMode = !darkMode
  if (darkMode) {
    app.classList.add("dark");
  } else {
    app.classList.remove("dark");
  }
};

let showMenu = false;
const mobileMenu = document.querySelector("#mobile-menu");

const handleMenuShow = () => {
  showMenu = !showMenu
  if (showMenu) {
    mobileMenu.classList.add("block");
    mobileMenu.classList.remove("hidden");
  } else {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("block");    
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
