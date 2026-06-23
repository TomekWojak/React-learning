import { PersonInfo } from "./PersonInfo";
import { Form } from "./Form";
import { useState } from "react";

const initialPersons = [
	{
		name: "Karol",
		tel: 689483915,
		city: "Warszawa",
	},
	{
		name: "Karol",
		tel: 689483912,
		city: "Warszawa",
	},
	{
		name: "Karol",
		tel: 689483913,
		city: "Warszawa",
	},
];

function App() {
	const [persons, setPersons] = useState(initialPersons);

	const addPerson = (data) => {
		setPersons((prev) => [...prev, data]);
	};

	return (
		<>
			<h1>Lista kontaktów</h1>
			<Form onAddPerson={addPerson} />
			{persons.map(({ name, tel, city }) => (
				<PersonInfo key={tel} name={name} tel={tel} city={city} />
			))}
		</>
	);
}
export default App;
