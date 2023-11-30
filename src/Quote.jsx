import React, { useEffect, useState } from "react";
import "./quote.css";
const API_KEY = import.meta.env.VITE_API_KEY;
function Quote() {
	const [quote, setQuote] = useState([]);

	useEffect(() => {
		fetchQuote();
	}, []);
	const fetchQuote = () => {
		fetch(`https://api.api-ninjas.com/v1/quotes`, {
			method: "GET",
			headers: { "X-Api-Key": API_KEY },
			contentType: "application/json",
		})
			.then((response) => response.json())
			.then((json) => setQuote(json))
			.catch((error) => console.error(error));
	};
	const getNewQuote = () => {
		fetchQuote();
	};
	return (
		<>
			<div className="title">
				<h1>Quote Generator</h1>
			</div>
			<div className="card">
				<div className="card-body">
					<div className="card-content">
						{quote.map((item, index) => (
							<div key={index}>
								<h2>{item.quote}</h2>
								<p>{item.author}</p>
							</div>
						))}
					</div>
					<div>
						<button className="btn" onClick={getNewQuote}>
							Get Quote
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Quote;
