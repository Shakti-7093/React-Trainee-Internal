import React, { useContext } from 'react'
import { Language } from './App'
import Gujarati from './Gujarati';
import Hindi from './Hindi';
import Japanese from './Japanese';


export default function English() {
    const data = useContext(Language);
    console.log(data);

    const handal = (val) => {
        data[1](val)
    }

    return (
        <>
            <select style={{ margin: "10px" }} onClick={(e) => handal(e.target.value)}>
                <option value="english" >English</option>
                <option value="ગુજરાતી"  >ગુજરાતી</option>
                <option value="hindi"  >Hindi</option>
                <option value="Japanese">Japanese</option>
            </select>

            {
                data[0] == "english" ? (
                    <div style={{ margin: "10px" }}>
                        <h1>Shakti singh Chundawat</h1>
                        <h1>I am react developer</h1>
                    </div>)

                    : data[0] == "ગુજરાતી" ? (<Gujarati />)

                        : data[0] == "hindi" ?(<Hindi />) : (<Japanese />)
            }

        </>

    )
}
