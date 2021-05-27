import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      margin: theme.spacing(2, 0, 2, 5)

    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '30%',
      flexShrink: 0,
      color: '#37474f',
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    details: {
      flexDirection: "column",
    },
    text: {
        color: "#a6a6a6",
        marginTop: theme.spacing(2)
    },
  }),
);

export default function AdvForMember() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="subtitle2"  className={classes.heading}>
          PRAGUE - MOSCOW
        </Typography>
        <Typography className={classes.secondaryHeading} color="textSecondary">
          30/05/2021
        </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Typography className={classes.secondaryHeading} color="textSecondary">
          2.0 kg
          </Typography>
          <Typography className={classes.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
          </Typography>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <Button size="small">Delete</Button>
          <Button size="small" color="primary">
            Update
          </Button>
        </AccordionActions>
      </Accordion>
     
     
    </div>
  );
}
