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
			<button
				className="w-fit rounded-lg mx-auto my-5 py-2 px-4 bg-violet-600/20 border border-violet-600/70 text-violet-600/90"
				onClick={() => setIsExpanded(!isExpanded)}>
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
