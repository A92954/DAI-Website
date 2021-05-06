window.onload = function () {
  // preencher os campos do utilizador
  var nomeUtilizador;
  var passwordUtilizador;
  var emailUtilizador;

  //NAO TA A DAR
  fetch("http://161.230.18.89:8080/DAI_backend/read_user", {
    headers: { "Content-Type": "application/json" },
    method: "GET",
  })
    .then((res) => res.json())
    .then((out) => {
      $.each(out, function (index, valor) {
        if (valor.id_type == 2 && valor.id_state == 1) {
          console.log("tou aqui");
          nomeUtilizador = valor.username;
          passwordUtilizador = valor.password;
          emailUtilizador = valor.email;
          document.getElementById("inputName").value = nomeUtilizador;
          document.getElementById("inputName2").value = passwordUtilizador;
          document.getElementById("inputEmail").value = emailUtilizador;
        } else if (valor.id_type == 3 && valor.id_state == 1) {
          console.log("vim mais longe");
          nomeUtilizador = valor.username;
          passwordUtilizador = valor.password;
          emailUtilizador = valor.email;
          document.getElementById("inputName").value = nomeUtilizador;
          document.getElementById("inputName2").value = passwordUtilizador;
          document.getElementById("inputEmail").value = emailUtilizador;
        }
      });
    })
    .catch((err) => console.error(err));
};
