// >ação<
const cloneField = () => {
    // Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);
    
    const divTrash = document.createElement('div');
    divTrash.setAttribute('class', 'block-trash');

    const trash = document.createElement('button');
    trash.setAttribute('class', 'trash');
    trash.setAttribute('type', 'button');

    const trashIcon = document.createElement('img');
    trashIcon.setAttribute('src', '/images/icons/trash.png');
    trashIcon.setAttribute('alt', 'Lixo pra remover campo do horário.');
    trashIcon.setAttribute('width', '32px');
    trashIcon.setAttribute('height', '32px');

    trash.appendChild(trashIcon);
    divTrash.appendChild(trash);

    trash.addEventListener('click', () => {
        newFieldContainer.remove();
    });

    newFieldContainer.appendChild(divTrash);
    // limpar os campos
    const fields = newFieldContainer.querySelectorAll('input');
    fields.forEach((field) => {
        field.value = "";
    });

    // Colocar na págica
    const fieldHours =  document.querySelector('#schedule-items');
    fieldHours.appendChild(newFieldContainer);
}

// Procurar o botao
const button = document.querySelector("#add-time");
// Quando clicar no botao
button.addEventListener('click', cloneField);