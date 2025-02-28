import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { generateClient } from "aws-amplify/data";
import "./App.css";

const client = generateClient<Schema>();

function App() {
  const [urls, setUrls] = useState<Array<Schema["Todo"]["type"]>>([]);
  const [inputUrl, setInputUrl] = useState("");
  const { user, signOut } = useAuthenticator();

  useEffect(() => {
    document.title = "URL Storage - Journey Finder";
  }, []);

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setUrls([...data.items]),
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputUrl.trim()) {
      try {
        await client.models.Todo.create({ content: inputUrl });
        setInputUrl("");
      } catch (error) {
        console.error("Error saving URL:", error);
      }
    }
  };

  return (
    <>
      <nav className="nav">
        <div className="nav-brand">Journey Finder</div>
        <div className="nav-links-container">
          <a href="/about" className="nav-link">
            About Us
          </a>
          {user ? (
            <span className="nav-link" onClick={signOut}>
              Logout
            </span>
          ) : (
            <a href="/login" className="nav-link">
              Login
            </a>
          )}
        </div>
      </nav>

      <main className="main-content">
        <h1 className="page-title">URL Scaper</h1>

        <form onSubmit={handleSubmit} className="url-form">
          <input
            type="url"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            placeholder="Enter URL here"
            required
            className="url-input"
          />
          <button type="submit" className="submit-button">
            Start Scrape
          </button>
        </form>

        <div className="url-list-container">
          <h2>Scraped URLs:</h2>
          <ul className="url-list">
            {urls.map((url) => (
              <li key={url.id} className="url-item">
                {url.content}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default App;
