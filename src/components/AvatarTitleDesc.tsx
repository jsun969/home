import React from 'react';
import { useTranslation } from 'react-i18next';

const AvatarTitleDesc: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <img
        alt="avatar"
        src="/avatar.png"
        className="m-auto border-2 w-32 rounded-full"
      />
      <div className="text-5xl dark:text-white">{t('title')}</div>
      <div className="text-slate-700 dark:text-slate-400">
        {t('description.male')} / {new Date().getFullYear() - 2005}
        {t('description.age')} / {t('description.shanghai')} / Typescript{' '}
        {t('description.full-stack')} / React & Nest
      </div>
    </>
  );
};

export default AvatarTitleDesc;
