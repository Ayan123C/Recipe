document.getElementById('show-form-btn').addEventListener('click', function() {
    document.getElementById('recipe-form-container').classList.toggle('hidden');
});

document.getElementById('recipe-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    formData.append('user-name', document.getElementById('user-name').textContent);


    console.log('Recipe Image:', formData.get('recipe-image'));
    console.log('Food Type:', formData.get('food-type'));
    console.log('Recipe Name:', formData.get('recipe-name'));
    console.log('Description:', formData.get('recipe-description'));
    console.log('Cooking Time:', formData.get('cooking-time'));
    console.log('User Name:', formData.get('user-name'));

    // Send formData to backend
    // fetch('/submit-recipe', {
    //     method: 'POST',
    //     body: formData
    // }).then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.error('Error:', error));
});
