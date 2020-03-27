import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Backdrop, Modal, Button, Typography } from '@material-ui/core';
import { useSpring, animated } from 'react-spring/web.cjs'; 

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '8px solid #00695c',
    borderRadius:24,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: modalState, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: modalState ? 1 : 0 },
    onStart: () => {
      if (modalState && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!modalState && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function SpringModal({modalTitle, modalMessage, modalState, handleModalClose}) {
  const classes = useStyles();
  console.log(modalMessage, modalTitle);
  
  return (
    < >
      
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        className={classes.modal}
        open={modalState}
        onClose={handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalState}>
          <div className={classes.paper}>
            <h2 id="modal-title"> {modalTitle} </h2>
            <p id="modal-description"> {modalMessage} </p>
            <Button
                  onClick={handleModalClose}
                  type='submit'
                  variant="outlined"
                  color="primary"
                >
                  <Typography color="initial"> OK </Typography>
                </Button>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
