'use client';
import { useTranslations } from 'next-intl';
import { Fragment, useContext, useEffect, useState } from 'react';
import ProfileSetting from './ProfileSetting';
import { LayoutContext } from '@/context/LayoutContext';
import ImageEditor from '@/components/general/ImageEditor';
import PageSubMenu from '@/components/common/PageSubMenu';
import styles from './styles.module.css';
import { usePathname, useRouter } from 'next/navigation';
import { video } from '@/commonTypes';
import ClipList from '@/components/general/ClipList';
import ToolbarIcons from '@/icons/toolbar';
import Api from '@/api';
import Button from '@/components/common/Button';
import MoreBox from '@/components/general/MoreBox';

export default function Profile({ slug, profileInfo }: { slug: string; profileInfo: {} }) {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations('Page');
  const tCommon = useTranslations('common');
  const { dir } = useContext(LayoutContext);
  const [selectedFilter, setSelectedFilter] = useState<number | undefined>();
  const [data, setData] = useState({
    name: 'First channel',
    subscriber: 2,
    videos: 10,
    views: 5,
    verified: true,
  });
  const filterList = [
    {
      id: 1,
      title: 'a',
      onClick: () => {
        setSelectedFilter(1);
        setExtraParams({});
      },
    },
    {
      id: 2,
      title: 'b',
      onClick: () => {
        setSelectedFilter(2);
        setExtraParams({});
      },
    },
  ];
  const [hasMore, setHasMore] = useState(false);
  const [count, setCount] = useState(0);
  const [extraParams, setExtraParams] = useState({});
  const [list, setList] = useState<video[]>(
    [...Array(8)].map((_, i) => ({
      id: i + 1,
      title: 'New attack targets U.S. base in Syria following American airstrikes over con',
      channel: {
        name: 'CBS News',
        fileImage: { name: '/imgs/home/cardChannelImage.jpg' },
        uuid: 'channel-uuid',
        verified: true,
      },
      createdAt: new Date(),
      view: 1,
      fileImage: { name: '/imgs/home/cardImage.jpg' },
      uuid: 'hfsdhgjkd',
    })),
  );
  const [activeMenu, setActivemenu] = useState(1);
  let menu = [
    {
      id: 1,
      title: tCommon(`videos`),
      onClick: () => {
        menuFunction(1);
      },
      slug: 'videos',
      type: 'video',
    },
    {
      id: 2,
      title: tCommon('playlists'),
      onClick: () => {
        menuFunction(2);
      },
      slug: 'playlists',
      type: 'playlist',
    },
    {
      id: 3,
      title: tCommon(`setting`),
      onClick: () => {
        menuFunction(3);
      },
      slug: 'setting',
      type: 'setting',
    },
  ];
  const menuFunction = (id: number) => {
    setActivemenu(id);
    let index = menu?.findIndex((x) => x.id == id);
    router.push(`/profile-management#${menu?.[index]?.slug}`, { scroll: false });
  };
  useEffect(() => {
    let index = menu?.findIndex((x) => x.slug == window?.location?.hash?.replace('#', ''));
    setActivemenu(menu?.[index]?.id);
    getList(menu?.[index]?.id);
  }, [router]);
  useEffect(() => {
    setHasMore(list.length < count);

    if (list.length == 0) {
      setHasMore(false);
    }
  }, [list, count]);
  const getList = (id: number, more = false) => {
    let apiCall;
    if (id == 1) {
      apiCall = Api.videoList;
    }
    if (id == 2) {
      apiCall = Api.videoList;
    }
    if (id == 3) {
      apiCall = Api.playlistList;
    }
    let params = {
      start: more ? list?.length : 0,
      limir: 10,
      ...extraParams,
    };
    apiCall &&
      apiCall({ params: params })
        .then((res: { data: { response: video[]; response_details: { count: number } } }) => {
          if (more) {
            setList(list?.concat(res?.data?.response));
          } else {
            setList(res?.data?.response);
          }
          setCount(res?.data?.response_details?.count);
        })
        .catch((err: object) => {});
  };
  useEffect(() => {
    if (extraParams) {
      getList(activeMenu, false);
    }
  }, [extraParams]);
  useEffect(() => {
    getList(activeMenu, false);
  }, [activeMenu]);
  const getMorePosts = () => {
    getList(activeMenu, true);
  };
  console.log('pathname==', pathname);
  return (
    <Fragment>
      <ImageEditor />
      <ProfileSetting data={data} />
      <PageSubMenu menu={menu} active={activeMenu} className={styles.menu} />
      <ClipList
        t={t}
        title={menu?.filter((x) => x.id == activeMenu)?.[0]?.title}
        className={`${styles.latestSection}`}
        list={list}
        hasMore={hasMore}
        type={menu?.filter((x) => x.id == activeMenu)?.[0]?.type}
        getMorePosts={getMorePosts}
        infiniteContent={true}
        headerChildren={
          <MoreBox
            icon={
              <Button className={`secondButton iconWrapper`}>
                <ToolbarIcons.filterIcon />
              </Button>
            }
            id={'filterBox'}
            selected={selectedFilter}
            list={filterList}
          />
        }
      ></ClipList>
    </Fragment>
  );
}
