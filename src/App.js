import React, { useState } from "react";

import { fetchDictionary } from "./api/fetchDictionary";
import "./App.css";

function App() {
    const [query, setQuery] = useState("");
    const [dictionary, setDictionary] = useState([]);

    const search = async (e) => {
        // if (e.key === "Enter") {
        e.preventDefault();
        const data = await fetchDictionary(query);

        setDictionary(data[0]);
        setQuery("");
    };

    return (
        <div className="wrapper">
            <header>{dictionary.word ? dictionary.word : "English Dictionary"}</header>
            <div className="search d-flex">
                <input type="text" placeholder="Search a word" value={query} onChange={(e) => setQuery(e.target.value)} />
                <button className="btn" onClick={search}>
                    Search
                </button>
            </div>
            <p className="info-text">Type any existing word and press enter to get meaning, example, synonyms, etc.</p>

            {dictionary.word && (
                <ul>
                    <li className="word">
                        <div className="details">
                            <p>{dictionary.word}</p>
                            <span>{dictionary.word}</span>
                        </div>
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 200 200" strokeWidth={1.5} stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                            />
                        </svg>
                    </li>
                    <div className="content">
                        <li className="meaning">
                            <div className="details">
                                <p>Meaning</p>
                                <span>{dictionary.meanings[0].definitions[0].definition}</span>
                            </div>
                        </li>
                        <li className="example">
                            <div className="details">
                                <p>Example</p>
                                <span>___</span>
                            </div>
                        </li>
                        <li className="synonyms">
                            <div className="details">
                                <p>Synonyms</p>
                                <div className="list"></div>
                            </div>
                        </li>
                    </div>
                </ul>
            )}
        </div>

        // <div className="main-container">
        //     <input type="text" className="search" placeholder="نام شهر" value={query} onChange={(e) => setQuery(e.target.value)} onKeyUp={search} />
        //     {dictionary.main && (
        //         <div className="city">
        //             <h2 className="city-name">
        //                 <span>{dictionary.name}</span>
        //                 <sup>{dictionary.sys.country}</sup>
        //             </h2>
        //             <div className="city-temp">
        //                 {Math.round(dictionary.main.temp)}
        //                 <sup>&deg;C</sup>
        //             </div>
        //             <div className="info">
        //                 <p>{dictionary.weather[0].description}</p>
        //             </div>
        //         </div>
        //     )}
        // </div>
    );
}

export default App;
