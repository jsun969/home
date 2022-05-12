import React, { useState } from 'react';
import SocialInfoButton from './SocialInfoButton';

const info = [
  { icon: 'github', text: 'jsun969', href: 'https://github.com/jsun969' },
  { icon: 'qq', text: '1351083056' },
  { icon: 'wechat', text: 'jsun969' },
  { icon: 'telegram', text: '@jsun969', href: '"https://t.me/jsun969"' },
  { icon: 'discord', text: 'jsun969#1144' },
  { icon: 'twitter', text: 'jsun969', href: 'https://twitter.com/jsun969' },
  { icon: 'mail', text: 'i@jsun969.cn', href: 'mailto:i@jsun969.cn' },
];

const SocialInfo: React.FC = () => {
  const [showTextIcon, setShowTextIcon] = useState<null | string>(null);

  return (
    <div className="m-auto flex gap-5">
      {info.map((data) => (
        <SocialInfoButton
          {...data}
          key={data.icon}
          onClick={() => {
            setShowTextIcon(showTextIcon !== data.icon ? data.icon : null);
          }}
          showText={showTextIcon === data.icon}
        />
      ))}
    </div>
  );
};

export default SocialInfo;
