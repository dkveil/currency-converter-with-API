import axios from 'axios'
import React, {useState, useEffect} from 'react';

function App() {

    const [data, setData] = useState({})

    const url = 'https://currencyscoop.p.rapidapi.com/latest'
    const token = 'f53bbfcd6emsh53cb2a99210ef13p1d0b36jsn617ef6bebbc5'
    const host = 'currencyscoop.p.rapidapi.com'


    useEffect(() => {
        axios({
            method: 'GET',
            url: url,
            headers: {
                'X-RapidAPI-Key': token,
                'X-RapidAPI-Host': host
            }
        })
        .then(
            res => {
                setData(res.data.response)
            }
        )
        .catch(
            error => console.log(error)
        )

    })

    return (
        <div className="App">
            <div>

            </div>
        </div>
  );
}

export default App;
