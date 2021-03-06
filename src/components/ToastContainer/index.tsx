import React from 'react';
import { useTransition } from 'react-spring';

import Toast, { IToast } from './Toast';

import * as S from './styles';

interface ToastContainerProps {
  toasts: IToast[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ toasts }) => {
  const toastsWithTransitions = useTransition(toasts, toast => toast.id, {
    from: { right: '-120%', opacity: 0 },
    enter: { right: '0%', opacity: 1 },
    leave: { right: '-120%', opacity: 0 },
  });

  return (
    <S.Container>
      {toastsWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} style={props} {...item} />
      ))}
    </S.Container>
  );
};

export default ToastContainer;
