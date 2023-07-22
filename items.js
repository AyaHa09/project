document.addEventListener('DOMContentLoaded', function() {
    const addToBagButtons = document.querySelectorAll('.add-to-bag-btn');

    addToBagButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Display the alert when the button is clicked
            alert('Your item has been added to the bag successfully');
        });
    });
});
