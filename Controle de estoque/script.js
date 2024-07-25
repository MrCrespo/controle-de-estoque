document.addEventListener('DOMContentLoaded', () => {
    const itemForm = document.getElementById('itemForm');
    const itemNameInput = document.getElementById('itemName');
    const itemQuantityInput = document.getElementById('itemQuantity');
    const itemList = document.getElementById('itemList');

    itemForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addItem(itemNameInput.value, itemQuantityInput.value);
        itemNameInput.value = '';
        itemQuantityInput.value = '';
        itemNameInput.focus();
    });

    function addItem(name, quantity) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${name} - Quantidade: ${quantity}</span>
            <div class="item-controls">
                <button class="edit">Editar</button>
                <button class="delete">Remover</button>
            </div>
        `;

        const editButton = li.querySelector('.edit');
        const deleteButton = li.querySelector('.delete');

        editButton.addEventListener('click', () => editItem(li, name, quantity));
        deleteButton.addEventListener('click', () => li.remove());

        itemList.appendChild(li);
    }

    function editItem(itemElement, oldName, oldQuantity) {
        const newName = prompt('Novo nome do item:', oldName);
        const newQuantity = prompt('Nova quantidade:', oldQuantity);
        if (newName && newQuantity) {
            itemElement.querySelector('span').textContent = `${newName} - Quantidade: ${newQuantity}`;
        }
    }
});
