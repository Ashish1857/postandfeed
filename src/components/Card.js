import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { default as React } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
      padding: theme.spacing(0, 3),
    },
    paper: {
      maxWidth: 400,
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),
    },
    ellipsis:{
        maxWidth: "18rem",
        overflow: "hidden",
        position: "relative",
        lineHeight: "1.2em",
        maxHeight: "2.4em",
        textAlign: "justify",
        marginRight: "-1em",
        paddingRight: "1em",
        marginBottom: "0.5em",
        "&:before": {
        content: '"..."',
        position: "absolute",
        right: 0,
        bottom: 0
        },
        "&:after": {
        content: '""',
        position: "absolute",
        right: 0,
        width: "1em",
        height: "1em",
        marginTop: "0.2em",
        background: "white"
        }
    }
  }));

const Card =({id,title, ownerName,comments, subject})=>{
    const classes = useStyles();
    return(
        <div className ="post-card" key={id}>
            <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                <Avatar alt="" src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg" />
                </Grid>
                <Grid item xs>
                    <Typography variant="h5">{ownerName}</Typography>
                    <Typography classes={{root:classes.ellipsis}}><span>{subject}</span></Typography><br/>
                    <p>Comments: {comments? comments.length:0}</p>
                </Grid>
            </Grid>
            </Paper>
        </div>
    )
}

export default Card;