

// ---------- Utility ----------
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// ---------- About Me Section ----------
const aboutText = document.querySelector(".about-text");
if (aboutText) {
  // Dynamic colorful greeting
  const greeting = document.createElement("h3");
  greeting.innerHTML = "🎉 <span style='color:#ff4500'>Hello!</span> I'm <span style='color:#42a5f5'>Dechen Tshomo</span>!";
  greeting.style.textAlign = "center";
  greeting.style.fontWeight = "bold";
  greeting.style.marginBottom = "15px";
  greeting.style.fontSize = "1.7rem";
  aboutText.prepend(greeting);

  // Typing intro with emojis
  const intro = document.createElement("p");
  intro.classList.add("intro-text");
  aboutText.appendChild(intro);
  const introMsg = "✨ Welcome! Explore my skills, projects, and fun facts 🌟";
  let idx = 0;
  function typeIntro() {
    if (idx < introMsg.length) {
      intro.textContent += introMsg.charAt(idx);
      idx++;
      setTimeout(typeIntro, 60);
    }
  }
  typeIntro();

  // Fun Fact Button
  const funFacts = [
    "I love exploring fashion trends 👗",
    "Gaming is my favorite weekend activity 🎮",
    "I enjoy discovering new cafes ☕",
    "I want to travel the world someday 🌍",
    "My dream is to shop without worrying about price tags 💸"
  ];
  const factBtn = document.createElement("button");
  factBtn.textContent = "🎲 Fun Fact!";
  factBtn.style.cssText = "padding:10px 20px; margin-top:15px; border-radius:12px; cursor:pointer; background:linear-gradient(45deg,#ff8a65,#ff7043); color:white; font-weight:bold; transition:all 0.3s;";
  aboutText.appendChild(factBtn);

  factBtn.addEventListener("click", () => {
    const randomFact = funFacts[getRandomInt(funFacts.length)];
    alert(`💡 Fun Fact: ${randomFact}`);
  });

  factBtn.addEventListener("mouseover", () => factBtn.style.transform = "scale(1.1)");
  factBtn.addEventListener("mouseout", () => factBtn.style.transform = "scale(1)");

  // Floating & rotating profile image
  const aboutImg = document.querySelector(".about-image img");
  if (aboutImg) {
    aboutImg.addEventListener("mouseover", () => {
      aboutImg.style.transform = "scale(1.1) rotate(5deg)";
      aboutImg.style.boxShadow = "0 10px 25px rgba(0, 81, 255, 0.5)";
    });
    aboutImg.addEventListener("mouseout", () => {
      aboutImg.style.transform = "scale(1) rotate(0deg)";
      aboutImg.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
    });
  }

  // Confetti effect on About Me
  setInterval(() => {
    const confetti = document.createElement("div");
    confetti.textContent = "🎉";
    confetti.style.position = "absolute";
    confetti.style.left = `${Math.random() * window.innerWidth}px`;
    confetti.style.top = `0px`;
    confetti.style.fontSize = `${Math.random() * 20 + 15}px`;
    confetti.style.transition = "top 2s linear, opacity 2s";
    document.body.appendChild(confetti);
    setTimeout(() => {
      confetti.style.top = `${window.innerHeight}px`;
      confetti.style.opacity = 0;
    }, 50);
    setTimeout(() => confetti.remove(), 2100);
  }, 2000);
}

// ---------- Education Section ----------
const eduCards = document.querySelectorAll(".edu-page");
eduCards.forEach((card, idx) => {
  card.addEventListener("click", () => card.classList.toggle("highlighted"));
  card.addEventListener("mouseover", () => {
    card.style.transform = "scale(1.05) rotate(-2deg)";
    card.style.boxShadow = "0 12px 25px rgba(30, 255, 0, 0.6)";
  });
  card.addEventListener("mouseout", () => {
    card.style.transform = "scale(1) rotate(0deg)";
    card.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
  });

  // Tooltip
  const tooltip = document.createElement("span");
  tooltip.textContent = `📌 Click to highlight ${card.querySelector("p").textContent}`;
  tooltip.style.position = "absolute";
  tooltip.style.background = "#f1a7d0ff";
  tooltip.style.padding = "3px 8px";
  tooltip.style.borderRadius = "5px";
  tooltip.style.fontSize = "0.8rem";
  tooltip.style.color = "#333";
  tooltip.style.opacity = 0;
  tooltip.style.transition = "opacity 0.3s";
  card.appendChild(tooltip);

  card.addEventListener("mouseover", () => tooltip.style.opacity = 1);
  card.addEventListener("mouseout", () => tooltip.style.opacity = 0);
});

// ---------- Skills Section ----------
const skillItems = document.querySelectorAll(".skill-category li");
skillItems.forEach(item => {
  item.addEventListener("mouseover", () => {
    item.style.background = `linear-gradient(135deg,#${getRandomInt(16777215).toString(16)},#${getRandomInt(16777215).toString(16)})`;
    item.style.color = "white";
    item.style.transform = "scale(1.2)";
  });
  item.addEventListener("mouseout", () => {
    item.style.background = "linear-gradient(135deg, #ffcc80, #f7c06fff)";
    item.style.color = "#333";
    item.style.transform = "scale(1)";
  });
  item.addEventListener("click", () => alert(`💡 Skill Tip: Master ${item.textContent} by practicing daily!`));
});

// ---------- Projects Section ----------
const projectCards = document.querySelectorAll(".project-card, .card.project");
projectCards.forEach(card => {
  card.addEventListener("mouseover", () => {
    card.style.transform = "scale(1.08) rotate(-1deg)";
    card.style.boxShadow = "0 12px 25px rgba(0,0,0,0.35)";
    card.style.border = "2px solid #42a5f5";
  });
  card.addEventListener("mouseout", () => {
    card.style.transform = "scale(1) rotate(0deg)";
    card.style.boxShadow = "0 3px 10px rgba(0,0,0,0.1)";
    card.style.border = "none";
  });
  card.addEventListener("click", () => {
    alert("🚀 Project Preview: More details coming soon! 🌟");
  });
});

// ---------- Contact Section ----------
const contactForm = document.querySelector("form");
if (contactForm) {
  const inputs = contactForm.querySelectorAll("input, textarea");
  inputs.forEach(input => {
    input.addEventListener("focus", () => {
      input.style.borderColor = "#ff7043";
      input.style.boxShadow = "0 0 8px #ff7043";
    });
    input.addEventListener("blur", () => {
      input.style.borderColor = "#ccc";
      input.style.boxShadow = "none";
    });
  });
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("✅ Thank you! Your message was successfully sent 🌟");
    contactForm.reset();
  });
}

// ---------- Footer Section ----------
const footerTagline = document.querySelector(".footer-tagline");
if (footerTagline) {
  const tagline = footerTagline.textContent;
  footerTagline.textContent = "";
  let i = 0;
  function typeEffect() {
    if (i < tagline.length) {
      footerTagline.textContent += tagline.charAt(i);
      i++;
      setTimeout(typeEffect, 70);
    }
  }
  typeEffect();

  // Sparkle emojis
  setInterval(() => {
    const sparkle = document.createElement("span");
    sparkle.textContent = "✨";
    sparkle.style.position = "absolute";
    sparkle.style.left = `${Math.random() * window.innerWidth}px`;
    sparkle.style.top = `${window.innerHeight - 40}px`;
    sparkle.style.fontSize = `${Math.random() * 20 + 10}px`;
    sparkle.style.opacity = 0.8;
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1500);
  }, 2000);
}

// ---------- Navigation ----------
const navLinks = document.querySelectorAll(".nav-link");
const pagesContainer = document.getElementById("pages-container");
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const index = link.getAttribute("data-index");
    pagesContainer.style.transform = `translateX(-${index * 100}vw)`;
    pagesContainer.style.transition = "transform 0.6s ease-in-out";

    // Active link highlight
    navLinks.forEach(l => l.style.color = "#333");
    link.style.color = "#ff4500";
  });
});

// ---------- Highlighted Cards Style ----------
const style = document.createElement("style");
style.innerHTML = `
  .highlighted {
    background: #ffd54faa !important;
    box-shadow: 0 0 15px #ff9800;
    transform: scale(1.05);
    transition: all 0.3s ease;
  }
`;
document.head.appendChild(style);
