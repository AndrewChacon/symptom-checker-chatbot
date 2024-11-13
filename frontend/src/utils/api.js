export async function sendMessageToChatbot(message) {
	try {
		const response = await fetch('http://127.0.0.1:5000/chat', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ message }),
		});
		const data = await response.json();
		return data.response;
	} catch (error) {
		console.error('Error sending message to chatbot:', error);
		return 'Sorry, there was an error.';
	}
}
