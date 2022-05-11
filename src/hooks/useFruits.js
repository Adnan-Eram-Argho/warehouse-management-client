import { useEffect, useState } from "react"

const useFruits = () => {
    const [fruits, setFruits] = useState();
    useEffect(() => {

        fetch('http://localhost:5000/fruits')
            .then(ref => ref.json())
            .then(data => setFruits(data))
    }, [])
    return [fruits, setFruits];
}
export default useFruits;