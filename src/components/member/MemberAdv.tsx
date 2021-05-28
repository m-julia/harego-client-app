import { makeStyles, Modal, Paper, Theme } from '@material-ui/core';
import React, { useState } from 'react';
import myTheme from '../../customTheme/myTheme';
import AdvForMember from '../adv/AdvForMemberProfile.tsx';
import CircleButton from '../buttons/CircleButton';
import AddIcon from '@material-ui/icons/Add';
import CreateAdv from '../adv/CreateAdv';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
      width: '100%',
      margin: theme.spacing(0)
  },
  paper: {
      border: "1px solid",
      alignItems: "left",
      margin: theme.spacing(0),
      padding: theme.spacing(2)
  },
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: 'none',
    borderRadius: 5,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '25%',
    left: '35%'
  }
    
  }));

  
export default function MemberAdv() {
    const classes = useStyles();
    
    const [open, setOpen] = useState(false);
    

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
      };

    const body = (
        <div className={classes.modal}>
            <CreateAdv />
        </div>) ; 

    return (
        <div>            
            <AdvForMember />
            <AdvForMember />
            <AdvForMember />
            <CircleButton 
                icon={<AddIcon/>} 
                onClick={handleOpen}
            />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
            {body}
            </Modal>
        </div>
    )
}
