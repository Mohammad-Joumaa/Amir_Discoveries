import React, { useEffect } from 'react';

const ChatbotWidget: React.FC = () => {
  useEffect(() => {
    // Set the global config object before loading the script
    (window as any).ChatWidgetConfig = {
      webhook: {
        url: 'https://moustafa97.app.n8n.cloud/webhook/511580ec-947b-458f-980d-23ffa241b435/chat',
        route: 'general',
      },
      branding: {
        logo: '/amiricon.png', // replace with your logo URL
        name: 'Amir Discoveries',
        welcomeText: 'Hi 👋, how can we help?',
        responseTimeText: 'We typically respond right away',
      },
      style: {
        primaryColor: '#854FFF',
        secondaryColor: '#6B3FD4',
        position: 'right',
        backgroundColor: '#FFFFFF',
        fontColor: '#333333',
      },
    };

    // Create script tag to load the widget
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/WayneSimpson/n8n-chatbot-template@ba944c3/chat-widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup: remove script on unmount
    return () => {
      document.body.removeChild(script);
      delete (window as any).ChatWidgetConfig;
    };
  }, []);

  // The widget injects its own UI, so no need to render anything here
  return null;
};

export default ChatbotWidget;
