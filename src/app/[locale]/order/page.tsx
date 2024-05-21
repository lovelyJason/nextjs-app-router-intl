// 'use client'

import classnames from 'classnames';
import React from 'react';
import { useTranslations } from 'next-intl';

// import { useRouter } from 'next-intl/client'
import styles from './index.module.scss';
import {Link, usePathname, useRouter} from '@/navigation';

export default function Order() {
  const t = useTranslations();
  // const router = useRouter()

  return (
    <div
      className={classnames([
        styles.page,
        'lg:bg-[#F9F9F9]',
        'bg-[#F8F8F8]',
        'pb-4',
      ])}
    >
      <div className="pt-[118px] text-center relative">
        <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
          已完成购买
        </div>
      </div>
    </div>
  );
}
