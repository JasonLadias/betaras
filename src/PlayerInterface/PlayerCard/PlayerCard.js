import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles({
    root: {
        width: '30vw',
        height: '45vw'
    },
    media: {
        height: 350
    },
})

const PlayerInterface = (props) => {
    const classes = useStyles()
    console.log(props.mostWon)
    return (
        <Card className={classes.root} elevation={9}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title="Player Image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.text}
                    </Typography>
                    <br/>
                    <Typography gutterBottom variant="h5" component="h5">
                        Player Statistics
                    </Typography>
                    <Divider />
                    <Typography variant="body2" component="p">
                        Most Played Team : {props.mostPlayedTeam}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Times Played : {props.mostPlayedTimes}
                    </Typography>
                    <Divider />
                    <Typography variant="body2" component="p">
                        Top Winning Team : {props.mostWonTeam}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Times Won : {props.mostWonTimes}
                    </Typography>
                    <Divider />
                    <Typography variant="body2" component="p">
                        Most Played League : {props.mostPlayedLeague}
                    </Typography>               
                    <Typography variant="body2" component="p">
                        Time Played : {props.mostPlayedLeagueTimes}
                    </Typography>
                    <Divider />
                    <Typography variant="body2" component="p">
                        Top Winning League : {props.mostWonLeague}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Times Won : {props.mostWonTimes}
                    </Typography>
                    <Divider />
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default PlayerInterface