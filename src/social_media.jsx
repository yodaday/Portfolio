import React from "react";
import "./social_media.css";

const socialMediaLinks = [
  { name: "Facebook", url: "https://www.facebook.com", icon: "📘" },
  { name: "Twitter", url: "https://www.twitter.com", icon: "🐦" },
  { name: "LinkedIn", url: "https://www.linkedin.com", icon: "🔗" },
  { name: "Instagram", url: "https://www.instagram.com", icon: "📸" },
];

const SocialMedia = () => {
  return (
    <div className="social-media-container">
      {socialMediaLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <span className="icon">{link.icon}</span> {link.name}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
