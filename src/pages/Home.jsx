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

  return (
    <div className="container  flex items-center flex-col  gap-32 ">
      {recipies && <RecipiesList recipies={recipies} />}
      <span className="flex items-center gap-2 mt-12 mr-auto ml-auto">
        Created by{" "}
        <a href="https://t.me/sherlock_20_04_00/" className="font-bold ">
          Olimjonov Rahmonjon
        </a>
      </span>
    </div>
  );
}

export default Home;
