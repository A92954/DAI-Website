function logout() {
  fetch("http://localhost:8080/DAI_backend/logout", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
  })
    .then((res) => res.json())
    .then((out) => {
      $.each(out, function (index, valor) {
        console.log("aqui0");
        if (valor.id_type == 2 && valor.state == 1) {
          console.log("aqui");
          valor.state = 0;
          return false;
        } else if (valor.id_type == 3 && valor.state == 1) {
          console.log("aqui 2");
          valor.state = 0;
          return false;
        }
      });
    })
    .catch((err) => console.error(err));
}
