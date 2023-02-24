import { useEffect, useState } from "react";

import Card from "../UI/Card";
import "./AvailableMeals.css";
import MealsItem from "./MealItem/MealsItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-ddcc4-default-rtdb.firebaseio.com/Meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsloading(false);
    };

    fetchMeals().catch((error) => {
      setIsloading(false);
      setError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className="MealsLoading">
        <p>Loading....</p>
      </section>
    );
  }
  if (isError) {
    return (
      <section className="MealsError">
        <p>{isError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealsItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className="meals">
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
