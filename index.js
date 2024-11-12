document.querySelector('form').addEventListener('submit', async function(event) {
    event.preventDefault(); 
    const formData = new FormData(this);
    const response = await fetch('/submit-form', {
        method: 'POST',
        body: formData,
    });
    const result = await response.text();
    alert(result); 
});