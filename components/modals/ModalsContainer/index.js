import { LayoutContext } from '@/context/LayoutContext';
import React, { useContext } from 'react';
import Modal from '@/components/structure/Modal';

export default function ModalsContainer() {
  const { trigger, setTrigger, login } = useContext(LayoutContext);
  console.log('login==', login);

  return (
    <div>
      {login ? (
        <div className={`loggedInModals`}></div>
      ) : (
        <div className={`loggedOutModals`}>
          {trigger == 'sampleModal' && (
            <Modal
              handleShowModal={() => {
                setTrigger('');
              }}
              title={'title'}
            >
              {[...Array(20)].map((_, i) => (
                <div key={i}>content</div>
              ))}
            </Modal>
          )}
        </div>
      )}
    </div>
  );
}
