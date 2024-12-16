/* eslint-disable no-unused-vars */
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import CreateRecipePage from "./pages/CreateRecipePage";

function App() {
	return (
		<Router>
			<Navbar />
			<main className="pt-16">
				<Routes>
					<Route path="/add-recipe" element={<CreateRecipePage />} />
					<Route path="/" element={Navbar} />
				</Routes>
			</main>
		</Router>
	);
}

export default App;
