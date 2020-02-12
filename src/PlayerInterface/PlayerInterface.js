import React, { useState, useEffect } from 'react'
import PlayerCard from './PlayerCard/PlayerCard'
import StatisticsCard from './StatisticsCard/StatisticsCard'
import ResultsTable from './ResultsTable/ResultsTable'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import axios from 'axios'



const PlayerInterface = (props) => {

    const [bets, setBets] = useState([])
    const [percentage, setPercentage] = useState(0)
    const [lastWeek, setLastWeek] = useState(0)
    const [last10, setLast10] = useState(0)


    useEffect(() => {
        axios.get(`http://localhost:8080/bets/${props.URI}`)
            .then((res) => {
                setBets(res.data.result)
                calculateWinningPercentage(res.data.result)
                calculateLastWeek(res.data.result)
                calculateLast10(res.data.result)
            })
            .catch((er) => {
                console.log(er)
            })
    }, [])

    const calculateWinningPercentage = (betsarray) => {
        let won = betsarray.reduce((acc, bet) => {
            return bet.won + acc
        }, 0)
        let num = Number(((won / betsarray.length) * 100).toFixed(2))
        setPercentage(num)
    }

    const calculateLastWeek = (betsarray) => {
        const middleArray = [...betsarray]
        const newArray = [middleArray[0], middleArray[1]]
        let won = newArray.reduce((acc, bet) => {
            return bet.won + acc
        }, 0)
        let num = Number(((won / newArray.length) * 100).toFixed(2))
        setLastWeek(num)
    }

    const calculateLast10 = (betsarray) => {
        const middleArray = [...betsarray]
        const newArray = [middleArray[0], middleArray[1], middleArray[2], middleArray[3], middleArray[4], middleArray[5], middleArray[6], middleArray[7], middleArray[8], middleArray[9]]
        let won = newArray.reduce((acc, bet) => {
            return bet.won + acc
        }, 0)
        let num = Number(((won / newArray.length) * 100).toFixed(2))
        setLast10(num)
        console.log(num)
    }

    return (
        <Grid container direction="row" justify="flex-start" alignItems="stretch" spacing={4}>
            <Grid item>
                <PlayerCard
                    name={props.name}
                    image={props.image}
                    text={props.text} />
            </Grid>

            <Grid item>
                <Grid container direction="column" spacing={4}>
                    <Grid item>
                        <Grid container direction="row" justify="space-evenly" spacing={10}>
                            <Grid item >
                                <StatisticsCard
                                    percentage={percentage} 
                                    text='Overall'/>
                            </Grid>
                            <Grid item >
                                <StatisticsCard 
                                percentage={lastWeek} 
                                text= "Last Week"/>
                            </Grid>
                            <Grid item >
                                <StatisticsCard 
                                percentage={last10} 
                                text= 'Last 10 Matches'/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction="row" justify="center" spacing={10}>
                            <Grid item >
                                <ResultsTable results={bets} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    )
}

export default PlayerInterface