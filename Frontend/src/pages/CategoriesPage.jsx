import React, { useContext, useEffect, useState } from 'react';
import HeadingWithLine from "../components/HeadingWithLine";
import CategoriesCard from "../components/CategoriesCard";
import { useData } from '../contexts/DataContext';

function CategoriesPage() {
    const { data, loading, error } = useData();
    console.log(data)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!data) return <p>No data available</p>;

    return (
        <div className="grid-layouten grid grid-cols-12 gap-x-4 py-32">
            <div className="col-start-2 col-span-10">
                <HeadingWithLine text="Categories" />
            </div>

            <div className="col-start-2 col-span-10 pb-12 pt-20">
                <HeadingWithLine text="Health & Nutrition" />
            </div>

            <div className="col-start-2 col-span-10 grid grid-cols-2 gap-4 md:grid-cols-3">
                {data.categories.map((categorie, index) => (
                    <CategoriesCard key={index} img={categorie.img} title={categorie.name} />
                ))}
            </div>

            <div className="col-start-2 col-span-10 pb-12 pt-20">
                <HeadingWithLine text="World Cuisines" />
            </div>

            <div className="col-start-2 col-span-10 grid grid-cols-2 gap-4 md:grid-cols-4">
                {data.worldCuisines.map((worldCuisin, index) => (
                    <CategoriesCard key={index} img={worldCuisin.img} title={worldCuisin.name} />
                ))}
            </div>

            <div className="col-start-2 col-span-10 pb-12 pt-20">
                <HeadingWithLine text="Dietary Preferences" />
            </div>

            <div className="col-start-2 col-span-10 grid grid-cols-2 gap-4 md:grid-cols-3">
                {data.dietaryPreferences.map((dietaryPreferenc, index) => (
                    <CategoriesCard key={index} img={dietaryPreferenc.img} title={dietaryPreferenc.name} />
                ))}
            </div>

            <div className="col-start-2 col-span-10 pb-12 pt-20">
                <HeadingWithLine text="Themes" />
            </div>

            <div className="col-start-2 col-span-10 grid grid-cols-2 gap-4 md:grid-cols-3">
                {data.themes.map((theme, index) => (
                    <CategoriesCard key={index} img={theme.img} title={theme.name} />
                ))}
            </div>
        </div>
    );
}

export default CategoriesPage;