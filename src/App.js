import './App.scss';
import FeatureList from './components/FeaturesList/FeaturesList.js';
import Header from './components/Header/Header.js';
import supervisor from './assets/images/icon-supervisor.svg';
import calculator from './assets/images/icon-calculator.svg';
import karma from './assets/images/icon-karma.svg'
import team from './assets/images/icon-team-builder.svg'


const featureData = [
	{
		name: 'Supervisor',
		class: 'feature Num1',
		description: 'Monitors activity to identify project roadblocks',
		image: supervisor,
		color: 'hsl(180, 62%, 55%)',
	},
	{
		name: 'Team Builder',
		class: 'feature Num2',
		description: 'Scans our talent network to create the optimal team for your project',
		image: team,
		color: 'hsl(0, 78%, 62%)',
	},
	{
		name: 'Karma',
		class: 'feature Num3',
		description: 'Regularly evaluates our talent to ensure quality',
		image: karma,
		color: 'hsl(34, 97%, 64%)',
	},
	{
		name: 'Calculator',
		class: 'feature Num4',
		description: 'Uses data from past projects to provide better delivery estimates',
		image: calculator,
		color: 'hsl(212, 86%, 64%)',
	},
];

function App() {
	return (
		<div className='App'>
			<Header />
			<FeatureList data={featureData} />
		</div>
	);
}

export default App;
