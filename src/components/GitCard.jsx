import React from 'react';
import './css/GitCard.css';
import logo from '../collotod_remix-removedbg.png';

function GitCard({ repo }) {
function GitCard({ repo }) {
    return (
        <div className="gitCard">
            <div className="cardHeader">
                <img src={logo || "https://via.placeholder.com/250"} alt="Repository Logo" />
                <h3>{repo.full_name.split("/").slice(1).join("/")}</h3>
            </div>
            <div className="details">
                <h3>{repo.description || "No description available"}</h3>
                <div className="statistics">
                    <div className="starCounter">
                        <h3>{repo.stargazers_count}</h3>
                        <h3>STARGAZERS</h3>
                    </div>
                    <div className="watchCounter">
                        <h3>{repo.watchers_count}</h3>
                        <h3>WATCHERS</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GitCard;

export default GitCard;
