import React,{useState} from 'react'
import SearchForm from '../components/SearchForm'
import JuiceList from '../components/JuiceList';

function Home() {
    const [ loading , setLoading ] = useState(false)
    const[search , setSearch] = useState('a')
    const[juice,setJuice] = useState([])

    React.useEffect(() => {
        setLoading(true);
        async function getDrinks() {
          try {
            const response = await fetch(
              `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
            );
            const data = await response.json();
            const { drinks } = data;
            if (drinks) {
              const newJuice = drinks.map(item => {
                const {
                  idDrink,
                  strDrink,
                  strDrinkThumb,
                  strAlcoholic,
                  strGlass
                } = item;
    
                return {
                  id: idDrink,
                  name: strDrink,
                  image: strDrinkThumb,
                  info: strAlcoholic,
                  glass: strGlass
                };
              });
              setJuice(newJuice);
            } else {
              setJuice([]);
            }
          } catch (error) {
            console.log(error);
          }
          setLoading(false);
        }
    
        getDrinks();
      }, [search]);
    return (
        <main>
            <SearchForm setSearch={setSearch} />
            <JuiceList loading = {loading} juice = {juice}  />
        </main>
    )
}

export default Home
