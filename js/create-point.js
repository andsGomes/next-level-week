

function populateUf() {
  const ufSelect = document.querySelector("select[name=uf]");

  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then((res) => res.json())
    .then((states) => {
      for (state of states) {
        ufSelect.innerHTML += `<option value="${state.id}">${state.sigla}</option>`;
      }
    });
}

populateUf();

function getCities(e) {
  const citySelect = document.querySelector("select[name=city]");
  const stateInput  =  document.querySelector("input[name=state]");
  const ufValue  =  e.target.value;

  const indexOfSelectdState = e.target.selectedIndex;
  stateInput.value = e.target.options[indexOfSelectdState].text;

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;

  fetch(url)
    .then(res => res.json() )
    .then(cities => {
        for (city of cities){
            citySelect.innerHTML += `<option value ="${city.id}">${city.nome}</option>`;
        }

        citySelect.disabled = false
    })
}

document
   .querySelector("select[name=uf]")
   .addEventListener("change",getCities);