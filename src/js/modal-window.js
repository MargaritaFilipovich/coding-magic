function closeModal(id) {
    document.getElementById(id).style.display = "none";
  }
  
  function showModal(id) {
    document.getElementById(id).style.display = "flex";
  }
  
  function saveName() {
    const name = document.getElementById("username").value;
    if (name.trim() !== "") {
      localStorage.setItem("username", name);
      closeModal("welcomeModal");
      showModal("thankYouModal");
    } else {
      alert("Будь ласка, введіть своє ім’я.");
    }
  }
  
  window.onload = function () {
    const name = localStorage.getItem("username");
    if (!name) {
      showModal("welcomeModal");
    }
  
    document.getElementById("saveBtn").addEventListener("click", saveName);
    document.getElementById("closeWelcome").addEventListener("click", () => closeModal("welcomeModal"));
    document.getElementById("closeThanks").addEventListener("click", () => closeModal("thankYouModal"));
  };
  