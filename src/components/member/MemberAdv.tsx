import { makeStyles, Paper, Theme } from '@material-ui/core';
import React from 'react';
import myTheme from '../../customTheme/myTheme';
import AdvForMember from '../adv/AdvForMemberProfile.tsx';
import CircleButton from '../buttons/CercleButton';
import AddIcon from '@material-ui/icons/Add';

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
  }
    
  }));

  
export default function MemberAdv() {
    const classes = useStyles();
    return (
        <div>            
            <AdvForMember />
            <AdvForMember />
            <AdvForMember />
            <CircleButton icon={<AddIcon/>} />
        </div>
    )
}
