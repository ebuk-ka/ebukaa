// src/components/Code.jsx
import { useEffect, useRef, useState } from "react";

const GITHUB_USER = "ebuk-ka";

export default function Code({ darkMode }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fade in on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Fetch GitHub data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USER}`),
          fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=6`),
        ]);
        if (!userRes.ok) throw new Error("User not found");
        const userData = await userRes.json();
        const reposData = await reposRes.json();
        setProfile(userData);
        setRepos(Array.isArray(reposData) ? reposData : []);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const dk = darkMode;

  // Language color map
  const langColor = {
    JavaScript: "#f7df1e", TypeScript: "#3178c6", HTML: "#e34f26",
    CSS: "#264de4", Python: "#3572A5", Vue: "#41b883", React: "#61dafb",
    null: "#64748b",
  };

  const cardStyle = {
    borderRadius: 16,
    border: dk ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(0,0,0,0.07)",
    background: dk ? "#0d1117" : "#ffffff",
    boxShadow: dk ? "0 20px 50px rgba(0,0,0,0.4)" : "0 10px 40px rgba(100,116,139,0.1)",
    transition: "all 0.5s",
  };

  return (
    <section
      id="code"
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 24px 80px",
        background: dk ? "#060912" : "#eef2ff",
        boxSizing: "border-box",
        overflow: "hidden",
        transition: "background 0.5s",
      }}
    >
      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: dk
          ? "radial-gradient(circle, rgba(196,106,60,0.12) 1px, transparent 1px)"
          : "radial-gradient(circle, rgba(196,106,60,0.08) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }} />

      {/* Glow orb */}
      <div style={{
        position: "absolute", bottom: "10%", left: "5%",
        width: 400, height: 400, borderRadius: "50%", pointerEvents: "none",
        background: dk
          ? "radial-gradient(circle, rgba(196,106,60,0.12) 0%, transparent 70%)"
          : "radial-gradient(circle, rgba(196,106,60,0.14) 0%, transparent 70%)",
        filter: "blur(50px)",
      }} />

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 10,
        width: "100%", maxWidth: 1000,
        display: "flex", flexDirection: "column", gap: 48,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}>

        {/* Header */}
        <div>
          <span style={{
            fontFamily: "monospace", fontSize: 11,
            color: "#C46A3C",
            letterSpacing: "0.15em", textTransform: "uppercase",
          }}>
            // my github
          </span>
          <h2 style={{
            fontFamily: "'Syne', 'Outfit', system-ui, sans-serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 900, margin: "8px 0 0",
            color: dk ? "#f8fafc" : "#0f172a",
            letterSpacing: "-0.02em",
            transition: "color 0.5s",
          }}>
            Code &{" "}
            <span style={{
              background: dk
                ? "linear-gradient(135deg, #C46A3C, #e39b76)"
                : "linear-gradient(135deg, #C46A3C, #e39b76)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              backgroundClip: "text", display: "inline-block", transform: "translateZ(0)",
            }}>Activity</span>
          </h2>
        </div>

        {/* Loading state */}
        {loading && (
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            gap: 12, padding: 60,
            fontFamily: "monospace", fontSize: 13,
            color: dk ? "#475569" : "#94a3b8",
          }}>
            <span style={{ animation: "spin 1s linear infinite", display: "inline-block" }}>⟳</span>
            Fetching GitHub data...
          </div>
        )}

        {/* Error state */}
        {error && !loading && (
          <div style={{
            ...cardStyle, padding: 32, textAlign: "center",
            fontFamily: "monospace", fontSize: 13,
            color: dk ? "#64748b" : "#94a3b8",
          }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>⚠️</div>
            Couldn't load GitHub data right now.{" "}
            <a
              href={`https://github.com/${GITHUB_USER}`}
              target="_blank" rel="noreferrer"
              style={{ color: "#C46A3C", textDecoration: "none" }}
            >
              View profile directly ↗
            </a>
          </div>
        )}

        {/* Loaded state */}
        {!loading && !error && profile && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>

            {/* Profile card + stats */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 20,
            }}>

              {/* Profile card */}
              <div style={{ ...cardStyle, padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <img
                    src={profile.avatar_url}
                    alt="GitHub avatar"
                    style={{
                      width: 56, height: 56, borderRadius: 14,
                      border: dk ? "2px solid rgba(196,106,60,0.3)" : "2px solid rgba(196,106,60,0.2)",
                    }}
                  />
                  <div>
                    <div style={{
                      fontFamily: "'Syne', system-ui", fontWeight: 800, fontSize: 16,
                      color: dk ? "#f8fafc" : "#0f172a", transition: "color 0.5s",
                    }}>
                      {profile.name || GITHUB_USER}
                    </div>
                    <a
                      href={profile.html_url}
                      target="_blank" rel="noreferrer"
                      style={{
                        fontFamily: "monospace", fontSize: 11,
                        color: "#C46A3C", textDecoration: "none",
                      }}
                    >
                      @{profile.login} ↗
                    </a>
                  </div>
                </div>

                {profile.bio && (
                  <p style={{
                    fontFamily: "monospace", fontSize: 12, lineHeight: 1.7, margin: 0,
                    color: dk ? "#64748b" : "#94a3b8", transition: "color 0.5s",
                  }}>
                    {profile.bio}
                  </p>
                )}

                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {profile.location && (
                    <span style={{
                      fontFamily: "monospace", fontSize: 11,
                      color: dk ? "#64748b" : "#94a3b8",
                      display: "flex", alignItems: "center", gap: 4,
                    }}>📍 {profile.location}</span>
                  )}
                  <span style={{
                    fontFamily: "monospace", fontSize: 11,
                    color: dk ? "#64748b" : "#94a3b8",
                    display: "flex", alignItems: "center", gap: 4,
                  }}>
                    📅 Joined {new Date(profile.created_at).getFullYear()}
                  </span>
                </div>
              </div>

              {/* Stats grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  { label: "Public Repos",  value: profile.public_repos, icon: "📦" },
                  { label: "Followers",     value: profile.followers,    icon: "👥" },
                  { label: "Following",     value: profile.following,    icon: "➕" },
                  { label: "Gists",         value: profile.public_gists, icon: "📝" },
                ].map((stat, i) => (
                  <div key={i} style={{
                    ...cardStyle, padding: 20,
                    display: "flex", flexDirection: "column",
                    alignItems: "center", justifyContent: "center",
                    gap: 6, textAlign: "center",
                  }}>
                    <span style={{ fontSize: 22 }}>{stat.icon}</span>
                    <span style={{
                      fontFamily: "'Syne', monospace", fontWeight: 900, fontSize: 24,
                      background: "linear-gradient(135deg, #C46A3C, #e39b76)",
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                      backgroundClip: "text", display: "inline-block", transform: "translateZ(0)",
                    }}>
                      {stat.value}
                    </span>
                    <span style={{
                      fontFamily: "monospace", fontSize: 10,
                      color: dk ? "#475569" : "#94a3b8",
                      textTransform: "uppercase", letterSpacing: "0.08em",
                    }}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* GitHub contrib image — always works, no auth needed */}
            <div style={{ ...cardStyle, padding: 24 }}>
              <span style={{
                fontFamily: "monospace", fontSize: 11,
                color: "#C46A3C",
                letterSpacing: "0.1em", textTransform: "uppercase",
                display: "block", marginBottom: 16,
              }}>
                // contribution activity
              </span>
              <div style={{ overflowX: "auto" }}>
                <img
                  src={`https://ghchart.rshah.org/${dk ? "C46A3C" : "C46A3C"}/${GITHUB_USER}`}
                  alt="GitHub contribution chart"
                  style={{ width: "100%", minWidth: 500, borderRadius: 8, display: "block" }}
                />
              </div>
              <div style={{
                marginTop: 12, textAlign: "right",
                fontFamily: "monospace", fontSize: 10,
                color: dk ? "#1e293b" : "#cbd5e1",
              }}>
                github.com/{GITHUB_USER}
              </div>
            </div>

            {/* Recent repos */}
            {repos.length > 0 && (
              <div>
                <span style={{
                  fontFamily: "monospace", fontSize: 11,
                  color: "#C46A3C",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  display: "block", marginBottom: 16,
                }}>
                  // recent repositories
                </span>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                  gap: 16,
                }}>
                  {repos.map((repo) => (
                    <a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank" rel="noreferrer"
                      style={{
                        ...cardStyle,
                        padding: 20, textDecoration: "none",
                        display: "flex", flexDirection: "column", gap: 10,
                        transition: "all 0.3s",
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.transform = "translateY(-4px)";
                        e.currentTarget.style.borderColor = dk ? "rgba(196,106,60,0.2)" : "rgba(196,106,60,0.2)";
                        e.currentTarget.style.boxShadow = dk
                          ? "0 20px 40px rgba(0,0,0,0.5)"
                          : "0 16px 40px rgba(100,116,139,0.18)";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.borderColor = dk ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.07)";
                        e.currentTarget.style.boxShadow = dk ? "0 20px 50px rgba(0,0,0,0.4)" : "0 10px 40px rgba(100,116,139,0.1)";
                      }}
                    >
                      {/* Repo name */}
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <span style={{
                          fontFamily: "monospace", fontWeight: 700, fontSize: 13,
                          color: dk ? "#f1f5f9" : "#0f172a",
                          transition: "color 0.5s",
                          overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                          maxWidth: "85%",
                        }}>
                          📁 {repo.name}
                        </span>
                        <span style={{ fontSize: 12, color: dk ? "#475569" : "#94a3b8" }}>↗</span>
                      </div>

                      {/* Description */}
                      <p style={{
                        fontFamily: "monospace", fontSize: 11, lineHeight: 1.6, margin: 0,
                        color: dk ? "#64748b" : "#94a3b8",
                        display: "-webkit-box", WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical", overflow: "hidden",
                        minHeight: 36,
                      }}>
                        {repo.description || "No description yet."}
                      </p>

                      {/* Footer */}
                      <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: "auto" }}>
                        {repo.language && (
                          <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                            <span style={{
                              width: 8, height: 8, borderRadius: "50%",
                              background: langColor[repo.language] || "#64748b",
                              flexShrink: 0,
                            }} />
                            <span style={{ fontFamily: "monospace", fontSize: 10, color: dk ? "#64748b" : "#94a3b8" }}>
                              {repo.language}
                            </span>
                          </span>
                        )}
                        <span style={{ fontFamily: "monospace", fontSize: 10, color: dk ? "#475569" : "#cbd5e1" }}>
                          ⭐ {repo.stargazers_count}
                        </span>
                        <span style={{ fontFamily: "monospace", fontSize: 10, color: dk ? "#475569" : "#cbd5e1" }}>
                          🍴 {repo.forks_count}
                        </span>
                        <span style={{
                          marginLeft: "auto", fontFamily: "monospace", fontSize: 9,
                          color: dk ? "#334155" : "#cbd5e1",
                        }}>
                          {new Date(repo.updated_at).toLocaleDateString("en-GB", { month: "short", year: "numeric" })}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* View all link */}
            <div style={{ textAlign: "center" }}>
              <a
                href={`https://github.com/${GITHUB_USER}`}
                target="_blank" rel="noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "12px 28px", borderRadius: 10,
                  fontFamily: "monospace", fontSize: 13, fontWeight: 700,
                  textDecoration: "none",
                  border: "1px solid rgba(196,106,60,0.25)",
                  color: "#C46A3C",
                  background: "transparent", transition: "all 0.3s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(196,106,60,0.08)";
                  e.currentTarget.style.transform = "scale(1.04)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                View all repositories on GitHub ↗
              </a>
            </div>

          </div>
        )}
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}
