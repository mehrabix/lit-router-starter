import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@lit-labs/router';

import './components/app-header.ts';
import './components/app-footer.ts';
import './pages/home-page.ts';
import './pages/about-page.ts';
import './pages/contact-page.ts';

@customElement('app-main')
export class AppMain extends LitElement {
  private router = new Router(this, [
    {
      path: '/',
      render: () => html`<home-page></home-page>`
    },
    {
      path: '/about',
      render: () => html`<about-page></about-page>`
    },
    {
      path: '/contact',
      render: () => html`<contact-page></contact-page>`
    }
  ]);

  static styles = css`
    :host {
      display: block;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    main {
      flex: 1;
      padding: 20px 0;
    }
  `;

  render() {
    return html`
      <div class="container">
        <app-header></app-header>
        <main>
          ${this.router.outlet()}
        </main>
        <app-footer></app-footer>
      </div>
    `;
  }
}

// Initialize the app
const app = document.createElement('app-main');
document.body.appendChild(app); 