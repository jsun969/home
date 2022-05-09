import React, { useState } from 'react';

interface SocialInfoButtonProps {
  /**
   * @see https://remixicon.com/
   */
  icon: string;
  className?: string;
  text: string;
  href?: string;
}

const SocialInfoButton: React.FC<SocialInfoButtonProps> = ({
  icon,
  className,
  href,
  text,
}) => {
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <i
        className={`ri-${icon}-${
          showText ? 'fill' : 'line'
        } ri-xl ${className}`}
        onClick={() => setShowText(!showText)}
      />
      {showText && (
        <div className="text-sm">
          {href ? (
            <a href={href} className="underline" target="_blank">
              {text}
            </a>
          ) : (
            text
          )}
        </div>
      )}
    </div>
  );
};

export default SocialInfoButton;
