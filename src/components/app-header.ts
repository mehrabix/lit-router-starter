import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('app-header')
export class AppHeader extends LitElement {
  isMenuOpen = false;

  static styles = css`
    header {
      background: white;
      border-bottom: 1px solid #e5e7eb;
      position: sticky;
      top: 0;
      z-index: 50;
      backdrop-filter: blur(8px);
      background-color: rgba(255, 255, 255, 0.95);
    }

    nav {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 4rem;
    }

    .logo {
      font-size: 1.25rem;
      font-weight: 700;
      text-decoration: none;
      color: #111827;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .logo-icon {
      width: 2rem;
      height: 2rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
    }

    .nav-links {
      display: flex;
      gap: 0;
      list-style: none;
      margin: 0;
      padding: 0;
      align-items: center;
    }

    .nav-links a {
      color: #6b7280;
      text-decoration: none;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;
      transition: all 0.2s ease;
      font-weight: 500;
      position: relative;
    }

    .nav-links a:hover {
      color: #111827;
      background-color: #f9fafb;
    }

    .nav-links a.active {
      color: #667eea;
      background-color: #f0f4ff;
    }

    .mobile-menu-button {
      display: none;
      background: none;
      border: none;
      padding: 0.5rem;
      cursor: pointer;
      border-radius: 0.375rem;
      color: #6b7280;
    }

    .mobile-menu-button:hover {
      background-color: #f9fafb;
      color: #111827;
    }

    .mobile-menu {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      border-top: 1px solid #e5e7eb;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
      padding: 1rem;
    }

    .mobile-menu.open {
      display: block;
    }

    .mobile-menu a {
      display: block;
      padding: 0.75rem 1rem;
      color: #6b7280;
      text-decoration: none;
      border-radius: 0.375rem;
      transition: all 0.2s ease;
      font-weight: 500;
    }

    .mobile-menu a:hover {
      color: #111827;
      background-color: #f9fafb;
    }

    .mobile-menu a.active {
      color: #667eea;
      background-color: #f0f4ff;
    }

    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }

      .mobile-menu-button {
        display: block;
      }

      nav {
        padding: 0 1rem;
      }
    }

    @media (min-width: 769px) {
      .mobile-menu {
        display: none !important;
      }
    }
  `;

  private toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  render() {
    return html`
      <header>
        <nav>
          <a href="/" class="logo" >
            <div class="logo-icon">A</div>
            <span>My SPA App</span>
          </a>
          
          <ul class="nav-links">
            <li>
              <a href="/" >
                Home
              </a>
            </li>
            <li>
              <a href="/about">
                About
              </a>
            </li>
            <li>
              <a href="/contact">
                Contact
              </a>
            </li>
          </ul>

          <button class="mobile-menu-button" @click=${this.toggleMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              ${this.isMenuOpen
        ? html`<path d="M18 6L6 18M6 6l12 12"/>`
        : html`<path d="M3 12h18M3 6h18M3 18h18"/>`
      }
            </svg>
          </button>
        </nav>

        <div class="mobile-menu ${this.isMenuOpen ? 'open' : ''}">
          <a href="/" >
            Home
          </a>
          <a href="/about" >
            About
          </a>
          <a href="/contact">
            Contact
          </a>
        </div>
      </header>
    `;
  }
} 