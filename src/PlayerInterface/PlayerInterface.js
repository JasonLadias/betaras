import React, { useState, useEffect } from 'react'
import PlayerCard from './PlayerCard/PlayerCard'
import StatisticsCard from './StatisticsCard/StatisticsCard'
import ResultsTable from './ResultsTable/ResultsTable'
import { Grid } from '@material-ui/core'
import axios from 'axios'



const PlayerInterface = (props) => {

    const [bets, setBets] = useState([])
    const [mostPlayedTeam, setMostPlayedTeam] = useState('')
    const [mostPlayedTimes, setMostPlayedTimes] = useState(0)
    const [mostPlayedLeague, setMostPlayedLeague] = useState('')
    const [mostPlayedLeagueTimes, setMostPlayedLeagueTimes] = useState(0)
    const [percentage, setPercentage] = useState(0)
    const [lastWeek, setLastWeek] = useState(0)
    const [last10, setLast10] = useState(0)
    const [leagueStats, setLeagueStats] = useState([])
    const [teamStats, setTeamStats] = useState([])

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
        axios.get(`http://localhost:8080/bets/${props.URI}/most-played`)
            .then((res) => {
                setMostPlayedTeam(res.data.result[0].team)
                setMostPlayedTimes(res.data.result[0].counter2)
            })
            .catch((er) => {
                console.log(er)
            })
        axios.get(`http://localhost:8080/bets/${props.URI}/most-played-league`)
            .then((res) => {
                setMostPlayedLeague(res.data.result[0].League)
                setMostPlayedLeagueTimes(res.data.result[0].Counter)
            })
            .catch((er) => {
                console.log(er)
            })
        axios.get(`http://localhost:8080/bets/${props.URI}/league-stats`)
            .then((res) => {
                setLeagueStats(res.data.result)
            })
            .catch((er) => {
                console.log(er)
        })
        axios.get(`http://localhost:8080/bets/${props.URI}/team-stats`)
            .then((res) => {
                setTeamStats(res.data.result)
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
    }

    console.log(teamStats)
    return (
        <Grid container direction="row" justify="flex-start" alignItems="stretch" spacing={4}>
            <Grid item>
                <PlayerCard
                    name={props.name}
                    image={props.image}
                    text={props.text}
                    mostPlayedTeam={mostPlayedTeam}
                    teamStats={teamStats}
                    leagueStats={leagueStats}
                    mostPlayedTimes={mostPlayedTimes}
                    mostPlayedLeague={mostPlayedLeague}
                    mostPlayedLeagueTimes={mostPlayedLeagueTimes} />
            </Grid>

            <Grid item>
                <Grid container direction="column" spacing={4}>
                    <Grid item>
                        <Grid container direction="row" justify="space-evenly" spacing={10}>
                            <Grid item >
                                <StatisticsCard
                                    percentage={percentage}
                                    text='Overall' />
                            </Grid>
                            <Grid item >
                                <StatisticsCard
                                    percentage={lastWeek}
                                    text="Last Week" />
                            </Grid>
                            <Grid item >
                                <StatisticsCard
                                    percentage={last10}
                                    text='Last 10 Matches' />
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