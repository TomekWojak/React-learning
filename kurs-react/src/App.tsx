import { PersonInfo } from "./PersonInfo";
import { Form } from "./Form";
import { useState } from "react";
import styles from "./index.module.css";

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

	const deletePerson = (tel) => {
		setPersons((prev) => prev.filter((person) => person.tel !== tel));
	};

	return (
		<>
			<h1 className={styles.test}>Lista kontaktów</h1>
			<Form onAddPerson={addPerson} />
			{persons.map(({ name, tel, city }) => (
				<PersonInfo
					key={tel}
					name={name}
					tel={tel}
					city={city}
					onDeletePerson={deletePerson}
				/>
			))}
		</>
	);
}
export default App;
