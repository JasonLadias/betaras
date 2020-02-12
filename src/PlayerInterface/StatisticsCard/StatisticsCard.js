import React from 'react'
import PieChart from 'react-minimal-pie-chart';
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 300,
    height: 300
  },
  media: {
    height: 150,
  },
  pie: {
    height: 220
  },
  title: {
    height: 100
  }
})

const StatisticsCard = (props) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <PieChart
          className={classes.pie}
          data={[
            { title: 'Won', value: 56, color: '#32CD32'},
            { title: 'Lost', value: 100 - 56, color: '#C13C37'}
          ]} />
        <CardContent className={classes.title}>
          <Typography gutterBottom variant="h5" component="h2" align="center">Winning Percentage</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default StatisticsCard