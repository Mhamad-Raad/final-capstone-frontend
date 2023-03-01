import React from 'react';
import { ExternalLink } from 'react-external-link';

export default function Footer() {
  return (
    <p className="footer">
      Copyright &copy; 2023
      {' '}
      <ExternalLink href="https://github.com/KanzaTahreem">Kanza</ExternalLink>
      {', '}
      <ExternalLink href="https://github.com/shakerAbuDrais">Shaker</ExternalLink>
      {' & '}
      <ExternalLink href="https://github.com/Mhamad-Raad/">Mhamad</ExternalLink>
    </p>
  );
}
