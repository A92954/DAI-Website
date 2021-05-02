window.onload = function () {
  // numero de atividades ativas, planeadas, realizadas e total de atividades
  var nAtiAti = 0;
  var nAtiPla = 0;
  var nAtiRea = 0;
  var i = 0;
  var dataAtividade;
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  fetch("http://localhost:8080/DAI_backend/read_activity", {
    headers: { "Content-Type": "application/json" },
    method: "GET",
  })
    .then((res) => res.json())
    .then((out) => {
      $.each(out, function (index, valor) {
        i++;
        // dataAtividade = valor.schedule;
        // console.log(dataAtividade);
        // if (date.getTime() == dataAtividade.getTime()) {
        //   nAtiAti++;
        // } else if (date < valor.schedule) {
        //   nAtiPla++;
        // } else {
        //   nAtiRea++;
        // }

        document.getElementById("n-tot-ati").innerHTML = i;
      });
      console.log(nAtiAti);
      console.log(nAtiPla);
      console.log(nAtiRea);
      console.log(i);
    })
    .catch((err) => console.error(err));

  // numero de sugestões (a funcionar)
  fetch("http://localhost:8080/DAI_backend/read_suggestion", {
    headers: { "Content-Type": "application/json" },
    method: "GET",
  })
    .then((res) => res.json())
    .then((out) => {
      $.each(out, function (index, valor) {
        i++;
        document.getElementById("n-sugestoes").innerHTML = i;
      });
    })
    .catch((err) => console.error(err));
};

//número de gostos

//número de partilhas
