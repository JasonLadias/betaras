import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import StatisticsCard from '../PlayerInterface/StatisticsCard/StatisticsCard'
import TeamCard from './TeamCard/TeamCard'
import axios from 'axios'

const TeamInterface = () => {

    const [bestBet, setBestBet] = useState([])
    const [bestBetLastWeek, setBestBetLastWeek] = useState([])
    const [bestBetLast5Weeks, setBestBetLast5Weeks] = useState([])
    const [stats, setStats] = useState([])
    const [statsLastWeek, setStatsLastWeek] = useState([])
    const [statsLast5Weeks, setStatsLast5Weeks] = useState([])
    const [overall, setOverall] = useState(0)
    const [lastWeek, setLastWeek] = useState(0)
    const [last5Weeks, setLast5Weeks] = useState(0)

    useEffect(() => {
        axios.get(`http://localhost:8080/bets/overall-stats`)
            .then((res) => {
                setStats(res.data.result)
                calculateOverall(res.data.result)
            })
            .catch((er) => {
                console.log(er)
            })
        axios.get(`http://localhost:8080/bets/last-week-stats`)
            .then((res) => {
                setStatsLastWeek(res.data.result)
                calculateLastWeek(res.data.result)
            })
            .catch((er) => {
                console.log(er)
            })
        axios.get(`http://localhost:8080/bets/last-5-weeks-stats`)
            .then((res) => {
                setStatsLast5Weeks(res.data.result)
                calculateLast5Weeks(res.data.result)
            })
            .catch((er) => {
                console.log(er)
            })
        axios.get(`http://localhost:8080/bets/overall-best-bet`)
            .then((res) => {
                setBestBet(res.data.result)
            })
            .catch((er) => {
                console.log(er)
            })
        axios.get(`http://localhost:8080/bets/last-week-best-bet`)
            .then((res) => {
                setBestBetLastWeek(res.data.result)
            })
            .catch((er) => {
                console.log(er)
            })
        axios.get(`http://localhost:8080/bets/last-5-weeks-best-bet`)
            .then((res) => {
                setBestBetLast5Weeks(res.data.result)
            })
            .catch((er) => {
                console.log(er)
            })
    }, [])

    const calculateOverall = (array) =>{
        let overall = array.reduce((acc,bet)=>{
            return acc + bet.Percentage
        },0) 
        let num = Number((overall*100/3).toFixed(2))
        setOverall(num)
    }

    const calculateLastWeek = (array) =>{
        let overall = array.reduce((acc,bet)=>{
            return acc + bet.Percentage
        },0) 
        let num = Number((overall*100/3).toFixed(2))
        setLastWeek(num)
    }

    const calculateLast5Weeks = (array) =>{
        let overall = array.reduce((acc,bet)=>{
            return acc + bet.Percentage
        },0) 
        let num = Number((overall*100/3).toFixed(2))
        setLast5Weeks(num)
    }

    return (
        <Grid container direction="column" spacing={5}>
            <Grid item>
                <Grid container direction="row" justify="space-evenly">
                    <Grid item>
                        <StatisticsCard
                            percentage={overall}
                            text='Overall Team Percentage' />
                    </Grid>
                    <Grid item>
                        <StatisticsCard
                            percentage={lastWeek}
                            text='Last Week Team Percentage' />
                    </Grid>
                    <Grid item>
                        <StatisticsCard
                            percentage={last5Weeks}
                            text='Last 5 Weeks Team Percentage' />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction="row" justify="space-evenly">
                    <Grid item>
                        <TeamCard
                            text='Overall'
                            stats={stats}
                            bestBet={bestBet} />
                    </Grid>
                    <Grid item>
                        <TeamCard
                            text='Last Week'
                            stats={statsLastWeek}
                            bestBet={bestBetLastWeek} />
                    </Grid>
                    <Grid item>
                        <TeamCard
                            text='Last 5 Week'
                            stats={statsLast5Weeks}
                            bestBet={bestBetLast5Weeks} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>


    )
}

export default TeamInterface