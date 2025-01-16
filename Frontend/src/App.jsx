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
import { AuthProvider } from "./contexts/AuthContext";
import RecipesPage from "./pages/RecipesPage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import BlogPage from "./pages/BlogPage";
import ProtectedRoute from "./components/ProtectedRoute";
import MealPlanner from "./components/MealPlanner";
import SettingsPage from "./pages/SettingsPage";
import { RecipesProvider } from "./contexts/RecipesContext";
import { PopupProvider } from "./contexts/PopupContext";
import { SearchProvider } from "./contexts/SearchContext";
import NotificationsPage from "./pages/NotificationsPage";
import FAQ from "./components/Footer/FAQ";
import SearchPage from "./pages/SearchPage";
import TopContributorPage from "./pages/TopContributorPage";
import MySavedRecipesFolderPage from "./pages/MySavedRecipesFolderPage";
import MySavedRecipesPage from "./pages/MySavedRecipesPage"
import MyUploadedRecipes from "./pages/MyUploadedRecipes";
import OtherProfilePage from "./pages/OtherProfilePage";
import RecipeFeed from "./pages/RecipeFeed";

function App() {
	return (
		<Router>
			<SearchProvider>
				<AuthProvider>
					<PopupProvider>
						<RecipesProvider>
							<ScrollToTop />
							<Navbar />

							<main className="pt-16">
								<Routes>
									<Route path="/" element={<HomePage />} />
									<Route
										path="/search"
										element={<SearchPage />}
									/>
									{/* ✅ Add SearchPage Route */}
									<Route
										path="/add-recipe"
										element={
											<ProtectedRoute>
												<CreateRecipePage />
											</ProtectedRoute>
										}
									/>
									<Route
										path="/contact"
										element={<Contact />}
									/>
									<Route
										path="/contact-post-submt"
										element={<ContactPostSubmit />}
									/>
									<Route
										path="/cookies"
										element={<Cookies />}
									/>
									<Route
										path="/about"
										element={<AboutCooksyPage />}
									/>
									<Route
										path="/recipes"
										element={<RecipesPage />}
									/>
									<Route
										path="/recipe/:id"
										element={<RecipeDetailsPage />}
									/>
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
									<Route
										path="/profile"
										element={<ProfilePage />}
									/>
									<Route
										path="/articles"
										element={<ArticlesPage />}
									/>
									<Route
										path="/categories"
										element={<CategoriesPage />}
									/>
									<Route path="/faq" element={<FAQ />} />
									<Route
										path="/blog"
										element={<BlogPage />}
									/>
									<Route
										path="/blog/:id"
										element={<BlogPage />}
									/>
									<Route
										path="/settings"
										element={<SettingsPage />}
									/>
									<Route
										path="/recipe/:id"
										element={<RecipeDetailsPage />}
									/>
									<Route
										path="/notifications"
										element={<NotificationsPage />}
									/>
									<Route
										path="/meal-planner"
										element={<MealPlanner />}
									/>
									<Route
										path="/saved-recipes"
										element={<MySavedRecipesPage />}
									/>
									<Route
										path="/folder-details"
										element={<MySavedRecipesFolderPage />}
									/>

									<Route
										path="/top-contributors"
										element={<TopContributorPage />}
									/>
									<Route
										path="/uploaded-recipes"
										element={<MyUploadedRecipes />}
									/>

									<Route
										path="/user/:id"
										element={<OtherProfilePage />}
									/>
									<Route
										path="/recipe-feed"
										element={<RecipeFeed/>}
									/>
								</Routes>
								<Footer />
							</main>
						</RecipesProvider>
					</PopupProvider>
				</AuthProvider>
			</SearchProvider>
		</Router>
	);
}

export default App;
