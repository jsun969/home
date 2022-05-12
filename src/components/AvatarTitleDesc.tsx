import React from 'react';

const AvatarTitleDesc: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default AvatarTitleDesc;
