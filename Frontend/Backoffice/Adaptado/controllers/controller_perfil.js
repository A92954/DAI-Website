window.onload = function () {
  // preencher os campos do utilizador
  var nomeUtilizador;
  var passwordUtilizador;
  var emailUtilizador;

  fetch("http://localhost:8080/DAI_backend/read_user", {
    headers: { "Content-Type": "application/json" },
    method: "GET",
  })
    .then((res) => res.json())
    .then((out) => {
      $.each(out, function (index, valor) {
        nomeUtilizador = valor.username;
        passwordUtilizador = valor.password;
        emailUtilizador = valor.email;
        document.getElementById("inputName").value = nomeUtilizador;
        document.getElementById("inputName2").value = passwordUtilizador;
        document.getElementById("inputEmail").value = emailUtilizador;
      });
    })
    .catch((err) => console.error(err));
};
