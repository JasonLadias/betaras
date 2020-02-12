import React, { Fragment } from 'react'
import PlayerCard from './PlayerCard/PlayerCard'
import StatisticsCard from './StatisticsCard/StatisticsCard'
import ResultsTable from './ResultsTable/ResultsTable'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: '0 20px',
        justifyContent: 'space-around'
    },
    rootDiv: {
        display: 'flex',
        alignContent: 'flex-start',
        height: 1000
    }
})

const PlayerInterface = (props) => {
    const classes = useStyles()

    return (
        <div className={classes.rootDiv}>
            <PlayerCard
                name={props.name}
                image={props.image}
                text={props.text} />
            <div className={classes.container}>
                <StatisticsCard />
                <StatisticsCard />
                <StatisticsCard />
                <ResultsTable />

            </div>
        </div>
    )
}

export default PlayerInterface