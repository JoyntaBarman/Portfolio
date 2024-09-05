import React from 'react';
import Container from './Container';

const Contact = () => {
  return (
    <Container id={'contact'} className={'p-10 lg:p-24'}>
      <p className="text-designColor font-semibold text-center text-xl tracking-wide">
        {' '}
        4. What's Next?
      </p>
      <h1 className="font-semibold text-center text-5xl mt-4 tracking-wide">
        Get In Touch
      </h1>
      <p className="max-w-xl mt-4 text-center mx-auto">
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <p className="text-center mt-16">
        <a
          href="mailto:joyntabarman00001@gmail.com"
          className="px-8 py-4 mx-auto text-designColor border border-designColor rounded-lg hover:bg-hoverColor"
        >
          Say Hello!
        </a>
      </p>
    </Container>
  );
};

export default Contact;
