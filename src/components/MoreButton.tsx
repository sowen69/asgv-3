import React from 'react';

export interface MoreButtonProps {
  href: string;
  buttonText: string;
}

function MoreButton(props: MoreButtonProps) {
  const { href, buttonText } = props;

  return (
    <a
      href={href}
      type="button"
      className="inline-block rounded-full px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
    >
      {buttonText}
    </a>
  );
}
export default MoreButton;
