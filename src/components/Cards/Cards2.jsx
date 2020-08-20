import React from 'react';
import {Card,CardContent,Typography,Grid} from'@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';


const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}})=>{


    if(!confirmed){
        return(`...loading`)
    }
    const CardArray=[{
        value: confirmed.value,
        title: 'Number of active cases of COVID-19',
        cn:styles.infected,
        sub: "Infected"

        },
        {
        value: recovered.value,
        title: 'Number of recoveries from COVID-19',
        cn:styles.recovered,    
        sub: "Recovered"
        },
        {
        value: deaths.value,
        title: 'Number of death caused by COVID-19',
        cn:styles.deaths,
        sub: "Deaths"      
        }];

    return(
        <div className={styles.container}>
        <Grid container spacing={3} justify="center">
            {CardArray.map((item)=>(
                <Grid item component ={Card} xs={12} md={3} className={cx(styles.card, item.cn)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>{item.sub}</Typography>
                    <Typography variant='h5'>
                        <CountUp start ={0} end={item.value} duration={2.5} separator =',' />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>   
                    <Typography variant='body2' >{item.title}</Typography>
                </CardContent>
            </Grid>
            ))}
            {/* <Grid item component ={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography variant='h5'>
                        <CountUp start ={0} end={recovered.value} duration={2.5} separator =',' />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>   
                    <Typography variant='body2' >Number of recoveries from COVID-19</Typography>
                </CardContent>
            </Grid>
            <Grid item component ={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography variant='h5'>
                        <CountUp start ={0} end={deaths.value} duration={2.5} separator =',' />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>   
                    <Typography variant='body2' >Number of death caused by COVID-19</Typography>
                </CardContent>
            </Grid> */}
        </Grid>
        </div>
    )
}

export default Cards;