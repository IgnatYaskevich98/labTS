import {useCallback, useState} from "react";
import {Layout} from "./components/Layout";


export const Counter = () => {
    const [count, setCount] = useState<number>(0)

    const handleIncrement = useCallback(() => setCount(count + 1),[count])

    const handleDecrement = useCallback(() => {
        if (count > 0) setCount(count - 1)
    },[count])

    const handleReset = useCallback(() => setCount(0),[])

    return <Layout handleIncrement={handleIncrement} handleDecrement={handleDecrement} handleReset={handleReset}
                   countValue={count}/>
};

