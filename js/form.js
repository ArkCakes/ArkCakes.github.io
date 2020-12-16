document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "19549099849";

  let cliente = document.querySelector("#cliente").value;
  let sabortorta = document.querySelector("#sabortorta").value;
  let relleno = document.querySelector("#relleno").value;
  let cobertura = document.querySelector("#cobertura").value;
  let porciones = document.querySelector("#porciones").value;
  let fecha = document.querySelector("#fecha").value;
  let hora = document.querySelector("#hora").value;
  let entrega = document.querySelector("#entrega").value;
  let additional = document.querySelector("#additional").value;
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		*_Ark Cakes_*%0A
		*Order/Pedidos*%0A%0A
		*Name/Nombre:*%0A
    ${cliente}%0A
    *Cake Flavor/Sabor:*%0A
    ${sabortorta}%0A
    *Filling Flavor/Relleno:*%0A
    ${relleno}%0A
    *Icing Flavor/Cobertura:*%0A
    ${cobertura}%0A
    *Slice/Porciones:*%0A
    ${porciones}%0A
		*Date Needed:*%0A
		${fecha}%0A
		*Time Needed*%0A
    ${hora}%0A
    *Delivery or Pickup:%0A
    ${entrega}%0A
		*Additional Cake Details*%0A
    ${additional}`;

  if (cliente === "" || fecha === "" || hora === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;

  window.open(url);
});
