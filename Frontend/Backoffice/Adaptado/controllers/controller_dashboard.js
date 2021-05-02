window.onload = function () {
  // numero de atividades ativas, planeadas, realizadas e total de atividades
  var nAtiAti = 0;
  var nAtiPla = 0;
  var nAtiRea = 0;
  var i = 0;
  var dataAtividade;
  var today = new Date();
  var date =
    today.getFullYear() +
    "-" +
    (today.getFullMonth() + 1) +
    "-" +
    today.getFullDate();

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
        // console.log(date);
        // if (date.getTime() == dataAtividade.getTime()) {
        //   nAtiAti++;
        // } else if (date < valor.schedule) {
        //   nAtiPla++;
        // } else {
        //   nAtiRea++;
        // }

        document.getElementById("n-tot-ati").innerHTML = i;
      });
      // console.log(nAtiAti);
      // console.log(nAtiPla);
      // console.log(nAtiRea);
      // console.log(i);
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

  //número de gostos

  //número de partilhas

  //média de idade dos utilizadores (feito)
  var e0e6 = 0;
  var e7e11 = 0;
  var e12e15 = 0;
  var e16e18 = 0;
  var nCriancas = 0;

  fetch("http://localhost:8080/DAI_backend/read_child", {
    headers: { "Content-Type": "application/json" },
    method: "GET",
  })
    .then((res) => res.json())
    .then((out) => {
      $.each(out, function (index, valor) {
        nCriancas++; //contar as crianças todas

        var idade = valor.age; //guardar a idade de uma criança
        if (idade <= 0) {
        } else if (idade > 0 && idade <= 6) {
          e0e6++;
        } else if (idade >= 7 && idade <= 11) {
          e7e11++;
        } else if (idade >= 12 && idade <= 15) {
          e12e15++;
        } else {
          e16e18++;
        }

        var Perce0e6 = (e0e6 * 100) / nCriancas;
        var Perce7e11 = (e7e11 * 100) / nCriancas;
        var Perce12e15 = (e12e15 * 100) / nCriancas;
        var Perce16e18 = (e16e18 * 100) / nCriancas;

        document.getElementById("Perc0e6").style.width = Perce0e6 + "%";
        document.getElementById("Perc7e11").style.width = Perce7e11 + "%";
        document.getElementById("Perc12e15").style.width = Perce12e15 + "%";
        document.getElementById("Perc16e18").style.width = Perce16e18 + "%";
        $("#nTotal").text(e0e6 + "/" + nCriancas);
        $("#nTotal2").text(e7e11 + "/" + nCriancas);
        $("#nTotal3").text(e12e15 + "/" + nCriancas);
        $("#nTotal4").text(e16e18 + "/" + nCriancas);
      });
    })
    .catch((err) => console.error(err));
};
