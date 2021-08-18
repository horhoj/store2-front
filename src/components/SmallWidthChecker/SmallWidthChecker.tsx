import React, { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { appActions } from '../../store/app';
import { logger } from '../../utils/logger';

export const SmallWidthChecker: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleResize = () => {
      const innerWidthWhenSidebarIsHidden = 1100;
      const result = window.innerWidth < innerWidthWhenSidebarIsHidden;
      dispatch(appActions.setIsSmallWidth(result));
      //если при изменении размера ширина экрана большая то открываем меню
      //в противном случае закрываем
      dispatch(appActions.setIsOpenMenu(!result));
    };

    //делаем дополнительную проверку при загрузке
    handleResize();

    window.addEventListener('resize', handleResize);
    logger('add resize listener');
    return () => {
      logger('remove resize listener');
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return null;
};
