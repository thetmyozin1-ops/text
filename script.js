:root {
  --bg: #0d0b10;
  --bg-soft: rgba(15, 14, 19, 0.64);
  --panel: rgba(255, 255, 255, 0.12);
  --panel-strong: rgba(255, 255, 255, 0.18);
  --line: rgba(255, 255, 255, 0.16);
  --text: #f5f1ee;
  --text-soft: rgba(245, 241, 238, 0.8);
  --text-dark: #201c1e;
  --blush: #e8d7c9;
  --sand: #d7bba3;
  --accent: #f4efe8;
  --shadow: rgba(0, 0, 0, 0.18);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: "Manrope", sans-serif;
  background: linear-gradient(180deg, #130f13 0%, #f5efe9 100%);
  color: var(--text);
}

img {
  display: block;
  max-width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input {
  font: inherit;
}

button {
  cursor: pointer;
}

.page-shell {
  width: min(1400px, calc(100% - 32px));
  margin: 18px auto 40px;
}

.glass-panel {
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.18);
}

.topbar {
  position: sticky;
  top: 18px;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 26px;
  border-radius: 22px;
  background: rgba(11, 11, 14, 0.2);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.brand-mark {
  display: inline-grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 0.8rem;
}

.brand-text {
  font-size: 0.8rem;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 28px;
  font-size: 0.92rem;
  color: var(--text-soft);
}

.main-nav a {
  transition: opacity 0.2s ease;
}

.main-nav a:hover,
.main-nav a:focus-visible {
  opacity: 1;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon-button,
.primary-btn,
.secondary-btn {
  border: 0;
  border-radius: 999px;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
}

.icon-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 42px;
  height: 42px;
  padding: 0;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: var(--text);
}

.icon-button svg {
  width: 18px;
  height: 18px;
  fill: currentColor;
}

.cart-button {
  width: auto;
  padding: 0 18px;
  gap: 8px;
  font-weight: 600;
}

.primary-btn,
.secondary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  padding: 0 22px;
  font-size: 0.94rem;
  font-weight: 700;
}

.primary-btn {
  background: rgba(255, 255, 255, 0.92);
  color: var(--bg);
  box-shadow: 0 14px 30px rgba(255, 255, 255, 0.18);
}

.secondary-btn {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: var(--text);
}

.icon-button:hover,
.primary-btn:hover,
.secondary-btn:hover,
.menu-toggle:hover {
  transform: translateY(-1px);
}

.menu-toggle {
  display: none;
  width: 42px;
  height: 42px;
  padding: 0;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 50%;
}

.menu-toggle span {
  display: block;
  width: 18px;
  height: 2px;
  margin: 4px auto;
  background: var(--text);
  border-radius: 999px;
}

.hero {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 760px;
  margin-top: 18px;
  border-radius: 26px;
  overflow: hidden;
  isolation: isolate;
}

.hero-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.8) brightness(0.7) contrast(1.08);
  transform: scale(1.04);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(16, 14, 17, 0.7) 0%, rgba(16, 14, 17, 0.34) 40%, rgba(16, 14, 17, 0.56) 100%);
}

.hero-content,
.floating-card {
  position: relative;
  z-index: 1;
}

.hero-content {
  width: min(680px, calc(100% - 48px));
  margin-right: auto;
  padding: 120px 0 80px 80px;
}

.eyebrow {
  margin: 0 0 18px;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
}

.eyebrow.dark {
  color: rgba(32, 28, 30, 0.72);
}

.hero h1 {
  margin: 0;
  max-width: 500px;
  font-size: clamp(3.3rem, 6vw, 6rem);
  line-height: 0.95;
  letter-spacing: -0.08em;
}

.hero-copy {
  margin: 22px 0 0;
  max-width: 520px;
  color: var(--text-soft);
  font-size: 1.08rem;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  margin-top: 28px;
}

.hero-metrics {
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  margin-top: 38px;
}

.hero-metrics div {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.hero-metrics strong {
  font-size: clamp(1.4rem, 2vw, 2.1rem);
  line-height: 1;
}

.hero-metrics span {
  color: var(--text-soft);
  font-size: 0.8rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.floating-card {
  position: absolute;
  right: 80px;
  bottom: 64px;
  width: min(360px, calc(100% - 52px));
  padding: 18px 18px 14px;
  border-radius: 24px;
  background: rgba(20, 17, 21, 0.34);
}

.mini-label {
  color: rgba(255, 255, 255, 0.88);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.product-preview {
  margin-top: 12px;
  overflow: hidden;
  border-radius: 18px;
}

.product-preview img {
  width: 100%;
  height: 260px;
  object-fit: cover;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 16px;
  margin-top: 14px;
}

.card-meta p {
  margin: 0;
  font-size: 1.12rem;
  font-weight: 700;
}

.card-meta span {
  display: block;
  margin-top: 5px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.84rem;
}

.card-meta strong {
  font-size: 1.1rem;
}

.featured,
.products,
.story,
.newsletter {
  margin-top: 80px;
}

.section-head {
  margin-bottom: 26px;
}

.section-head h2,
.story-copy h2,
.newsletter h2 {
  margin: 0;
  color: var(--text-dark);
  font-size: clamp(2.1rem, 4vw, 3.3rem);
  line-height: 1.08;
  letter-spacing: -0.06em;
}

.split-head {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 24px;
}

.text-link {
  color: var(--text-dark);
  font-weight: 700;
  opacity: 0.8;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.feature-card {
  padding: 28px 24px 26px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.18);
  color: var(--text-dark);
}

.feature-card span {
  display: inline-block;
  margin-bottom: 26px;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.18em;
}

.feature-card h3 {
  margin: 0 0 10px;
  font-size: 1.7rem;
  letter-spacing: -0.04em;
}

.feature-card p {
  margin: 0;
  color: rgba(32, 28, 30, 0.75);
  line-height: 1.8;
}

.products {
  color: var(--text-dark);
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
}

.product-item {
  overflow: hidden;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.16);
  border: 1px solid rgba(32, 28, 30, 0.08);
  box-shadow: 0 18px 36px rgba(20, 15, 15, 0.06);
}

.product-image {
  height: 390px;
  background-size: cover;
  background-position: center;
}

.image-one {
  background-image: url("https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80");
}

.image-two {
  background-image: url("https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80");
}

.image-three {
  background-image: url("https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80");
}

.image-four {
  background-image: url("https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80");
}

.product-info {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 12px;
  padding: 18px 18px 20px;
}

.product-info h3 {
  margin: 0;
  font-size: 1.2rem;
}

.product-info p {
  margin: 6px 0 0;
  color: rgba(32, 28, 30, 0.7);
}

.product-info strong {
  font-size: 1.04rem;
}

.story {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 28px;
  align-items: center;
}

.story-visual img {
  width: 100%;
  height: 620px;
  object-fit: cover;
  border-radius: 28px;
  box-shadow: 0 24px 48px rgba(17, 15, 17, 0.18);
}

.story-copy {
  padding: 54px 42px;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.12);
  color: var(--text-dark);
}

.story-copy p {
  color: rgba(32, 28, 30, 0.76);
  line-height: 1.8;
}

.story-copy ul {
  margin: 22px 0 28px;
  padding-left: 18px;
  line-height: 2;
  color: rgba(32, 28, 30, 0.82);
}

.newsletter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 34px 40px;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.18);
  color: var(--text-dark);
}

.signup-form {
  display: flex;
  align-items: center;
  gap: 12px;
  width: min(520px, 100%);
}

.signup-form input {
  width: 100%;
  height: 54px;
  border: 1px solid rgba(32, 28, 30, 0.12);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.42);
  padding: 0 18px;
  color: var(--text-dark);
  outline: none;
}

.signup-form input::placeholder {
  color: rgba(32, 28, 30, 0.5);
}

.site-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 80px;
  padding: 18px 4px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.82);
}

.footer-brand,
.footer-links {
  display: flex;
  align-items: center;
  gap: 14px;
}

.footer-brand {
  font-weight: 700;
}

.footer-links {
  flex-wrap: wrap;
  justify-content: center;
  color: rgba(255, 255, 255, 0.7);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 1080px) {
  .product-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .story {
    grid-template-columns: 1fr;
  }

  .newsletter {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 820px) {
  .topbar {
    padding: 14px 18px;
  }

  .main-nav {
    position: absolute;
    top: calc(100% + 12px);
    left: 0;
    right: 0;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    padding: 18px 20px 20px;
    border-radius: 18px;
    background: rgba(14, 12, 15, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.14);
  }

  .main-nav.is-open {
    display: flex;
  }

  .menu-toggle {
    display: block;
  }

  .hero {
    min-height: 700px;
  }

  .hero-content {
    padding: 92px 22px 110px;
  }

  .hero h1 {
    max-width: 420px;
  }

  .floating-card {
    right: 22px;
    bottom: 22px;
  }

  .feature-grid,
  .product-grid {
    grid-template-columns: 1fr;
  }

  .split-head,
  .site-footer {
    flex-direction: column;
    align-items: flex-start;
  }

  .signup-form {
    width: 100%;
    flex-direction: column;
    align-items: stretch;
  }
}

@media (max-width: 560px) {
  .page-shell {
    width: min(100% - 18px, 1400px);
  }

  .brand-text {
    font-size: 0.72rem;
  }

  .hero-metrics {
    gap: 20px;
  }

  .hero-metrics div {
    min-width: 110px;
  }

  .floating-card {
    position: static;
    margin: 0 24px 24px;
    width: auto;
  }

  .product-preview img {
    height: 220px;
  }
}
