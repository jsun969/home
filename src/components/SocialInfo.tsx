import React from 'react';
import SocialInfoButton from './SocialInfoButton';

const SocialInfo: React.FC = () => {
  return (
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
  );
};

export default SocialInfo;
