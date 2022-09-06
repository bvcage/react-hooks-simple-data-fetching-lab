import React, { useState, useEffect } from 'react';

function App () {
    const [dogImg, setDogImg] = useState('');
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(api => {
            setDogImg(api.message);
            setHasLoaded(true);
        })
    }, []);

    if (!hasLoaded) return <p>Loading...</p>
    else return <img src={dogImg} alt='A Random Dog' />
}

export default App