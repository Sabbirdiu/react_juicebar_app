import React,{useState} from 'react'
import SearchForm from '../components/SearchForm'
import JuiceList from '../components/JuiceList';

function Home() {
    const [ loading , setLoading ] = useState(false)
    const[search , setSearch] = useState('ab')
    const[juice,setJuice] = useState([])

    React.useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`).then(response=>response.json())
        .then(data=>setJuice(data.drinks))
    }, [search])
    return (
        <main>
            <SearchForm setSearch={setSearch} />
            <JuiceList loading = {loading} juice = {juice}  />
        </main>
    )
}

export default Home
