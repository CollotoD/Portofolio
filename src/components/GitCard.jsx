import React from 'react'
import './css/GitCard.css'
import logo from '../collotod_remix.png'

function GitCard ({repo}) {
    return (
        <>
        <div className="gitCard">
            <a href={repo.html_url}>
            <div className="header">
                <img src={ logo ? logo : "https://via.placeholder.com/250"}/>
                <h3>{repo.full_name}</h3>
            </div>
            <div className="details">
                <h3>{repo.description ? repo.description : "No description available"}</h3>
            </div>
            <div className="stats">
                <div className="stargazer">
                    <h3>{repo.stargazers_count}</h3>
                    <h3>Stargazers</h3>
                </div>
                <div className="stargazer">
                    <h3>{repo.watchers_count}</h3>
                    <h3>Watchers</h3>
                </div>
            </div>
            </a>
        </div>
        </>
    );
}

export default GitCard;