import { Link } from "react-router-dom";

const HomePage = ({ recipes }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/add-recipe"
        className="inline-block mb-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
      >
        + Add New Recipe
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-lg p-4">
            <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded mb-4" />
            <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
            <p className="text-gray-700 mb-2">{recipe.summary}</p>
            <Link
              to={`/recipe/${recipe.id}`}
              className="mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              View Recipe
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
