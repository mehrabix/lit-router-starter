import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('about-page')
export class AboutPage extends LitElement {
  static styles = css`
    .about-container {
      max-width: 800px;
      margin: 0 auto;
    }

    .about-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .about-header h1 {
      font-size: 2.5rem;
      color: #2d3748;
      margin-bottom: 1rem;
    }

    .about-header p {
      font-size: 1.1rem;
      color: #4a5568;
      line-height: 1.6;
    }

    .tech-stack {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      margin-bottom: 2rem;
    }

    .tech-stack h2 {
      color: #2d3748;
      margin-bottom: 1.5rem;
      font-size: 1.8rem;
    }

    .tech-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    .tech-item {
      padding: 1.5rem;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      background: #f7fafc;
    }

    .tech-item h3 {
      color: #2d3748;
      margin-bottom: 0.5rem;
      font-size: 1.2rem;
    }

    .tech-item p {
      color: #4a5568;
      font-size: 0.9rem;
      line-height: 1.5;
    }

    .description {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .description h2 {
      color: #2d3748;
      margin-bottom: 1rem;
      font-size: 1.8rem;
    }

    .description p {
      color: #4a5568;
      line-height: 1.7;
      margin-bottom: 1rem;
    }
  `;

  render() {
    return html`
      <div class="about-container">
        <div class="about-header">
          <h1>About This Application</h1>
          <p>
            A modern Single Page Application showcasing the power of web components
            and modern build tools.
          </p>
        </div>

        <div class="tech-stack">
          <h2>Technology Stack</h2>
          <div class="tech-grid">
            <div class="tech-item">
              <h3>Lit</h3>
              <p>
                A lightweight library for building web components with a simple,
                powerful API and excellent performance.
              </p>
            </div>
            <div class="tech-item">
              <h3>Rspack</h3>
              <p>
                A fast bundler written in Rust, providing lightning-fast build times
                and excellent developer experience.
              </p>
            </div>
            <div class="tech-item">
              <h3>TypeScript</h3>
              <p>
                Adds static typing to JavaScript, helping catch errors early and
                providing better tooling support.
              </p>
            </div>
            <div class="tech-item">
              <h3>pnpm</h3>
              <p>
                A fast, disk space efficient package manager that's a drop-in
                replacement for npm.
              </p>
            </div>
            <div class="tech-item">
              <h3>@lit-labs/router</h3>
              <p>
                The official Lit router for client-side routing, providing
                seamless navigation without page reloads and excellent integration.
              </p>
            </div>
          </div>
        </div>

        <div class="description">
          <h2>Why This Stack?</h2>
          <p>
            This technology combination provides an excellent foundation for modern
            web applications. Lit offers a simple yet powerful way to build web
            components, while Rspack ensures fast development cycles with its
            Rust-based architecture.
          </p>
          <p>
            TypeScript adds type safety and better developer experience, while pnpm
            provides efficient package management. Together, these tools create a
            development environment that's both productive and performant.
          </p>
          <p>
            The result is a fast, maintainable, and scalable application that
            leverages the best of modern web technologies.
          </p>
        </div>
      </div>
    `;
  }
} 