import { useEffect, useState } from "react"

const useFruits = () => {
    const [fruits, setFruits] = useState();
    useEffect(() => {

        fetch('https://boiling-atoll-49170.herokuapp.com/fruits')
            .then(ref => ref.json())
            .then(data => setFruits(data))
    }, [])
    return [fruits, setFruits];
}
export default useFruits;