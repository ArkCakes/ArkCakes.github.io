document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "19543715521";

  let cliente = document.querySelector("#cliente").value;
  let sabortorta = document.querySelector("#sabortorta").value;
  let relleno = document.querySelector("#relleno").value;
  let cobertura = document.querySelector("#cobertura").value;
  let porciones = document.querySelector("#porciones").value;
  let fecha = document.querySelector("#fecha").value;
  let delivery = document.querySelector("#delivery").value;
  let add = document.querySelector("#add").value;
  let hora = document.querySelector("#hora").value;
  

  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		*_ARK CAKES_*%0A
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
    *Time Needed:*%0A
      ${hora}%0A
    *Pickup/Delivery:*%0A
      ${delivery}%0A
    *Additional Information:*%0A
      ${add}%0A
		
    `;

  if (cliente === "" || fecha === "" || hora === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Please complete all the fields, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Your order has been sent., ${cliente}`;

  window.open(url);
});
