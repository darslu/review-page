<script>
    import emailjs from 'emailjs-com';
    import { writable } from 'svelte/store';
    
    let name = '';
    let email = '';
    let subject = '';
    let message = '';
    
    let errors = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    
    const notification = writable('');

    const validateForm = () => {
      errors.name = name ? '' : 'Name is required';
      errors.email = email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? '' : 'Valid email is required';
      errors.subject = subject ? '' : 'Subject is required';
      errors.message = message ? '' : 'Message is required';
      
      return !Object.values(errors).some(error => error); // If no errors, return true
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (validateForm()) {
        const templateParams = {
          name,
          email,
          subject,
          message
        };
  
        try {
          notification.set('Message sent successfully!');
          // Send email using EmailJS
          const result = await emailjs.send(
            'service_skekn7p',   // Service ID from EmailJS
            'template_it7p97r',  // Template ID from EmailJS
            templateParams,
            'C86-cphtERduq9auH'       // User ID from EmailJS
          );
          
          // Reset form
          name = '';
          email = '';
          subject = '';
          message = '';
        } catch (error) {
          console.error('Error sending email:', error);
          alert('Error sending email. Please try again later.');
        }
      } else {
        alert('Please fill out all fields correctly.');
      }
    };
  </script>
  
  <div class="contact-form-container">
    <div class="mb-6 text-center">
        <h2 class="text-2xl font-bold text-gray-800 mb-3">Got a question, suggestion, or just want to say hi?</h2>
        <p class="text-lg text-gray-600 mb-4">
          Whether you're curious about my product reviews or just want to chat about life (or why your socks never match), I'm here for it.
        </p>
        <p class="text-sm text-gray-500">I promise, no robot replies here—just real talk!</p>
      </div>
    <h2 class="text-2xl font-bold">Contact Us</h2>
    <form on:submit={handleSubmit} class="space-y-4 mt-6">
      <!-- Name Field -->
      <div class="form-group">
        <label for="name" class="block text-sm font-medium">Name</label>
        <input
          id="name"
          type="text"
          bind:value={name}
          class="input-field"
          placeholder="Enter your name"
        />
        {#if errors.name}
          <p class="text-red-500 text-sm">{errors.name}</p>
        {/if}
      </div>
  
      <!-- Email Field -->
      <div class="form-group">
        <label for="email" class="block text-sm font-medium">Email</label>
        <input
          id="email"
          type="email"
          bind:value={email}
          class="input-field"
          placeholder="Enter your email"
        />
        {#if errors.email}
          <p class="text-red-500 text-sm">{errors.email}</p>
        {/if}
      </div>
  
      <!-- Subject Field -->
      <div class="form-group">
        <label for="subject" class="block text-sm font-medium">Subject</label>
        <input
          id="subject"
          type="text"
          bind:value={subject}
          class="input-field"
          placeholder="Enter subject"
        />
        {#if errors.subject}
          <p class="text-red-500 text-sm">{errors.subject}</p>
        {/if}
      </div>
  
      <!-- Message Field -->
      <div class="form-group">
        <label for="message" class="block text-sm font-medium">Message</label>
        <textarea
          id="message"
          bind:value={message}
          class="input-field"
          placeholder="Enter your message"
          rows="4"
        ></textarea>
        {#if errors.message}
          <p class="text-red-500 text-sm">{errors.message}</p>
        {/if}
      </div>
  
      <!-- Submit Button -->
      <div>
        <button type="submit" class="submit-button">Submit</button>
      </div>
    </form>
  </div>
  
  <style>
    .contact-form-container {
      width: 100%;
      max-width: 500px;
      margin: auto;
      padding: 20px;
      background: #f9f9f9;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
  
    .form-group {
      margin-bottom: 1rem;
    }
  
    .input-field {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
      box-sizing: border-box;
    }
  
    .input-field:focus {
      outline: none;
      border-color: #4CAF50;
    }
  
    .submit-button {
      padding: 1rem 2rem;
      background-color: #4CAF50;
      color: white;
      font-weight: bold;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      width: 100%;
    }
  
    .submit-button:hover {
      background-color: #45a049;
    }
  </style>
  