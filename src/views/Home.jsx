import React, { useEffect, useState } from "react";

import { getTrendingCocktails } from "../api/cocktail-service";
import { CocktailsList } from "../components/CocktailsList";
import { Section } from "../components/Section";
import { Loader } from "../components/Loader";

export const Home = () => {
  const [coctails, setCoctails] = useState([]);

  useEffect(() => {
    const getCoctails = async () => {
      const data = await getTrendingCocktails();
      setCoctails(data);
    };
    getCoctails();
  }, []);

  return (
    <>
      <Section>
        <h1 className="text-center font-black text-gray-700 text-4xl mb-10">
          Trending cocktails
        </h1>

        <CocktailsList cocktails={coctails} />
      </Section>
    </>
  );
};
