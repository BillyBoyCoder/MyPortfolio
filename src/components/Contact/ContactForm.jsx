import { useState, useRef } from 'react';
import {
  Box,
  TextField,
  Button,
  Alert,
  CircularProgress,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';

// EmailJS credentials - user needs to set these up
const SERVICE_ID = 'YOUR_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

const ContactForm = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      // Check if EmailJS is configured
      if (SERVICE_ID === 'YOUR_SERVICE_ID') {
        // Demo mode - simulate success
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setStatus({
          type: 'success',
          message: 'Thank you for your message! I will get back to you soon.',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Real EmailJS integration
        await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
        setStatus({
          type: 'success',
          message: 'Thank you for your message! I will get back to you soon.',
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email me directly.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="form"
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <TextField
        name="name"
        label="Name"
        value={formData.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
        required
        fullWidth
        disabled={loading}
      />

      <TextField
        name="email"
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        required
        fullWidth
        disabled={loading}
      />

      <TextField
        name="message"
        label="Message"
        value={formData.message}
        onChange={handleChange}
        error={!!errors.message}
        helperText={errors.message}
        required
        multiline
        rows={4}
        fullWidth
        disabled={loading}
      />

      {status.message && (
        <Alert severity={status.type} sx={{ mt: 1 }}>
          {status.message}
        </Alert>
      )}

      <Button
        type="submit"
        variant="contained"
        size="large"
        disabled={loading}
        endIcon={loading ? <CircularProgress size={20} /> : <SendIcon />}
        sx={{ mt: 1, alignSelf: 'flex-start' }}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </Button>
    </Box>
  );
};

export default ContactForm;
