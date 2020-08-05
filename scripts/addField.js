// >ação<
const cloneField = () => {
    // Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

    // limpar os campos
    const fields = newFieldContainer.querySelectorAll('input');
    fields.forEach((field) => {
        field.value = "";
    });

    // Colocar na págica
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}

// Procurar o botao
const button = document.querySelector("#add-time");
// Quando clicar no botao
button.addEventListener('click', cloneField);