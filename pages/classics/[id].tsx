import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import MainLayout from '../../components/MainLayout';
import MainContainer from '../../components/MainContainer/MainContainer';
import s from './Classic.module.scss';
import { classics } from '../../data/classics';
import Link from 'next/link';
import Image from 'next/image';
import AccentedText from '../../components/UI/AccentedText/AccentedText';
import { IClassic } from '../../types';
import AccentedBlock from '../../components/UI/AccentedParagraph/AccentedParagraph';
import { useGlobalContext } from '../../context/refs';
import Breadcrumbs from '../../components/UI/Breadcrumbs/Breadcrumbs';

const Classic = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [href, setHref] = useState('');
  const [classic, setClassic] = useState<IClassic>();
  const { id } = router.query;
  const { scrollToClassics, setScrollToClassics } = useGlobalContext();

  useEffect(() => {
    setClassic(classics.find((a) => a.id === id!));
    setHref(`/classics/${id}`);
  }, [id]);

  useEffect(() => {
    if (classic !== undefined) {
      classic?.fullBio.split('\\n').map((p) => {
        if (p.includes('\\a')) {
          console.log(p.split('\\a'));
        }
        return <li key={classic.id}>{p}</li>;
      });
      setLoading(false);
    }
  }, [classic]);

  return (
    <MainLayout title="Классики | АПКРФ НЕТ">
      <MainContainer>
        <Breadcrumbs crumbs={['Классики']} links={[href]} />
        <div className={s.container}>
          {loading ? (
            'Loading'
          ) : (
            <>
              <div className={s.left_side}>
                <div className={s.title}>
                  <div
                    className={s.back_arrow}
                    onClick={() => {
                      router.push('/');
                      setScrollToClassics(true);
                    }}
                  >
                    <Image
                      src="/images/right_chevron.svg"
                      alt="classic img"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <AccentedText>{classic?.name}</AccentedText>
                </div>
                <div className={s.text}>
                  {classic?.fullBio.split('\n').map((p) => {
                    if (p.includes('\r')) {
                      return (
                        <AccentedBlock>
                          <p>{p.split('\r')}</p>
                        </AccentedBlock>
                      );
                    }
                    return <p key={classic.id}>{p}</p>;
                  })}
                </div>
              </div>
              <div className={s.right_side}>
                <div className={s.main_img}>
                  <Image
                    src={classic!.image}
                    alt="classic img"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </MainContainer>
    </MainLayout>
  );
};

export default Classic;
