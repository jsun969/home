import React from 'react';
import SocialInfoButton from './components/SocialInfoButton';
import ThemeToggleButton from './components/ThemeToggleButton';

const App: React.FC = () => {
  return (
    <div className="flex h-screen dark:bg-slate-900 relative">
      <div className="absolute top-4 right-4">
        <ThemeToggleButton />
      </div>

      <div className="m-auto text-center flex flex-col gap-6">
        <img
          alt="avatar"
          src="/avatar.png"
          className="m-auto border-2 w-32 rounded-full"
        />
        <div className="text-5xl dark:text-white">您好, 我是荆棘</div>
        <div className="text-slate-700 dark:text-slate-400">
          男 / {new Date().getFullYear() - 2005}岁 / 上海人 / Typescript全栈 /
          React & Nest
        </div>
        <div className="m-auto flex gap-5">
          <SocialInfoButton
            icon="github"
            className="hover:text-gray-500"
            text="jsun969"
            href="https://github.com/jsun969"
          />
          <SocialInfoButton
            icon="qq"
            className="hover:text-red-600"
            text="1351083056"
          />
          <SocialInfoButton
            icon="wechat"
            className="hover:text-green-500"
            text="jsun969"
          />
          <SocialInfoButton
            icon="telegram"
            className="hover:text-blue-600"
            text="@jsun969"
            href="https://t.me/jsun969"
          />
          <SocialInfoButton
            icon="discord"
            className="hover:text-purple-500"
            text="jsun969#1144"
          />
          <SocialInfoButton
            icon="twitter"
            className="hover:text-blue-500"
            text="jsun969"
            href="https://twitter.com/jsun969"
          />
          <SocialInfoButton
            icon="mail"
            className="hover:text-gray-500"
            text="i@jsun969.cn"
            href="mailto:i@jsun969.cn"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
