document.addEventListener('DOMContentLoaded', function() {
    const addToBagButtons = document.querySelectorAll('.add-to-bag-btn');

    addToBagButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            
            alert('Your item has been added to the bag successfully');
        });
    });
});
