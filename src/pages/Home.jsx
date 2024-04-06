import { useState, useEffect } from "react";
import RecipiesList from "../components/RecipiesList";
function Home() {
  const [recipies, setRecipies] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/recipies")
      .then((data) => {
        return data.json();
      })
      .then((recipies) => {
        setRecipies(recipies);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(recipies);
  return <div>{recipies && <RecipiesList recipies={recipies} />}</div>;
}

export default Home;
