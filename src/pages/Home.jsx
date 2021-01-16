import React,{useState} from 'react'
import SearchForm from '../components/SearchForm'
import JuiceList from '../components/JuiceList';

function Home() {
    const [ loading , setLoading ] = useState(false)
    const[search , setSearch] = useState('a')
    const[juice,setJuice] = useState([])
    return (
        <main>
            <SearchForm setSearch={setSearch} />
            <JuiceList loading = {loading} juice = {juice}  />
        </main>
    )
}

export default Home
