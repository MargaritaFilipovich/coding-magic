const scientists = [ 
    { name: "Albert", surname: "Einstein", born: 1879, dead: 1955, id: 1 }, 
    { name: "Isaac", surname: "Newton", born: 1643, dead: 1727, id: 2 }, 
    { name: "Galileo", surname: "Galilei", born: 1564, dead: 1642, id: 3 }, 
    { name: "Marie", surname: "Curie", born: 1867, dead: 1934, id: 4 }, 
    { name: "Johannes", surname: "Kepler", born: 1571, dead: 1630, id: 5 }, 
    { name: "Nicolaus", surname: "Copernicus", born: 1473, dead: 1543, id: 6 }, 
    { name: "Max", surname: "Planck", born: 1858, dead: 1947, id: 7 }, 
    { name: "Katherine", surname: "Blodgett", born: 1898, dead: 1979, id: 8 }, 
    { name: "Ada", surname: "Lovelace", born: 1815, dead: 1852, id: 9 }, 
    { name: "Sarah E.", surname: "Goode", born: 1855, dead: 1905, id: 10 }, 
    { name: "Lise", surname: "Meitner", born: 1878, dead: 1968, id: 11 }, 
    { name: "Hanna", surname: "Hammarström", born: 1829, dead: 1909, id: 12 } 
  ];
  
  const container = document.querySelector(".box-s");
  const buttons = document.querySelectorAll(".box-s-button-cart");
  
  function renderScientists(list) {
    container.innerHTML = ""; 
    if (list.length === 0) {
      container.innerHTML = "<p>Вчених не знайдено</p>";
      return;
    }
    list.forEach(sci => {
      const div = document.createElement("div");
      div.classList.add("box-cart-s");
      div.innerHTML = `<p>${sci.name} ${sci.surname} ${sci.born}-${sci.dead}</p>`;
      container.appendChild(div);
    });
  }
  
  // Спочатку показати всіх
  renderScientists(scientists);
  
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // Зняти підсвітку з усіх кнопок
      buttons.forEach(btn => btn.classList.remove("active"));
      // Підсвітити натиснуту кнопку
      button.classList.add("active");
  
      const text = button.textContent;
      let filtered = [...scientists];
  
      if (text.includes("19 ст")) {
        // Вчені, народжені у 19 столітті (1800-1899)
        filtered = scientists.filter(sci => sci.born >= 1800 && sci.born < 1900);
  
      } else if (text.includes("Einshtein")) {
        // Знайти рік народження Альберта Ейнштайна
        filtered = scientists.filter(sci => sci.name === "Albert" && sci.surname === "Einstein");
  
      } else if (text.includes("алфавітом")) {
        // Відсортувати за алфавітом за прізвищем
        filtered = [...scientists].sort((a, b) => a.surname.localeCompare(b.surname));
  
      } else if (text.includes("починаються на на літеру “С”")) {
        // Прізвища, що починаються з "С"
        filtered = scientists.filter(sci => sci.surname.startsWith("C"));
  
      } else if (text.includes("прожитих років")) {
        // Сортувати за кількістю прожитих років (dead - born) за спаданням
        filtered = [...scientists].sort((a, b) => (b.dead - b.born) - (a.dead - a.born));
  
      } else if (text.includes("ім’я яких починається на “А”")) {
        // Видалити вчених, ім'я яких починається на "А"
        filtered = scientists.filter(sci => !sci.name.startsWith("A"));
  
      } else if (text.includes("народився найпізніше")) {
        // Знайти вченого, що народився найпізніше (максимум born)
        let maxBorn = Math.max(...scientists.map(sci => sci.born));
        filtered = scientists.filter(sci => sci.born === maxBorn);
  
      } else if (text.includes("прожив найдовше і вченого, який прожив найменше")) {
        // Знайти вченого, що прожив найдовше і найменше
        let ages = scientists.map(sci => sci.dead - sci.born);
        let maxAge = Math.max(...ages);
        let minAge = Math.min(...ages);
        filtered = scientists.filter(sci => (sci.dead - sci.born) === maxAge || (sci.dead - sci.born) === minAge);
  
      } else if (text.includes("перші літери імені і прізвища")) {
        // Знайти вчених, у яких перша літера імені і прізвища співпадає
        filtered = scientists.filter(sci => sci.name[0].toLowerCase() === sci.surname[0].toLowerCase());
      }
  
      renderScientists(filtered);
    });
  });
  