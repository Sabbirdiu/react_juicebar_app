import React,{useState} from 'react'
import { useParams , Link } from 'react-router-dom';
export default function Details() {
    const {id} = useParams()
    const [loading, setLoading] = useState(false);
    const [juice, setJuice] = useState(null);

    React.useEffect(() => {
        setLoading(true);
        async function getJuice() {
          try {
            const response = await fetch(
              `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
            );
            const data = await response.json();
            if (data.drinks) {
              const {
                strDrink: name,
                strDrinkThumb: image,
                strAlcoholic: info,
                strCategory: category,
                strGlass: glass,
                strInstructions: instructions,
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5
              } = data.drinks[0];
              const ingredients = [
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5
              ];
              const newJuice = {
                name,
                image,
                info,
                category,
                glass,
                instructions,
                ingredients
              };
              setJuice(newJuice);
            } else {
              setJuice(null);
            }
          } catch (error) {
            console.log(error);
          }
          setLoading(false);
        }
        getJuice();
    }, [id])
    if (loading) {
        return <h2 className="section-title">Loading...</h2>;
      }
      if (!juice) {
        return <h2 className="section-title">no cocktail to display</h2>;
      } else {
        const {
          name,
          image,
          category,
          info,
          glass,
          instructions,
          ingredients
        } = juice;
    return (
        <section className="section cocktail-section">
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
        <h2 className="section-title">{name}</h2>
        <div className="drink">
          <img src={image} alt={name}></img>
          <div className="drink-info">
            <p>name : {name}</p>
            <p>category: {category}</p>
            <p>info: {info}</p>
            <p>glass : {glass}</p>
            <p>instructions : {instructions}</p>
            <p>
              ingredients :{" "}
              {ingredients.map((item, index) => {
                return item ? <span key={index}>{item}</span> : null;
              })}
            </p>
          </div>
        </div>
      </section>
    )
}
}
 
