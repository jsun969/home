import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggleButton: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <button
      className="ri-translate-2 dark:text-white"
      onClick={() => {
        i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en');
      }}
    />
  );
};

export default LanguageToggleButton;
