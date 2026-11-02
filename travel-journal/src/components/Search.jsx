import { useEffect, useRef } from "react";

export default function SearchSom(){
    const inputRef = useRef();

    useEffect(() =>{
        inputRef.current.focus();
    }, []);

    return(
        <div>
            <input ref={inputRef}  type="text" placeholder="Type something..." />
        </div>
    )
}