async function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const responseElement = document.getElementById('response');

    try {
        const response = await fetch('/api/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: userInput })
        });

        const data = await response.json();
        responseElement.textContent = data.message;
    } catch (error) {
        console.error('Error:', error);
    }
}
