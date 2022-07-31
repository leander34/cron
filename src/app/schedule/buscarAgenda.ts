import cron from 'cron'
const job = new cron.CronJob('*/5 * * * * *', () => {
    console.log('buscando agenda')
}, null, true, 'America/Sao_Paulo')

export default job


// secod
// minute
// hour
// day of month
// month
// day of week