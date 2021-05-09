window.onload = function () {
  mostrarDados();
};

// mostrar a info no perfil (Já está +/- a dar)
function mostrarDados() {
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
        if (valor.id_type == 2 && valor.state == 1) {
          console.log("primeiro if");
          nomeUtilizador = valor.username;
          passwordUtilizador = valor.password;
          emailUtilizador = valor.email;
          document.getElementById("inputName").value = nomeUtilizador;
          document.getElementById("inputName2").value = passwordUtilizador;
          document.getElementById("inputEmail").value = emailUtilizador;
          return false;
        } else if (valor.id_type == 3 && valor.state == 1) {
          console.log("segundo if");
          nomeUtilizador = valor.username;
          passwordUtilizador = valor.password;
          emailUtilizador = valor.email;
          document.getElementById("inputName").value = nomeUtilizador;
          document.getElementById("inputName2").value = passwordUtilizador;
          document.getElementById("inputEmail").value = emailUtilizador;
          return false;
        }
      });
    })
    .catch((err) => console.error(err));
}

// alterar password
function alterarPass() {
  var novaPassword = document.getElementById("p-nova").value;
  console.log(novaPassword);
  fetch("http://localhost:8080/DAI_backend/update_user", {
    headers: { "Content-Type": "application/json" },
    method: "PUT",
  })
    .then((res) => res.json())
    .then((out) => {
      $.each(out, function (index, valor) {
        console.log("e agora aqui");
        valor.password = novaPassword;
        console.log("nova pass: " + novaPassword);
        // if (valor.id_type == 2 && valor.state == 1) {
        // } else if (valor.id_type == 3 && valor.state == 1) {
        // }
      });
    })
    .catch((err) => console.error(err));
}
