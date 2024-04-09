import { useState, useEffect } from "react";
import RecipiesList from "../components/RecipiesList";
function Home() {
  const [recipies, setRecipies] = useState(null);
  const [check, setCheck] = useState(0);
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
  }, [check]);

  const deleteRecipie = (id) => {
    console.log(id);
    fetch("http://localhost:3000/recipies/" + id, {
      method: "DELETE",
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setCheck(check + 1);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container  flex items-center flex-col  gap-32 ">
      {recipies && (
        <RecipiesList recipies={recipies} deleteRecipie={deleteRecipie} />
      )}
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
