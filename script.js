

document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', () => {
        const isExpanded = box.classList.contains('expanded');
        
        
        document.querySelectorAll('.box').forEach(otherBox => {
            otherBox.classList.remove('expanded');
        });

        
        if (!isExpanded) {
            box.classList.add('expanded');

            
            const radioButton = box.querySelector('input[type="radio"]');
            if (radioButton) {
                radioButton.checked = true;
            }

            
            updateTotalPrice(box);
        }
    });

   
    box.querySelectorAll('select').forEach(select => {
        select.addEventListener('click', event => {
            event.stopPropagation();
        });
    });
});


function updateTotalPrice(selectedBox) {
    const priceText = selectedBox.querySelector('.price');
    const price = parseFloat(priceText.textContent.replace('$', '').replace(' USD', ''));

   
    const totalAmountElement = document.querySelector('.total-amount');
    totalAmountElement.textContent = `Total: $${price.toFixed(2)} USD`;
}
