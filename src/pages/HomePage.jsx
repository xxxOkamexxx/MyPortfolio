import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import AboutMe from '../components/AboutMe';
import Profile from './Profile';

const HomePage = () => {
	const [progress, setProgress] = useState(0);
	const [isRunning, setIsRunning] = useState(true);
	const [showButton, setShowButton] = useState(false);
	const [showProfile, setShowProfile] = useState(false);
	const [margin, setMargin] = useState('20vh')
	const navigate = useNavigate();

	useEffect(() => {
		
		if (progress < 100) {
			setIsRunning(true)
		}

		if (progress < 100 && isRunning) {
			setTimeout(() => setProgress(prev => prev += 2), 50)
		}

		if (progress === 100) {
			setIsRunning(false)
		}

		if(progress === 100 && !isRunning){
			// setTimeout(() => setShowButton(true), 500)
			setTimeout(() => {
				setShowProfile(true)
				setMargin('10%')
			}, 300)
		}

	},[progress, isRunning])


	return (
		<>
			<Container 
				className='progressbar_container'
				style={{ marginTop:margin}}
			>
				
				<div className='progress d-flex align-items-center'>
					<div
						style={{
							height: "100%",
							width: `${progress}%`,
							backgroundColor: "orange",
							left: 0,
							transition: "width 0.5s"
						}}
					/>
				</div>

				{ !showProfile &&
					<span className="progressPercent">{progress}%</span>
				}

				{ showProfile &&
					<Profile />
				}
				
			</Container>

			{ showProfile &&
				<AboutMe />
			}
		</>
	)
}

export default HomePage
