import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import './assets/scss/App.scss'
import Profile from './pages/Profile'

function App() {
	return (
		<div id="App">

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/profile" element={<Profile />} />
				
			</Routes>
		</div>
	)
}

export default App
