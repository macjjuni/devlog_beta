'use client';

import { CSSProperties, memo, useMemo } from 'react';
import './socialLink.scss';
import { KIcon } from 'kku-ui';
import snsInfo from '@/config/sns';

type SocialLinkAlignType = 'left' | 'center' | 'right';

function SocialLink({ align = 'left' }: { align?: SocialLinkAlignType }) {
  // region [Style]

  const rootStyle = useMemo(() => {
    const style: CSSProperties = {};

    if (align === 'left') {
      style.justifyContent = 'flex-start';
    }
    if (align === 'center') {
      style.justifyContent = align;
    }
    if (align === 'right') {
      style.justifyContent = 'flex-end';
    }

    return style;
  }, [align]);

  // endregion

  return (
    <div className="social-link__container" style={rootStyle}>
      {snsInfo.map((snsItem) => (
        <a key={snsItem.id} href={snsItem.link} target="_blank" className="social-link" rel="noreferrer" title={snsItem.text}>
          <KIcon className="social-link__icon" icon={snsItem.icon} size="small" />
          <span className="social-link__text">{snsItem.text}</span>
        </a>
      ))}
    </div>
  );
}

export default memo(SocialLink);
