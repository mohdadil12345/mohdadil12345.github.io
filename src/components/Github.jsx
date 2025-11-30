import React from "react";
import GitHubCalendar from "react-github-calendar";
import { FaGithub, FaCode, FaFire, FaStar } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

export default function Github() {
  const { isLight } = useTheme();
  
  // Custom theme for the calendar
  const calendarTheme = {
    light: ['#f0ebe4', '#d4c5b9', '#c17b47', '#a65d32', '#8b4513'],
    dark: ['#1a1a2e', '#2d2d4a', '#6366f1', '#8b5cf6', '#a78bfa']
  };

  return (
    <section id="github" className="github-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Open Source</span>
          <h2 className="section-title">GitHub Activity</h2>
          <p className="section-subtitle">
            My contribution history and coding activity over the past year
          </p>
        </div>
        
        <div className="github-content">
          <div className="github-calendar-card">
            <div className="calendar-header">
              <div className="calendar-icon">
                <FaGithub />
              </div>
              <div className="calendar-info">
                <h3>Contribution Graph</h3>
                <p>@mohdadil12345</p>
              </div>
            </div>
            <div className="calendar-wrapper">
              <GitHubCalendar 
                username="mohdadil12345"
                blockSize={14}
                blockMargin={5}
                fontSize={14}
                colorScheme={isLight ? 'light' : 'dark'}
              />
            </div>
          </div>
          
          <div className="github-stats-grid">
            <div className="github-stat-card">
              <img
                id="github-stats-card"
                src={`https://github-readme-stats.vercel.app/api?username=mohdadil12345&theme=${isLight ? 'default' : 'tokyonight'}&hide_border=true&include_all_commits=true&count_private=true&bg_color=${isLight ? 'faf8f5' : '1a1a2e'}`}
                alt="GitHub Stats"
              />
            </div>
            
            <div className="github-stat-card">
              <img
                id="github-top-langs"
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=mohdadil12345&theme=${isLight ? 'default' : 'tokyonight'}&hide_border=true&include_all_commits=true&count_private=true&layout=compact&bg_color=${isLight ? 'faf8f5' : '1a1a2e'}`}
                alt="Top Languages"
              />
            </div>
            
            <div className="github-stat-card streak-card">
              <img
                id="github-streak-stats"
                src={`https://github-readme-streak-stats.herokuapp.com?user=mohdadil12345&theme=${isLight ? 'default' : 'tokyonight'}&hide_border=true&background=${isLight ? 'FAF8F5' : '1A1A2E'}`}
                alt="GitHub Streak"
              />
            </div>
          </div>
          
          <div className="github-highlights">
            <div className="highlight-card">
              <div className="highlight-icon">
                <FaCode />
              </div>
              <div className="highlight-content">
                <h4>Daily Commits</h4>
                <p>Consistent coding habits with regular contributions</p>
              </div>
            </div>
            
            <div className="highlight-card">
              <div className="highlight-icon">
                <FaFire />
              </div>
              <div className="highlight-content">
                <h4>Active Streaks</h4>
                <p>Maintaining coding momentum throughout the year</p>
              </div>
            </div>
            
            <div className="highlight-card">
              <div className="highlight-icon">
                <FaStar />
              </div>
              <div className="highlight-content">
                <h4>Open Source</h4>
                <p>Contributing to and learning from the community</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
