import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ChatBot from './components/ChatBot';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<LandingPage />} />
				<Route path='/chat' element={<ChatBot />} />
			</Routes>
		</Router>
	);
}

export default App;
