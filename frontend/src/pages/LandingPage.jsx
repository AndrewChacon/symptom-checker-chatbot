import './LandingPage.css';

const LandingPage = () => {
	return (
		<div className='landing-page'>
			<header className='header'>
				<h1>Welcome to Symptom Checker Chatbot</h1>
				<p>
					Your personal health companion for understanding symptoms,
					improving lifestyle, and promoting wellness.
				</p>
			</header>

			<section className='features'>
				<div className='feature'>
					<h2>Symptom Analysis & Suggestions</h2>
					<p>
						Input your symptoms, and our chatbot provides an
						overview of possible health conditions and educational
						insights for awareness and prevention.
					</p>
				</div>

				<div className='feature'>
					<h2>Diet & Lifestyle Insights</h2>
					<p>
						Share your dietary habits and lifestyle choices, and
						receive personalized suggestions for healthier
						alternatives and routines.
					</p>
				</div>

				<div className='feature'>
					<h2>Health Risk Education</h2>
					<p>
						Learn about potential health risks associated with your
						symptoms or habits. Our chatbot aims to educate and
						encourage positive lifestyle changes.
					</p>
				</div>

				<div className='feature'>
					<h2>Privacy & Anonymity</h2>
					<p>
						Your data is private and anonymous, providing a safe
						space to explore health insights without concerns about
						privacy.
					</p>
				</div>
			</section>

			<footer className='footer'>
				<button
					className='start-btn'
					// onClick={() => (window.location.href = '/chat')}
				>
					Start Checking Symptoms
				</button>
				<p>&copy; 2024 Symptom Checker Chatbot. All Rights Reserved.</p>
			</footer>
		</div>
	);
};

export default LandingPage;
