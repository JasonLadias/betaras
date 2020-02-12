import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});




const ResultsTable = (props) => {

    const classes = useStyles();

    const rows = [...props.results]
    return (
        <TableContainer component={Paper} elevation={3}>
            <Table className={classes.table} size="small" aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Home</TableCell>
                        <TableCell align="center">Away</TableCell>
                        <TableCell align="center">Betpoint</TableCell>
                        <TableCell align="center">Odds</TableCell>
                        <TableCell align="center">Result</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.betID}>
                            <TableCell align="center">{row.team1}</TableCell>
                            <TableCell align="center">{row.team2}</TableCell>
                            <TableCell align="center">{row.betpoint}</TableCell>
                            <TableCell align="center">{row.odds}</TableCell>
                            <TableCell align="center">{row.won===1?'Won':'Lost'}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ResultsTable