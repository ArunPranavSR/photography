import React, { useState } from 'react';
import { Mail, Instagram, Twitter, Send, AlertCircle, Loader2 } from 'lucide-react';

export const About: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: string, value: string) => {
    let error = '';
    switch (name) {
      case 'name':
        if (value.trim().length < 2) error = 'Name must be at least 2 characters';
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) error = 'Please enter a valid email address';
        break;
      case 'message':
        if (value.trim().length < 10) error = 'Message should be at least 10 characters';
        break;
      default:
        break;
    }
    return error;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormState(prev => ({ ...prev, [id]: value }));
    
    // Clear error when user starts typing if it was previously invalid
    if (errors[id as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    const error = validateField(id, value);
    setErrors(prev => ({ ...prev, [id]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = {
      name: validateField('name', formState.name),
      email: validateField('email', formState.email),
      message: validateField('message', formState.message),
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(error => error !== '');
    if (!hasErrors) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', formState);
        alert('Message sent successfully!');
        setFormState({ name: '', email: '', message: '' });
        setErrors({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      }, 2000); // Increased time slightly to see the loader clearly
    }
  };

  return (
    <section className="w-full h-screen snap-start bg-stone-custom text-text-dark flex flex-col px-6 py-6 md:px-10 md:py-8 lg:px-14 lg:py-10">
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center min-h-0">
        
        {/* Profile Image Column */}
        <div className="lg:col-span-5 h-[30vh] lg:h-full relative group shrink-0 transition-all duration-1000 ease-out hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] rounded-[2.5rem]">
          <div className="w-full h-full overflow-hidden rounded-[2.5rem]">
            <img 
              src="https://images.unsplash.com/photo-1556103255-4443dbae8e5a?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Kenjo Sato Profile" 
              className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-[#1a1a1a] text-white p-6 rounded-2xl hidden xl:block shadow-xl z-10">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-1">Based In</p>
            <p className="text-xl font-medium">Tokyo, JP</p>
          </div>
        </div>

        {/* Bio Content & Form Column */}
        <div className="lg:col-span-7 flex flex-col h-full overflow-y-auto no-scrollbar py-4">
          <div className="max-w-2xl">
            <h2 className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-neutral-500 mb-4 cursor-default hover:text-black transition-all duration-500">
              The Visionary Behind the Lens
            </h2>
            
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[0.9] mb-6 cursor-default hover:text-black hover:drop-shadow-[0_0_1px_rgba(0,0,0,0.3)] transition-all duration-500">
              Capturing the invisible threads that connect us.
            </h3>
            
            <div className="space-y-4 text-sm md:text-base leading-relaxed text-neutral-800/90 font-medium mb-8">
              <p className="relative group/bio inline cursor-default transition-colors duration-500 hover:text-black">
                With over a decade of experience navigating the hidden corners of Tokyo and the vast landscapes of Hokkaido, Kenjo Sato has established a signature style that balances raw honesty with ethereal beauty.
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black/20 transition-all duration-500 group-hover/bio:w-full"></span>
              </p>
            </div>

            {/* Socials & Contact Info */}
            <div className="flex flex-wrap gap-6 items-center mb-8 pb-8 border-b border-black/10">
              <div className="flex gap-4">
                <a href="#" className="p-3 bg-black text-white rounded-full hover:bg-neutral-700 hover:scale-110 transition-all duration-300 ease-out shadow-sm hover:shadow-md">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="p-3 bg-black text-white rounded-full hover:bg-neutral-700 hover:scale-110 transition-all duration-300 ease-out shadow-sm hover:shadow-md">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="p-3 bg-black text-white rounded-full hover:bg-neutral-700 hover:scale-110 transition-all duration-300 ease-out shadow-sm hover:shadow-md">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
              
              <div className="flex flex-col group/email cursor-pointer">
                <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 transition-colors group-hover/email:text-black">Direct Contact</span>
                <span className="text-base font-bold border-b border-black leading-tight transition-all group-hover/email:border-b-2">hello@sato.co</span>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="flex justify-between items-end mb-2">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Send a Message</h4>
                {Object.values(errors).some(e => e) && (
                  <span className="text-[9px] text-red-600 font-bold uppercase tracking-wider flex items-center gap-1 animate-pulse">
                    <AlertCircle className="w-3 h-3" /> Please correct the errors below
                  </span>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className={`text-[9px] font-bold uppercase tracking-[0.15em] transition-colors ${errors.name ? 'text-red-600' : 'text-text-dark'}`}>
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="Enter your name"
                    className={`bg-transparent border-b py-2 focus:border-black outline-none text-sm transition-all placeholder:text-neutral-500 ${errors.name ? 'border-red-600 text-red-700' : 'border-black/20 focus:border-black'}`}
                  />
                  {errors.name && <span className="text-[9px] text-red-600 font-semibold mt-1 uppercase tracking-tighter">{errors.name}</span>}
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className={`text-[9px] font-bold uppercase tracking-[0.15em] transition-colors ${errors.email ? 'text-red-600' : 'text-text-dark'}`}>
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder="your@email.com"
                    className={`bg-transparent border-b py-2 focus:border-black outline-none text-sm transition-all placeholder:text-neutral-500 ${errors.email ? 'border-red-600 text-red-700' : 'border-black/20 focus:border-black'}`}
                  />
                  {errors.email && <span className="text-[9px] text-red-600 font-semibold mt-1 uppercase tracking-tighter">{errors.email}</span>}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="message" className={`text-[9px] font-bold uppercase tracking-[0.15em] transition-colors ${errors.message ? 'text-red-600' : 'text-text-dark'}`}>
                  Message
                </label>
                <textarea 
                  id="message"
                  rows={2}
                  value={formState.message}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  placeholder="What's on your mind?"
                  className={`bg-transparent border-b py-2 focus:border-black outline-none text-sm transition-all placeholder:text-neutral-500 resize-none ${errors.message ? 'border-red-600 text-red-700' : 'border-black/20 focus:border-black'}`}
                />
                {errors.message && <span className="text-[9px] text-red-600 font-semibold mt-1 uppercase tracking-tighter">{errors.message}</span>}
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className={`group relative flex items-center justify-center bg-[#1a1a1a] text-white px-10 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all min-h-[44px] min-w-[180px] ${isSubmitting ? 'opacity-80 cursor-not-allowed' : 'hover:bg-neutral-800 hover:scale-105 active:scale-95'}`}
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <div className="flex items-center gap-2">
                    Send Message
                    <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
