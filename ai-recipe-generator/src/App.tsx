import { useState } from "react";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import "@aws-amplify/ui-react/styles.css";
import outputs from "../amplify_outputs.json";
import type { Schema } from "../amplify/data/resource";
import "./App.css";

Amplify.configure(outputs);

const client = generateClient<Schema>();

function App() {
  const [ingredients, setIngredients] = useState("");
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);

  const generateRecipe = async () => {
    if (!ingredients.trim()) {
      return;
    }

    setLoading(true);
    setRecipe("");

    try {
      const ingredientList = ingredients
        .split(",")
        .map((ingredient) => ingredient.trim())
        .filter(Boolean);

      const { data, errors } = await client.queries.askBedrock({
        ingredients: ingredientList,
      });

      if (errors?.length) {
        console.error("GraphQL errors:", errors);
        setRecipe("Something went wrong while generating the recipe.");
        return;
      }

      if (data?.body) {
        setRecipe(data.body);
      } else {
        setRecipe("No recipe was returned.");
      }
    } catch (error) {
      console.error("Error generating recipe:", error);
      setRecipe("Something went wrong while generating the recipe.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header className="header-container">
        <h1 className="main-header">
          Meet Your <span className="highlight">Personal Recipe AI</span>
        </h1>

        <p className="description">
          Enter the ingredients you have, and let AI create a recipe for you.
        </p>
      </header>

      <main>
        <div className="form-container">
          <div className="search-container">
            <input
              className="wide-input"
              type="text"
              value={ingredients}
              onChange={(event) => setIngredients(event.target.value)}
              placeholder="chicken, rice, onion, tomato"
              disabled={loading}
            />

            <button
              className="search-button"
              type="button"
              onClick={generateRecipe}
              disabled={loading || !ingredients.trim()}
            >
              {loading ? "Generating..." : "Generate Recipe"}
            </button>
          </div>
        </div>

        {loading && (
          <div className="loader-container">
            <p>Creating your recipe with Amazon Nova Lite...</p>
          </div>
        )}

        {recipe && !loading && (
          <div className="result-container">
            <div className="result">{recipe}</div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;