import { useState } from 'react';
import { sendMessageToChatbot } from '../utils/api'; // Import the helper function

const ChatBot = () => {
	const [messages, setMessages] = useState([]); // Stores chat history
	const [input, setInput] = useState(''); // Tracks user input

	// Function to handle sending message to backend
	const handleSendMessage = async () => {
		if (!input.trim()) return; // Don't send empty messages

		// Add user's message to chat history
		const newMessages = [...messages, { sender: 'user', text: input }];
		setMessages(newMessages);

		// Clear input field
		setInput('');

		// Send message to backend and get response
		try {
			const botResponse = await sendMessageToChatbot(input);
			setMessages([...newMessages, { sender: 'bot', text: botResponse }]);
		// eslint-disable-next-line no-unused-vars
		} catch (error) {
			setMessages([
				...newMessages,
				{ sender: 'bot', text: 'Sorry, there was an error.' },
			]);
		}
	};

	return (
		<div style={styles.chatContainer}>
			<div style={styles.chatHeader}>Symptom Checker Bot</div>
			<div style={styles.chatHistory}>
				{messages.map((message, index) => (
					<div
						key={index}
						style={{
							...styles.message,
							alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
							backgroundColor: message.sender === 'user' ? '#007AFF' : '#F1F0F0',
							color: message.sender === 'user' ? '#FFF' : '#333',
						}}
					>
						{message.text}
					</div>
				))}
			</div>
			<div style={styles.inputContainer}>
				<input
					style={styles.input}
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Type a message..."
				/>
				<button style={styles.sendButton} onClick={handleSendMessage}>
					Send
				</button>
			</div>
		</div>
	);
};

const styles = {
	chatContainer: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		maxWidth: '450px',
		margin: '0 auto',
		borderRadius: '10px',
		boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
		overflow: 'hidden',
		backgroundColor: '#FFF',
		fontFamily: 'Arial, sans-serif',
	},
	chatHeader: {
		backgroundColor: '#007AFF',
		color: '#FFF',
		padding: '12px',
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: '16px',
	},
	chatHistory: {
		flex: 1,
		padding: '16px',
		overflowY: 'auto',
		height: '350px',
		backgroundColor: '#EFEFEF',
	},
	message: {
		padding: '10px 14px',
		margin: '6px 0',
		borderRadius: '16px',
		maxWidth: '75%',
		fontSize: '15px',
		lineHeight: '1.4',
		boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
	},
	inputContainer: {
		display: 'flex',
		padding: '12px',
		borderTop: '1px solid #ccc',
		backgroundColor: '#FFF',
	},
	input: {
		flex: 1,
		padding: '10px',
		borderRadius: '20px',
		border: '1px solid #ddd',
		fontSize: '14px',
		outline: 'none',
	},
	sendButton: {
		padding: '8px 16px',
		marginLeft: '10px',
		borderRadius: '20px',
		border: 'none',
		backgroundColor: '#007AFF',
		color: '#FFF',
		cursor: 'pointer',
		fontSize: '14px',
		fontWeight: 'bold',
	},
};

export default ChatBot;
