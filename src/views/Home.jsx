import { useState, useEffect } from "react";
import { CocktailsList } from "../components/CocktailsList";
import { Section } from "../components/Section";
import { Loader } from "../components/Loader";

import { getTrendingCocktails } from "../api/cocktail-service";

export const Home = () => {
  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const cocktails = await getTrendingCocktails();
        setError("");
        setCocktails(cocktails);
      } catch (error) {
        setError("something went wrong");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Section>
        <h1 className="text-center font-black text-gray-700 text-4xl mb-10">
          Trending cocktails
        </h1>

        <CocktailsList cocktails={cocktails} />
      </Section>
    </>
  );
};
