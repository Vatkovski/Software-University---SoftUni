function attachEvents() {
    const submitButton = document.getElementById('submit');
    const refreshButton = document.getElementById('refresh');
    const messagesTextArea = document.getElementById('messages');
    const authorInput = document.querySelector('input[name="author"]');
    const contentInput = document.querySelector('input[name="content"]');

    const url = 'http://localhost:3030/jsonstore/messenger';

    submitButton.addEventListener('click', async () => {
        const author = authorInput.value.trim();
        const content = contentInput.value.trim();

        if (author !== '' && content !== '') {
            const message = { author, content };
            console.log(message);

            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(message)
                });

                if (!response.ok) {
                    throw new Error('Failed to send message');
                }

                // Clear the input fields after sending the message
                authorInput.value = '';
                contentInput.value = '';
            } catch (error) {
                console.error('Error:', error);
            }
        } else {
            alert('Please provide both name and message.');
        }
    });

    refreshButton.addEventListener('click', async () => {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Failed to fetch messages');
            }

            const data = await response.json();
            const messages = Object.values(data).map(msg => `${msg.author}: ${msg.content}`).join('\n');

            messagesTextArea.value = messages;
        } catch (error) {
            console.error('Error:', error);
        }
    });
}

attachEvents();
