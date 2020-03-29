import Vue from 'vue';
 let date = Vue.filter('dates',function(date){
    let d = new Date(date)
    return d.getFullYear() + '年' + d.getMonth()+1 +'月' + d.getDate() + '日  ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
  })
let timeFilter = Vue.filter('timeFilter',function(times){
  let day = new Date()
  let time1 = day.getTime() 
    time1 = time1 - times
    if(time1 < 1000 * 60 *5){
      times = "刚刚"
    }else{
      times = "大于5分钟"
    }
    return times
})
export {date,timeFilter}