import React from 'react';
import AvatarTitleDesc from './components/AvatarTitleDesc';
import LanguageToggleButton from './components/LanguageToggleButton';
import SocialInfo from './components/SocialInfo';
import ThemeToggleButton from './components/ThemeToggleButton';

const App: React.FC = () => {
  return (
    <div className="flex h-screen dark:bg-slate-900 relative">
      <div className="absolute top-4 right-4">
        <ThemeToggleButton />
      </div>
      <div className="absolute top-4 left-4">
        <LanguageToggleButton />
      </div>

      <div className="m-auto text-center flex flex-col gap-6">
        <AvatarTitleDesc />
        <SocialInfo />
      </div>
    </div>
  );
};

export default App;
