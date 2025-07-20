import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('home-page')
export class HomePage extends LitElement {
  static styles = css`
    .hero {
      text-align: center;
      padding: 4rem 0;
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      border-radius: 12px;
      margin-bottom: 3rem;
    }

    .hero h1 {
      font-size: 3rem;
      color: #2d3748;
      margin-bottom: 1rem;
      font-weight: 700;
    }

    .hero p {
      font-size: 1.25rem;
      color: #4a5568;
      max-width: 600px;
      margin: 0 auto 2rem;
      line-height: 1.6;
    }

    .cta-button {
      display: inline-block;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 1rem 2rem;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
    }

    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }

    .feature-card {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .feature-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }

    .feature-card h3 {
      color: #2d3748;
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }

    .feature-card p {
      color: #4a5568;
      line-height: 1.6;
    }

    .icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      display: block;
    }
  `;

  render() {
    return html`
      <div class="hero">
        <h1>Welcome to Your SPA</h1>
        <p>
          A modern Single Page Application built with Lit, Rspack, TypeScript, and pnpm.
          Experience fast development and excellent performance.
        </p>
        <a href="/about" class="cta-button">Learn More</a>
      </div>

      <div class="features">
        <div class="feature-card">
          <span class="icon">⚡</span>
          <h3>Fast & Lightweight</h3>
          <p>
            Built with Rspack for lightning-fast builds and Lit for efficient web components.
            Your app loads quickly and runs smoothly.
          </p>
        </div>

        <div class="feature-card">
          <span class="icon">🔧</span>
          <h3>TypeScript Ready</h3>
          <p>
            Full TypeScript support with strict type checking. Catch errors early and
            enjoy better developer experience with IntelliSense.
          </p>
        </div>

        <div class="feature-card">
          <span class="icon">🎨</span>
          <h3>Modern UI</h3>
          <p>
            Beautiful, responsive design with modern CSS features. Create stunning
            user interfaces with ease using Lit's powerful templating system.
          </p>
        </div>
      </div>
    `;
  }
} 