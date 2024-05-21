'use client'

import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import PageLayout from '@/components/PageLayout';
import Button from '@/components/Button';
import {useRouter, usePathname} from '@/navigation';


type Props = {
  params: {locale: string};
};

export default function IndexPage({params: {locale}}: Props) {
  // Enable static rendering
  // unstable_setRequestLocale(locale);

  const t = useTranslations('IndexPage');

  const router = useRouter()

  const gotoPage = () => {
    router.push('/order')
  }

  return (
    <PageLayout title={t('title')}>
      <p className="max-w-[590px]">
        {t.rich('description', {
          code: (chunks) => (
            <code className="font-mono text-white">{chunks}</code>
          )
        })}
      </p>
      <Button onClick={gotoPage}>click me click me</Button>
    </PageLayout>
  );
}
