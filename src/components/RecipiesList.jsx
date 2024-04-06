import { Link } from "react-router-dom";

function RecipiesList({ recipies }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {recipies.map((recipe) => {
        return (
          <div key={recipe.id} className="card w-80 h-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={recipe.img}
                alt=" This is a Meal"
                className="h-full w-full "
              />
            </figure>
            <div className="card-body w-full h-40">
              <h2 className="card-title">{recipe.title}</h2>
              <p className="">{recipe.method}</p>
              <div className="card-actions ">
                <Link
                  to={`/data/${recipe.id}`}
                  className="btn btn-primary w-full"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RecipiesList;
