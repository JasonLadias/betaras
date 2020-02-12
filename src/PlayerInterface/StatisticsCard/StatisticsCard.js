import React from 'react'
import PieChart from 'react-minimal-pie-chart';
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent'
import CardActionArea from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '15vw',
    height: '20vw'
  },
  media: {
    height: '15vw',
  },
  pie: {
    height: '14vw'
  },
  title: {
    height: '3vw'
  }
})

const StatisticsCard = (props) => {
  const classes = useStyles()

  return (
    <Card className={classes.root} elevation={3}>
      <CardActionArea>
        <PieChart
          className={classes.pie}
          data={[
            { title: 'Won', value: props.percentage, color: '#32CD32'},
            { title: 'Lost', value: 100 - props.percentage, color: '#C13C37'}
          ]} />
        <CardContent className={classes.title}>
        <Typography gutterBottom variant="h5" component="h3" align="center">{props.text}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default StatisticsCard