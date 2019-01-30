import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     items:[
       {
         img: 'https://www.cybertechgroup.net/wp-content/uploads/2016/01/turnaround.png',
         title:'Turnaround Consulting',
         subtitle:'Companies dislike the term ‘turnaround consulting’ because it represents failure. The truth is that turnaround consulting represents success.'
       },
       {
        img: 'https://i1.wp.com/www.usanewstimes.online/wp-content/uploads/2018/12/investors-have-nowhere-to-hide-as-stocks-bonds-and-commodities-all-tumble.png?ssl=1',
        title:'Bonds & Commodities',
        subtitle:'Companies dislike the term ‘turnaround consulting’ because it represents failure. The truth is that turnaround consulting represents success.'
       },
       {
        img: 'https://5.imimg.com/data5/HA/YE/GLADMIN-63482943/audit-500x500.png',
        title:'Audit & Assurance',
        subtitle:'Companies dislike the term ‘turnaround consulting’ because it represents failure. The truth is that turnaround consulting represents success.'
       },
      
      ],
      maps:[
        {
          url:'https://i.ytimg.com/vi/MZQtLRCQEg0/maxresdefault.jpg',
          title:'Head Quarter',
          address:'14 Mao Road, N1 4EP,  Los Angelos, USA',
          tel:'+445 6231 411',
          secondtel:'+445 6231 411'
        },
        {
          url:'https://i.ytimg.com/vi/MZQtLRCQEg0/maxresdefault.jpg',
          title:'California office',
          address:'14 Mao Road, N1 4EP,  Los Angelos, USA',
          tel:'+445 6231 411',
          secondtel:'+445 6231 411'
        },
        {
          url:'https://i.ytimg.com/vi/MZQtLRCQEg0/maxresdefault.jpg',
          title:'London office',
          address:'14 Mao Road, N1 4EP,  Los Angelos, USA',
          tel:'+445 6231 411',
          secondtel:'+445 6231 411'
        }
      ]
  }
})
