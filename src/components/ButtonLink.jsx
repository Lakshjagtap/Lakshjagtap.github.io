import React from 'react';
import PropTypes from 'prop-types';

const ButtonLink = ({ url, text, padding = 'p-3' }) => {
  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className={`transition ease-in-out duration-300 ${padding} rounded-md text-white border-2 hover:bg-white hover:text-black hover:scale-110 hover:-translate-y-1 cursor-pointer`}
    >
      {text}
    </a>
  );
};

ButtonLink.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  padding: PropTypes.string,
};

export default ButtonLink;
