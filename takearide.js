document.getElementById('deliveryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const item = document.getElementById('item').value;
    const instructions = document.getElementById('instructions').value;
    
    const message = `
        <h3>Delivery Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Item:</strong> ${item}</p>
        <p><strong>Instructions:</strong> ${instructions}</p>
    `;
    
    document.getElementById('message').innerHTML = message;
    document.getElementById('deliveryForm').reset();
});
