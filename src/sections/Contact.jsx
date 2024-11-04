import emailjs from '@emailjs/browser';
import { Suspense, useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';
import { useMediaQuery } from 'react-responsive';
import { Pikachu } from '../components/Pikachu.jsx';
import { Canvas } from '@react-three/fiber';
import { Center } from '@react-three/drei';


const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Jiv Tuban',
          from_email: form.email,
          to_email: 'jivtuban14@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        },
      );
  };
  const isWideScreen = useMediaQuery({ minWidth: 1024 });

  return (
    <>
      {alert.show && <Alert {...alert} />}

      <div className="relative flex items-center justify-center flex-col p-4">
        <div className="contact-container relative z-10 black bg-opacity-90 rounded-lg shadow-lg max-w-lg w-full sm:max-w-md">
          <h3 className="head-text pt-5 text-center">Let's talk</h3>
          <p className="text-lg text-gray-600 mt-4 text-center">
            Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
            life, I’m here to help.
          </p>

      
          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3 relative">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Let's create something amazing together!"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Canvas style={{ pointerEvents: 'none' }}>
                  <ambientLight intensity={1.7} />
                  <directionalLight position={[0, 0, 0]} />
                  <Center>
                    <Suspense fallback={null}>
                      <group>
                        <Pikachu scale={1} position={[0,-2.5,1]} />
                      </group>
                    </Suspense>
                  </Center>
                </Canvas>
              </div>
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        
        </div>
      </div>
    </>
  );
};

export default Contact;