import React from 'react'
import Chart from 'react-google-charts';
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

const pieOptions = {
  title: "",
  pieHole: 0.6,
  slices: [
    {
      color: "#2BB673"
    },
    {
      color: "#d91e48"
    },
    {
      color: "#007fad"
    },
    {
      color: "#e9a227"
    }
  ],
  legend: {
    position: "bottom",
    alignment: "center",
    textStyle: {
      color: "233238",
      fontSize: 14
    }
  },
  tooltip: {
    showColorCode: true
  },
  chartArea: {
    left: 0,
    top: 10,
    width: "100%",
    height: "80%"
  },
  fontName: "Roboto"
}

const StatisticsCard = (props) => {
  const classes = useStyles()

  return (
    <Card className={classes.root} elevation={3}>
      <CardActionArea>
        <Chart
          chartType="PieChart"
          data={[["Age", "Weight"], ["Won", props.percentage], ["Lost", 100 - props.percentage]]}
          options={pieOptions}
          graph_id={props.text}
          width={"100%"}
          height={"15vw"}
          legend_toggle
        />
        <CardContent className={classes.title}>
          <Typography gutterBottom variant="h5" component="h3" align="center">{props.text}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default StatisticsCard