const toggle = document.getElementById('toggleTheme');

toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-theme');
});


   const gameSections = [...document.querySelectorAll("section")];
    const dropdownItems = document.querySelectorAll(".dropdown-item");

    dropdownItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const selectedCategory = item.dataset.category;

        if (selectedCategory === "all") {
          gameSections.forEach((section) => {
            section.style.display = "block";
          });
        } else {
          gameSections.forEach((section) => {
            if (section.dataset.category === selectedCategory) {
              section.style.display = "block";
            } else {
              section.style.display = "none";
            }
          });
        }
      });
    });