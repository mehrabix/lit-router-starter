import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-footer')
export class AppFooter extends LitElement {
  static styles = css`
    footer {
      background-color: #f8f9fa;
      color: #6c757d;
      padding: 2rem 0;
      margin-top: auto;
      border-top: 1px solid #e9ecef;
    }

    .footer-content {
      text-align: center;
    }

    .footer-content p {
      margin: 0;
      font-size: 0.9rem;
    }
  `;

  render() {
    return html`
      <footer>
        <div class="footer-content">
          <p>&copy; 2024 My SPA App. Built with Lit, Rspack, and TypeScript.</p>
        </div>
      </footer>
    `;
  }
} 