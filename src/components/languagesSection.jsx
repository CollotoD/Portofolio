import React from 'react';
import './css/languagesSection.css'

function LanguagesSection () {
    return (
        <section className="languages">
        <div className="badgeDisplay">
            <h1>PROGRAMMING LANGUAGES</h1>
          <div className="badgeProgrammingLang">
            <div className="badge">
                <img alt="https://via.placeholder.com/100x100" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" />
                <h3>SSMS</h3>
            </div>
            <div className="badge">
                <img className="badge" alt="https://via.placeholder.com/100x100" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
                <h3>MYSQL</h3>
            </div>
            <div className="badge">
                <img className="badge" alt="https://via.placeholder.com/100x100" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />
                <h3>C#</h3>
            </div>
            <div className="badge">
                <img className="badge" alt="https://via.placeholder.com/100x100" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" />
                <h3>C</h3>
            </div>
            <div className="badge">
                <img className="badge" alt="https://via.placeholder.com/100x100" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                <h3>PYTHON</h3>
            </div>
            <div className="badge">
                <img className="badge" alt="https://via.placeholder.com/100x100" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                <h3>JAVASCRIPT</h3>
            </div>
            <div className="badge">
                <img className="badge" alt="https://via.placeholder.com/100x100" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg" />
                <h3>JSON</h3>
            </div>
          </div>
          <div className="badgeDevTools">
            <div className="badge">
                <img alt="https://via.placeholder.com/100x100" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg" />
                <h3>VISUAL STUDIO</h3>
            </div>
            <div className="badge">
                <img alt="https://via.placeholder.com/100x100" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" />
                <h3>VISUAL STUDIO CODE</h3>
            </div>
            <div className="badge">
                <img alt="https://via.placeholder.com/100x100" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xcode/xcode-original.svg" />
                <h3>XCODE</h3>
            </div>
            <div className="badge">
                <img alt="https://via.placeholder.com/100x100" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
                <h3>GIT</h3>
            </div>
          </div>
          <div className="badgeFrameworks">
            <div className="badge">
                <img className="badge" alt="https://via.placeholder.com/100x100" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                <h3>REACT</h3>
            </div>
            <div className="badge">
                <img className="badge" alt="https://via.placeholder.com/100x100" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
                <h3>EXPRESS</h3>
            </div>
            <div className="badge">
                <img className="badge" alt="https://via.placeholder.com/100x100" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" />
                <h3>NODEJS</h3>
            </div>
            <div className="badge">
                <img className="badge" alt="https://via.placeholder.com/100x100" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg" />
                <h3>.NET</h3>
            </div>
          </div>
        </div>
      </section>
    );
}

export default LanguagesSection;