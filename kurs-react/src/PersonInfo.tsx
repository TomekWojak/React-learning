import { useState } from "react";

type infoAboutPerson = {
	name: string;
	tel: number;
	city: string;
};

export function PersonInfo({ name, tel, city }: infoAboutPerson) {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<>
			<h2>Imię: {name}</h2>
			<button onClick={() => setIsExpanded(!isExpanded)}>
				{isExpanded ? "Schowaj" : "Pokaż"}
			</button>
			{isExpanded && (
				<>
					<h3>Telefon: {tel}</h3>
					{city && <h3>Miasto: {city}</h3>}
				</>
			)}
		</>
	);
}
