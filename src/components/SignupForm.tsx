import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { SignupFormData } from '../types';

interface SignupFormProps {
  onSubmit: (data: SignupFormData) => Promise<void>;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<SignupFormData>({
    businessName: '',
    location: '',
    contactInfo: '',
  });
  
  const [errors, setErrors] = useState<Partial<SignupFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof SignupFormData]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<SignupFormData> = {};
    
    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business name is required';
    }
    
    if (!formData.location.trim()) {
      newErrors.location = 'Location is required';
    }
    
    if (!formData.contactInfo.trim()) {
      newErrors.contactInfo = 'Contact information is required';
    } else if (
      !formData.contactInfo.includes('@') && 
      !formData.contactInfo.startsWith('@')
    ) {
      newErrors.contactInfo = 'Please enter a valid email or social handle';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      await onSubmit(formData);
      setSubmitStatus('success');
      setSubmitMessage('Thank you! We will be in touch shortly.');
      // Reset form
      setFormData({
        businessName: '',
        location: '',
        contactInfo: '',
      });
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form 
      className="bg-white shadow-lg rounded-xl p-6 md:p-8 max-w-md w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
    >
      {submitStatus === 'idle' ? (
        <>
          <div className="mb-4">
            <label htmlFor="businessName">Business Name</label>
            <input
              id="businessName"
              name="businessName"
              type="text"
              value={formData.businessName}
              onChange={handleChange}
              disabled={isSubmitting}
              className={errors.businessName ? 'border-error-500' : ''}
            />
            {errors.businessName && (
              <p className="text-error-500 text-sm mt-1">{errors.businessName}</p>
            )}
          </div>
          
          <div className="mb-4">
            <label htmlFor="location">Location</label>
            <input
              id="location"
              name="location"
              type="text"
              value={formData.location}
              onChange={handleChange}
              disabled={isSubmitting}
              className={errors.location ? 'border-error-500' : ''}
            />
            {errors.location && (
              <p className="text-error-500 text-sm mt-1">{errors.location}</p>
            )}
          </div>
          
          <div className="mb-6">
            <label htmlFor="contactInfo">Email or Social Media Handle</label>
            <input
              id="contactInfo"
              name="contactInfo"
              type="text"
              value={formData.contactInfo}
              onChange={handleChange}
              disabled={isSubmitting}
              className={errors.contactInfo ? 'border-error-500' : ''}
              placeholder="email@example.com or @username"
            />
            {errors.contactInfo && (
              <p className="text-error-500 text-sm mt-1">{errors.contactInfo}</p>
            )}
          </div>
          
          <button 
            type="submit" 
            className="btn btn-primary w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <Loader2 className="animate-spin mr-2" size={18} />
                Submitting...
              </span>
            ) : 'Get Started'}
          </button>
        </>
      ) : (
        <div className="text-center py-8">
          {submitStatus === 'success' ? (
            <div className="flex flex-col items-center">
              <CheckCircle2 className="text-success-500 w-16 h-16 mb-4" />
              <h3 className="text-xl font-medium mb-2">Success!</h3>
              <p>{submitMessage}</p>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <AlertCircle className="text-error-500 w-16 h-16 mb-4" />
              <h3 className="text-xl font-medium mb-2">Something went wrong</h3>
              <p>{submitMessage}</p>
              <button 
                onClick={() => setSubmitStatus('idle')} 
                className="btn btn-secondary mt-4"
              >
                Try Again
              </button>
            </div>
          )}
        </div>
      )}
    </motion.form>
  );
};

export default SignupForm;