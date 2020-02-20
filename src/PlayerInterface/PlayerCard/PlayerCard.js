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
                    <br />
                    <Divider /> 
                    <Typography variant="body2" component="p">
                        Most Played Team : {props.mostPlayedTeam}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Times Played : {props.mostPlayedTimes}
                    </Typography>
                    <Divider />
                    <Typography variant="body2" component="p">
                        Top Performing Team : {props.teamStats[0] !== undefined? props.teamStats[0].Team : null}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Percentage : {props.teamStats[0] !== undefined? (props.teamStats[0].Stats)*100 : null} %
                    </Typography>
                    <Divider />
                    <Typography variant="body2" component="p">
                        Worst Performing Team : {props.teamStats[props.teamStats.length-1] !== undefined? props.teamStats[props.teamStats.length-1].Team : null} 
                    </Typography>
                    <Typography variant="body2" component="p">
                        Percentage : {props.teamStats[props.teamStats.length-1] !== undefined? ((props.teamStats[props.teamStats.length-1].Stats)===null? 0 :props.teamStats[props.teamStats.length-1].Stats)*100 : null} %
                    </Typography>
                    <Divider />
                    <br />
                    <Divider />
                    <Typography variant="body2" component="p">
                        Most Played League : {props.mostPlayedLeague}
                    </Typography>               
                    <Typography variant="body2" component="p">
                        Time Played : {props.mostPlayedLeagueTimes}
                    </Typography>
                    <Divider />
                    <Typography variant="body2" component="p">
                        Top Performing League : {props.leagueStats[0] !== undefined ? props.leagueStats[0].League:null}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Percentage : {props.leagueStats[0] !== undefined ? props.leagueStats[0].Stats * 100 :null} %
                    </Typography>
                    <Divider />
                    <Typography variant="body2" component="p">
                        Worst Performing League : {props.leagueStats[props.leagueStats.length -1] !== undefined ? props.leagueStats[props.leagueStats.length -1].League:null}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Percentage : {props.leagueStats[props.leagueStats.length -1] !== undefined ? (props.leagueStats[props.leagueStats.length -1].Stats===null?0:props.leagueStats[props.leagueStats.length -1].Stats) * 100 :null} %
                    </Typography>
                    <Divider />
                    
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default PlayerInterface