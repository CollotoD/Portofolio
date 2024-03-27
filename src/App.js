import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import GitCard from './components/GitCard'

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
      <section className="languages">
        <div className="badgeDisplay">
          <div className="badgeProgrammingLang">
            <img className="badge" alt="https://via.placeholder.com/100x100" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" />
            <img className="badge" alt="https://via.placeholder.com/100x100" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
            <img className="badge" alt="https://via.placeholder.com/100x100" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />
            <img className="badge" alt="https://via.placeholder.com/100x100" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" />
            <img className="badge" alt="https://via.placeholder.com/100x100" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
            <img className="badge" alt="https://via.placeholder.com/100x100" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
            <img className="badge" alt="https://via.placeholder.com/100x100" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg" />
          </div>
          <div className="badgeDevTools">
            <img className="badge" alt="https://via.placeholder.com/100x100" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg" />
            <img className="badge" alt="https://via.placeholder.com/100x100" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
            <img className="badge" alt="https://via.placeholder.com/100x100" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xcode/xcode-original.svg" />
            <img className="badge" alt="https://via.placeholder.com/100x100" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
          </div>
          <div className="badgeFrameworks">
            <img className="badge" alt="https://via.placeholder.com/100x100" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
            <img className="badge" alt="https://via.placeholder.com/100x100" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
            <img className="badge" alt="https://via.placeholder.com/100x100" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
            <img className="badge" alt="https://via.placeholder.com/100x100" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg" />
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default App;