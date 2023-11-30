import React, { useEffect, useState } from "react";
import "./quote.css";
const API_KEY = import.meta.env.VITE_API_KEY;
function Quote() {
	const [quote, setQuote] = useState([]);

	useEffect(() => {
		fetch(`https://api.api-ninjas.com/v1/quotes`, {
			method: "GET",
			headers: { "X-Api-Key": API_KEY },
			contentType: "application/json",
		})
			.then((response) => response.json())
			.then((json) => setQuote(json))
			.catch((error) => console.error(error));
	}, []);
	console.log(quote);

	return (
		<div className="body">
			{quote.map((item, index) => (
				<div key={index}>
					<h2>{item.quote}</h2>
					<p>{item.author}</p>
				</div>
			))}
		</div>
	);
}

export default Quote;
