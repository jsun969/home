import React from 'react';

const App: React.FC = () => {
  return (
    <div className="flex h-screen">
      <div className="m-auto text-center flex flex-col gap-6">
        <img
          alt="avatar"
          src="/avatar.png"
          className="m-auto border-2 w-32 rounded-full"
        />
        <div className="text-5xl">您好, 我是荆棘</div>
        <div>
          男 / {new Date().getFullYear() - 2005}岁 / 上海人 / Typescript全栈 /
          React & Nest
        </div>
      </div>
    </div>
  );
};

export default App;
