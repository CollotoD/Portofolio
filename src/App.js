import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import GitCard from './components/GitCard'
import LanguagesSection from './components/languagesSection';

function App() {

  const searchRepos = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}`, { 
      method: 'get', 
      headers: new Headers({
        'Authorization': `token ${process.env.REACT_APP_API_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'MyProtofolioWebApp'
      })
    });

    const data = await res.json();
    console.log(data.map(({ id, full_name, html_url, stargazers_count, watchers_count, updated_at }) => 
    ({id, full_name, html_url, stargazers_count, watchers_count, updated_at})))
  }

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    searchRepos()
  }, []);

  return (
    <>
    <div className="App">
      <section className="banner">
        <div className="banner-cont">
          <spline-viewer url="https://prod.spline.design/sfWNSW9kwc1pwadj/scene.splinecode" alt="https://via.placeholder.com/1000x250"></spline-viewer>
          <div className="navigation-bar">
            <ul>
              <li>PROJECTS</li>
              <li>LANGUAGES</li>
              <li>ASPIRATION</li>
              <li>ABOUT ME</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="projects">
        <div className="cardHolder">
          {repos?.length > 0
          ?(
            <div className="container">
            {repos.map((repo) => (
              <GitCard repo={repo}/>
            ))}
            </div>
            ) : (
              <div className="empty">
              <h2>No repos found</h2>
              </div>
              )
              }
        </div>
      </section>
      <LanguagesSection />
    </div>
    </>
  );
}

export default App;