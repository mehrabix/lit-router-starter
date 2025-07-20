import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('home-page')
export class HomePage extends LitElement {
  static styles = css`
    .hero {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 4rem 0;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
      opacity: 0.3;
    }

    .hero-content {
      position: relative;
      z-index: 1;
      max-width: 800px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .hero h1 {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 800;
      margin-bottom: 1.5rem;
      line-height: 1.1;
    }

    .hero p {
      font-size: clamp(1.125rem, 2vw, 1.25rem);
      margin-bottom: 2rem;
      opacity: 0.9;
      line-height: 1.6;
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .cta-button {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.875rem 1.75rem;
      border-radius: 0.5rem;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.2s ease;
      border: none;
      cursor: pointer;
      font-size: 1rem;
    }

    .cta-button.primary {
      background: white;
      color: #667eea;
    }

    .cta-button.primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }

    .cta-button.secondary {
      background: transparent;
      color: white;
      border: 2px solid rgba(255, 255, 255, 0.3);
    }

    .cta-button.secondary:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.5);
    }

    .features {
      padding: 5rem 0;
      background: white;
    }

    .features-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .features-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .features-header h2 {
      font-size: clamp(2rem, 4vw, 3rem);
      color: #111827;
      margin-bottom: 1rem;
      font-weight: 700;
    }

    .features-header p {
      font-size: 1.125rem;
      color: #6b7280;
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.6;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .feature-card {
      background: white;
      padding: 2rem;
      border-radius: 1rem;
      border: 1px solid #e5e7eb;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .feature-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }

    .feature-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      border-color: #d1d5db;
    }

    .feature-icon {
      width: 3rem;
      height: 3rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 0.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.5rem;
      font-size: 1.5rem;
      color: white;
    }

    .feature-card h3 {
      color: #111827;
      margin-bottom: 1rem;
      font-size: 1.25rem;
      font-weight: 600;
    }

    .feature-card p {
      color: #6b7280;
      line-height: 1.6;
      margin: 0;
    }

    .stats {
      background: #f8fafc;
      padding: 4rem 0;
      border-top: 1px solid #e5e7eb;
    }

    .stats-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      text-align: center;
    }

    .stat-item h3 {
      font-size: 2.5rem;
      font-weight: 800;
      color: #667eea;
      margin-bottom: 0.5rem;
    }

    .stat-item p {
      color: #6b7280;
      font-weight: 500;
    }

    @media (max-width: 768px) {
      .hero {
        padding: 3rem 0;
      }

      .cta-buttons {
        flex-direction: column;
        align-items: center;
      }

      .cta-button {
        width: 100%;
        max-width: 300px;
        justify-content: center;
      }

      .features {
        padding: 3rem 0;
      }

      .features-grid {
        grid-template-columns: 1fr;
      }

      .stats-container {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 480px) {
      .stats-container {
        grid-template-columns: 1fr;
      }
    }
  `;

  render() {
    return html`
      <div class="hero">
        <div class="hero-content">
          <h1>Build Amazing Web Apps</h1>
          <p>
            A modern Single Page Application showcasing the power of web components, 
            fast bundling, and type safety. Experience the future of web development.
          </p>
          <div class="cta-buttons">
            <a href="/about" class="cta-button primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
              Get Started
            </a>
            <a href="/contact" class="cta-button secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              Learn More
            </a>
          </div>
        </div>
      </div>

      <section class="features">
        <div class="features-container">
          <div class="features-header">
            <h2>Why Choose This Stack?</h2>
            <p>
              Built with modern technologies that provide excellent developer experience, 
              performance, and maintainability.
            </p>
          </div>

          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>
                Rspack's Rust-based architecture provides incredibly fast build times 
                and hot reload, making development a breeze.
              </p>
            </div>

            <div class="feature-card">
              <div class="feature-icon">🔧</div>
              <h3>Type Safe</h3>
              <p>
                Full TypeScript support with strict type checking helps catch errors 
                early and provides excellent IntelliSense support.
              </p>
            </div>

            <div class="feature-card">
              <div class="feature-icon">🎨</div>
              <h3>Modern UI</h3>
              <p>
                Beautiful, responsive design with modern CSS features and smooth 
                animations that work perfectly on all devices.
              </p>
            </div>

            <div class="feature-card">
              <div class="feature-icon">🚀</div>
              <h3>Web Components</h3>
              <p>
                Built with Lit for efficient, reusable web components that are 
                framework-agnostic and future-proof.
              </p>
            </div>

            <div class="feature-card">
              <div class="feature-icon">📱</div>
              <h3>Responsive</h3>
              <p>
                Fully responsive design that looks great on desktop, tablet, and 
                mobile devices with touch-friendly interactions.
              </p>
            </div>

            <div class="feature-card">
              <div class="feature-icon">⚙️</div>
              <h3>Developer Experience</h3>
              <p>
                Excellent tooling, hot reload, and modern development practices 
                that make building web apps enjoyable and efficient.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="stats">
        <div class="stats-container">
          <div class="stat-item">
            <h3>10x</h3>
            <p>Faster Builds</p>
          </div>
          <div class="stat-item">
            <h3>100%</h3>
            <p>Type Safe</p>
          </div>
          <div class="stat-item">
            <h3>0</h3>
            <p>Framework Lock-in</p>
          </div>
          <div class="stat-item">
            <h3>∞</h3>
            <p>Possibilities</p>
          </div>
        </div>
      </section>
    `;
  }
} 