/* eslint-disable no-unused-vars */
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import CreateRecipePage from "./pages/CreateRecipePage";
import Contact from "./components/Footer/Contact";
import ContactPostSubmit from "./components/Footer/ContactPostSubmit";
import Cookies from "./components/Footer/Cookies";
import TermsAndConditions from "./components/Footer/TermsAndConditions";
import PrivacyPolicy from "./components/Footer/PrivacyPolicy";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer/Footer";
import AboutCooksyPage from "./pages/AboutCooksyPage";
import NewsletterPage from "./pages/NewsletterPage";
import ScrollToTop from "./components/ScrollToTop";
import ProfilePage from "./pages/ProfilePage";
import ArticlesPage from "./pages/ArticlesPage";
import CategoriesPage from "./pages/CategoriesPage";
import UserProvider from "../contexts/UserContext";

function App() {
	return (
		<Router>
			<UserProvider>
				<ScrollToTop />
				<Navbar />
				<main className="pt-16">
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route
							path="/add-recipe"
							element={<CreateRecipePage />}
						/>
						<Route path="/contact" element={<Contact />} />
						<Route
							path="/contact-post-submt"
							element={<ContactPostSubmit />}
						/>
						<Route path="/cookies" element={<Cookies />} />
						<Route path="/about" element={<AboutCooksyPage />} />
						<Route
							path="/newsletter"
							element={<NewsletterPage />}
						/>
						<Route
							path="/terms-and-conditions"
							element={<TermsAndConditions />}
						/>
						<Route
							path="/privacy-policy"
							element={<PrivacyPolicy />}
						/>
						<Route path="/profile" element={<ProfilePage />} />
						<Route path="/articles" element={<ArticlesPage />} />
						<Route
							path="/categories"
							element={<CategoriesPage />}
						/>
					</Routes>
					<Footer />
				</main>
			</UserProvider>
		</Router>
	);
}

export default App;
