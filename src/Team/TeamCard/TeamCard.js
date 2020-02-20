import React from 'react'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles({
    root: {
        width: '25vw',
        height: '15vw'
    },
    media: {
        height: 60,
        width: 100
    },
})


const TeamCard = (props) => {
    const classes = useStyles()

    return (
        <Card className={classes.root} elevation={3}>
            <CardActionArea>
                <CardContent className={classes.title}>
                    <Typography variant="h5" component="h3" align="center">{props.text}</Typography>
                    <br />
                    <Divider />
                    <Typography component="p" >
                        Top Player: {props.stats[0] !== undefined? props.stats[0].firstname:null}   -   {props.stats[0] !== undefined? (props.stats[0].Percentage*100).toFixed(2):null}%
                    </Typography>
                    <Divider />
                    <Typography component="p" >
                        Worst Player: {props.stats[props.stats.length-1] !== undefined? props.stats[props.stats.length-1].firstname:null}   -   {props.stats[props.stats.length-1] !== undefined? (props.stats[props.stats.length-1].Percentage*100).toFixed(2):null}%
                    </Typography>
                    <Divider />
                    <br />
                    <Typography variant="h5" component="h3" align="center">Top Bet</Typography>
                    <Typography variant="h6" component="p" align="center">{props.bestBet[0]!== undefined?props.bestBet[0].team1:null} - {props.bestBet[0]!== undefined?props.bestBet[0].team2:null} : {props.bestBet[0]!== undefined?props.bestBet[0].betpoint:null} </Typography>
                    <Typography variant="h6" component="p" align="center">Odds : {props.bestBet[0]!== undefined?props.bestBet[0].odds:null} </Typography>
                    <Typography variant="h6" component="p" align="center">{props.bestBet[0]!== undefined?props.bestBet[0].firstname:null} </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default TeamCard