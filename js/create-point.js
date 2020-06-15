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
  const stateInput = document.querySelector("input[name=state]");
  const ufValue = e.target.value;

  const indexOfSelectdState = e.target.selectedIndex;
  stateInput.value = e.target.options[indexOfSelectdState].text;

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;

  citySelect.innerHTML = "<option value>Selecione a Cidade</options>";
  citySelect.disabled = true;

  fetch(url)
    .then((res) => res.json())
    .then((cities) => {
      for (city of cities) {
        citySelect.innerHTML += `<option value ="${city.nome}">${city.nome}</option>`;
      }

      citySelect.disabled = false;
    });
}

document.querySelector("select[name=uf]").addEventListener("change", getCities);

// intens de coletas

const itemsToCollect = document.querySelectorAll(".items-grid li");

for (const item of itemsToCollect) {
  item.addEventListener("click", handleSelectedItem);
}

let selectedItems = [];

function handleSelectedItem(event) {
  const itemli = event.target;
  //Adicionar ou remover uma classe
  itemli.classList.toggle("selected");

  const itemId = event.target.dataset.id;
  console.log(event.target.dataset.id);

  // Verificar se existem itens selecionados,
  // se sim pegar os itens

  const alreadySelected = selectedItems.findIndex()

  // se ja estiver selecinados, tirar da selacao

  // se nao estiver selecionado, adionar a selecao, e atualizar o input
}
