import clsx from 'clsx';
import React from 'react';

interface SocialInfoButtonProps {
  /**
   * @see https://remixicon.com/
   */
  icon: string;
  text: string;
  href?: string;
  onClick: () => void;
  showText?: boolean;
}

const SocialInfoButton: React.FC<SocialInfoButtonProps> = ({
  icon,
  href,
  text,
  onClick,
  showText,
}) => {
  return (
    <div>
      <button
        className={clsx(
          'ri-xl h-6 dark:text-slate-200',
          `ri-${icon}-${showText ? 'fill' : 'line'}`,
        )}
        onClick={onClick}
      />
      {showText && (
        <div className="text-sm dark:text-slate-200">
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
