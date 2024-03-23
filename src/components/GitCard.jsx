import React from 'react';
import './css/GitCard.css';
import logo from '../collotod_remix.png';

function GitCard({ repo }) {
    return (
        <div className="gitCard">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <div className="header">
                    <img src={logo || "https://via.placeholder.com/250"} alt="Repository Logo" />
                    <h3>{repo.full_name.split("/").slice(1).join("/")}</h3>
                </div>
            </a>
                <div className="details">
                    <h3>{repo.description || "No description available"}</h3>
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
        </div>
    );
}

export default GitCard;
