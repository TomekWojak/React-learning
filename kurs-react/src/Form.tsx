import { useState } from "react";

export function Form({ onAddPerson }: { onAddPerson: Function }) {
	const [name, setName] = useState("");
	const [tel, setTel] = useState("");
	const [city, setCity] = useState("");

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				console.log(name, tel, city);
				onAddPerson({ name, tel, city });
			}}>
			<div>
				<input
					value={name}
					onChange={(e) => setName(e.target?.value)}
					type="text"
					name="name"
					placeholder="Imię"
					className="bg-gray-500 text-white py-2 px-4 my-2"
				/>
			</div>
			<div>
				<input
					value={tel}
					onChange={(e) => setTel(e.target?.value)}
					type="tel"
					name="tel"
					placeholder="Telefon"
					className="bg-gray-500 text-white py-2 px-4 my-2"
				/>
			</div>
			<div>
				<input
					value={city}
					onChange={(e) => setCity(e.target?.value)}
					type="text"
					name="city"
					placeholder="Miasto"
					className="bg-gray-500 text-white py-2 px-4 my-2"
				/>
			</div>
			<button
				disabled={name.length === 0 || city.length === 0 || tel.length === 0}
				className="disabled:opacity-50 w-fit rounded-lg mx-auto my-5 py-2 px-4 bg-violet-600/20 border border-violet-600/70 text-violet-600/90 cursor-pointer">
				Zapisz
			</button>
		</form>
	);
}
