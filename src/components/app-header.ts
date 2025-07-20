import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-header')
export class AppHeader extends LitElement {

  static styles = css`
    header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 1rem 0;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      text-decoration: none;
      color: white;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .nav-links a {
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: background-color 0.3s ease;
    }

    .nav-links a:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .nav-links a.active {
      background-color: rgba(255, 255, 255, 0.2);
    }
  `;

  private handleNavigation(path: string, event: Event) {
    event.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  render() {
    return html`
      <header>
        <nav>
          <a href="/" class="logo" @click=${(e: Event) => this.handleNavigation('/', e)}>
            My SPA App
          </a>
          <ul class="nav-links">
            <li>
              <a href="/" @click=${(e: Event) => this.handleNavigation('/', e)}>
                Home
              </a>
            </li>
            <li>
              <a href="/about" @click=${(e: Event) => this.handleNavigation('/about', e)}>
                About
              </a>
            </li>
            <li>
              <a href="/contact" @click=${(e: Event) => this.handleNavigation('/contact', e)}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    `;
  }
} 