import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear error once user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
    }
    if (!formData.description.trim()) tempErrors.description = 'Please tell me what you need guidance with';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setSubmitError('');
      
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: formData.name,
            email: formData.email,
            message: formData.description,
            subject: `Mentorship & Career Inquiry from ${formData.name}`,
            from_name: 'Sheraz Portfolio'
          })
        });

        const result = await response.json();

        if (result.success) {
          setIsSubmitted(true);
          setFormData({ name: '', email: '', description: '' });
        } else {
          setSubmitError(result.message || 'Something went wrong. Please try again.');
        }
      } catch (err) {
        setSubmitError('Failed to send message. Please check your connection and try again.');
        console.error('Web3Forms Error:', err);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" className="contact-section section-white">
      <div className="container">
        <div className="contact-grid">
          {/* Left Column - Contact Details */}
          <div className="contact-info reveal-element">
            <h2 className="contact-title">Let's Accelerate Your Journey</h2>
            <p className="contact-desc">
              Whether you are a student preparing for your FYP, a fresh graduate seeking career direction, or a beginner looking for 1-on-1 mentorship on what, how, and why to learn in IT/CS—reach out and let's connect.
            </p>

            <div className="contact-details">
              {/* Email Address */}
              <a href="mailto:sherazakhtarmalik@gmail.com" className="contact-box">
                <div className="contact-box-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="contact-box-content">
                  <span className="contact-box-label">Email Me</span>
                  <span className="contact-box-value">sherazakhtarmalik@gmail.com</span>
                </div>
              </a>

              {/* WhatsApp Details */}
              <a href="https://wa.me/923331575264" target="_blank" rel="noopener noreferrer" className="contact-box">
                <div className="contact-box-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </div>
                <div className="contact-box-content">
                  <span className="contact-box-label">WhatsApp Me</span>
                  <span className="contact-box-value">+92 333 157 5264</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column - Submission Form */}
          <div className="contact-form-container reveal-element">
            {isSubmitted ? (
              <div className="contact-success-card">
                <div className="success-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 className="success-title">Thank You!</h3>
                <p className="success-text">
                  Thanks! I'll be in touch within 24 hours.
                </p>
                <button 
                  className="btn btn-outline-blue" 
                  style={{ marginTop: '24px' }}
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {/* Name Input */}
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="John Doe"
                    style={errors.name ? { borderBottomColor: '#EF4444' } : {}}
                  />
                  {errors.name && <span style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: '4px', display: 'block', textAlign: 'left' }}>{errors.name}</span>}
                </div>

                {/* Email Input */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="john@example.com"
                    style={errors.email ? { borderBottomColor: '#EF4444' } : {}}
                  />
                  {errors.email && <span style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: '4px', display: 'block', textAlign: 'left' }}>{errors.email}</span>}
                </div>

                {/* Project Description Input */}
                <div className="form-group">
                  <label htmlFor="description" className="form-label">Your Goals & Questions</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Share where you are in your journey (student, fresh graduate, or beginner), what you're working on, and where you need guidance..."
                    style={errors.description ? { borderBottomColor: '#EF4444' } : {}}
                  ></textarea>
                  {errors.description && <span style={{ color: '#EF4444', fontSize: '0.75rem', marginTop: '4px', display: 'block', textAlign: 'left' }}>{errors.description}</span>}
                </div>

                {/* Submission Error Message */}
                {submitError && (
                  <div style={{ color: '#EF4444', fontSize: '0.875rem', marginBottom: '16px', textAlign: 'left', fontWeight: '500' }}>
                    {submitError}
                  </div>
                )}

                {/* Submit button */}
                <button 
                  type="submit" 
                  className="btn btn-filled-orange" 
                  style={{ width: '100%' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Send Mentorship Inquiry'}
                </button>

                <p className="form-row-note">
                  I respond within 24 hours. Open for 1-on-1 mentorship, FYP consulting, and technical talks.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
