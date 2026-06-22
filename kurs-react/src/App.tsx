import "./App.css";
import { PersonInfo } from "./PersonInfo";


const persons = [
	{
		name: "Karol",
		tel: 689483912,
		city: "Warszawa",
	},
	{
		name: "Karol",
		tel: 689483912,
		city: "Warszawa",
	},
	{
		name: "Karol",
		tel: 689483912,
		city: "Warszawa",
	},
];

function App() {
	return (
		<>
			<h1>Lista kontaktów</h1>
			{persons.map(({ name, tel, city }) => (
				<PersonInfo name={name} tel={tel} city={city} />
			))}
		</>
	);
}
export default App;
