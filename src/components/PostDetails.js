import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { default as React } from 'react';
import { useHistory } from 'react-router-dom';

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
  }));

const PostDetails =({ownerName, subject, comments})=>{
    const classes = useStyles();
    const history = useHistory();

    return(
        <div className ="post-card-details">
             <h5 onClick={()=>history.goBack()}> {`<- Go Back`}</h5><br/>
           <Paper className={classes.paper}>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                <Avatar alt="" src="https://demos.creative-tim.com/argon-dashboard-pro/assets/img/theme/team-4.jpg" />
                </Grid>
                <Grid item xs>
                    <Typography variant="h5">{ownerName}</Typography>
                    <Typography>{subject}</Typography><br/>
                    <h5>Comments:</h5>
                    {comments.map((item,i)=>
                        <ol key={i}>{item}</ol>
                    )}
                </Grid>
            </Grid>
            </Paper>
        </div>
    )
}

export default PostDetails;