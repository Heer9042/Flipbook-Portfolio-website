import React, { useState, useEffect } from 'react';
import './App.css';
import Profile from './components/Profile';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App = () => {
  const [coverTurned, setCoverTurned] = useState(false);
  const [pages, setPages] = useState([
    { turn: false, zIndex: 20 },
    { turn: false, zIndex: 19 },
    { turn: false, zIndex: 18 },
    { turn: false, zIndex: 17 },
  ]);

  useEffect(() => {
    const coverTimeout = setTimeout(() => {
      setCoverTurned(true);
    }, 2100);

    return () => clearTimeout(coverTimeout);
  }, []);

  const handleNextPage = (pageIndex) => {
    setPages((prevPages) => {
      const newPages = [...prevPages];
      newPages[pageIndex - 1].turn = true;
      newPages[pageIndex - 1].zIndex = 20 + pageIndex;
      return newPages;
    });
  };

  const handlePrevPage = (pageIndex) => {
    setPages((prevPages) => {
      const newPages = [...prevPages];
      newPages[pageIndex - 1].turn = false;
      setTimeout(() => {
        newPages[pageIndex - 1].zIndex = 20 - pageIndex;
        setPages(newPages);
      }, 500);
      return newPages;
    });
  };

  const handleContactMe = () => {
    setPages((prevPages) =>
      prevPages.map((page, index) => ({
        ...page,
        turn: true,
        zIndex: 20 + index + 1,
      }))
    );
  };

  const handleBackProfile = () => {
    setPages((prevPages) =>
      prevPages.map((page, index) => ({
        ...page,
        turn: false,
        zIndex: 20 - index,
      }))
    );
  };

  return (
    <div className="wrapper">
      <div className="cover cover-left"></div>
      <div
        className={`cover cover-right ${coverTurned ? 'turn' : ''}`}
        style={{ zIndex: coverTurned ? -1 : 100 }}
      ></div>

      <div className="book">
        <div
          className="book-page page-left"
          style={{ zIndex: coverTurned ? 20 : 'auto' }}
        >
          <Profile handleContactMe={handleContactMe} />
        </div>

        {pages.map((page, index) => (
          <div
            key={index}
            className={`book-page page-right ${page.turn ? 'turn' : ''}`}
            style={{ zIndex: page.zIndex }}
          >
            <div className="page-front">
              {index === 0 && <About />}
              {index === 1 && <Projects page={1} />}
              {index === 2 && <Projects page={2} />}
              {index === 3 && <Contact handleBackProfile={handleBackProfile} />}
              <span className="number-page">{index * 2 + 1}</span>
              {index < pages.length - 1 && (
                <span
                  className="nextprev-btn"
                  onClick={() => handleNextPage(index + 1)}
                >
                  <i className="bx bxs-chevron-right"></i>
                </span>
              )}
            </div>
            <div className="page-back">
              {index === 0 && <Education />}
              {index === 1 && <Projects page={3} />}
              {index === 2 && <Skills />}
              {index === 3 && (
                <div style={{ background: 'var(--cover-color)' }}></div>
              )}
              <span className="number-page">{index * 2 + 2}</span>
              {index > 0 && (
                <span
                  className="nextprev-btn back"
                  onClick={() => handlePrevPage(index)}
                >
                  <i className="bx bxs-chevron-left"></i>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;