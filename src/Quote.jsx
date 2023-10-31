import React, { useEffect, useState } from "react";
const API_KEY = "Cmo7Wz8vbQ1LQWJoKoKtXw==DqnOMDkqGk49Nx63";
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

	return (
		<div>
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
