document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form-inscription");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); 

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const game = document.getElementById("game").value;
      const login = document.getElementById("login").value;
      const password = document.getElementById("password").value;
  
      alert("Inscrição enviada com sucesso! Boa sorte no campeonato!");

    });
  });