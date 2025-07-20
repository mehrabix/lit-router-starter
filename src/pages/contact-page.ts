import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('contact-page')
export class ContactPage extends LitElement {
  private formData = {
    name: '',
    email: '',
    message: ''
  };

  private isSubmitting = false;

  static styles = css`
    .contact-container {
      max-width: 800px;
      margin: 0 auto;
    }

    .contact-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .contact-header h1 {
      font-size: 2.5rem;
      color: #2d3748;
      margin-bottom: 1rem;
    }

    .contact-header p {
      font-size: 1.1rem;
      color: #4a5568;
      line-height: 1.6;
    }

    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: start;
    }

    .contact-form {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      color: #2d3748;
      font-weight: 600;
    }

    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
      font-size: 1rem;
      transition: border-color 0.3s ease;
    }

    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    .form-group textarea {
      resize: vertical;
      min-height: 120px;
    }

    .submit-button {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 1rem 2rem;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      width: 100%;
    }

    .submit-button:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
    }

    .submit-button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .contact-info {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .contact-info h2 {
      color: #2d3748;
      margin-bottom: 1.5rem;
      font-size: 1.8rem;
    }

    .info-item {
      display: flex;
      align-items: center;
      margin-bottom: 1.5rem;
      padding: 1rem;
      background: #f7fafc;
      border-radius: 8px;
    }

    .info-item .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      color: #667eea;
    }

    .info-item .content h3 {
      color: #2d3748;
      margin-bottom: 0.25rem;
      font-size: 1.1rem;
    }

    .info-item .content p {
      color: #4a5568;
      margin: 0;
    }

    @media (max-width: 768px) {
      .contact-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }
    }
  `;

  private handleInput(e: Event) {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    this.formData = {
      ...this.formData,
      [target.name]: target.value
    };
    this.requestUpdate();
  }

  private async handleSubmit(e: Event) {
    e.preventDefault();
    this.isSubmitting = true;
    this.requestUpdate();

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Reset form
    this.formData = { name: '', email: '', message: '' };
    this.isSubmitting = false;
    this.requestUpdate();

    // Show success message (in a real app, you'd handle this properly)
    alert('Thank you for your message! We\'ll get back to you soon.');
  }

  render() {
    return html`
      <div class="contact-container">
        <div class="contact-header">
          <h1>Get in Touch</h1>
          <p>
            Have questions or want to learn more? We'd love to hear from you.
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div class="contact-content">
          <div class="contact-form">
            <form @submit=${this.handleSubmit}>
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  .value=${this.formData.name}
                  @input=${this.handleInput}
                  required
                />
              </div>

              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  .value=${this.formData.email}
                  @input=${this.handleInput}
                  required
                />
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  .value=${this.formData.message}
                  @input=${this.handleInput}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                class="submit-button"
                ?disabled=${this.isSubmitting}
              >
                ${this.isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div class="contact-info">
            <h2>Contact Information</h2>
            
            <div class="info-item">
              <span class="icon">📍</span>
              <div class="content">
                <h3>Address</h3>
                <p>123 Web Street<br>Developer City, DC 12345</p>
              </div>
            </div>

            <div class="info-item">
              <span class="icon">📧</span>
              <div class="content">
                <h3>Email</h3>
                <p>hello@example.com</p>
              </div>
            </div>

            <div class="info-item">
              <span class="icon">📞</span>
              <div class="content">
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>

            <div class="info-item">
              <span class="icon">⏰</span>
              <div class="content">
                <h3>Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM<br>Saturday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
} 