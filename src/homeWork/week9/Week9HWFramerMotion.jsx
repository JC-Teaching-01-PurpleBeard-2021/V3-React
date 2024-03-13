import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Modal from './components/Modal';

import HWNavBar from '../_HWNavBar';
import './Week9HWStyle.css';

function Week9HWFramerMotion() {
  // Modal state
  const useModal = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    return { modalOpen, close, open };
  };
  const { modalOpen, close, open } = useModal();

  return (
    <div className="app-container HW_Main">
      <HWNavBar />
      <div className="content">
        <a href="https://youtu.be/SuqU904ZHA4" target="blank">
          Tutorial Video
        </a>
        <motion.main>
          <motion.h1>
            Framer Motion
            <span className="light-blue"> ⚛️ React</span>
          </motion.h1>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="save-button"
            onClick={open}
          >
            Launch modal
          </motion.button>

          <br />
          <br />
        </motion.main>

        <ModalContainer>
          {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
        </ModalContainer>
      </div>
    </div>
  );
}

const ModalContainer = ({ children }) => (
  // Enables the animation of components that have been removed from the tree
  <AnimatePresence
    // Disable any initial animations on children that
    // are present when the component is first rendered
    initial={false}
    // Only render one component at a time.
    // The exiting component will finish its exit
    // animation before entering component is rendered
    exitBeforeEnter={true}
    // Fires when all exiting nodes have completed animating out
  >
    {children}
  </AnimatePresence>
);

export default Week9HWFramerMotion;
