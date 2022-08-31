import { clsx, useMantineColorScheme } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback } from 'react';

import gobDoIcon from '@/assets/gob-do-icon.svg';
import gobDoIconWhite from '@/assets/gob-do-icon-white.svg';
import gobDoLogo from '@/assets/gob-do-logo.svg';
import gobDoLogoWhite from '@/assets/gob-do-logo-white.svg';

export const defaultLogos = {
  'gob-do-logo': gobDoLogo,
  'gob-do-icon': gobDoIcon,
};

export const whiteLogos = {
  'gob-do-logo-white': gobDoLogoWhite,
  'gob-do-icon-white': gobDoIconWhite,
};

const logos = {
  ...defaultLogos,
  ...whiteLogos,
};

export type LogoProps = {
  className?: string;
  logo?: keyof typeof defaultLogos | string;
  href?: string;
};

export const Logo = ({ className, logo, href }: LogoProps) => {
  const { colorScheme } = useMantineColorScheme();

  const getLogo = (logoName: keyof typeof defaultLogos | string) => {
    let newLogo = logoName;

    if (colorScheme === 'dark') {
      const exist = whiteLogos[`${logoName}-white` as keyof typeof whiteLogos];

      if (exist) {
        newLogo = `${logoName}-white`;
      }
    }

    return logos[newLogo as keyof typeof logos];
  };

  return (
    <Link href={href || '/'}>
      <div className={clsx(className || '')}>
        <Image
          src={getLogo(logo || 'gob-do-logo')}
          alt={logo || 'gob-do-logo'}
        />
      </div>
    </Link>
  );
};

export default Logo;
