import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  cardListnew:any = [];
  public cardList:any= [
    {
    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtPqHwYqSLFbMghJ-W8HFqgLN2s9rGuKInfDIIp-0L1ZGHK2Cs',
        title: 'jackfruit ' ,
        description:
          'Angular Flex Layout provides a sophisticated layout API using FlexBox CSS + mediaQuery.\
          This module provides Angular developers with component layout features using a custom Layout API, \
          mediaQuery observables, and injected DOM flexbox-2016 css stylings.'
      },
      {
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtPqHwYqSLFbMghJ-W8HFqgLN2s9rGuKInfDIIp-0L1ZGHK2Cs',
            title: 'mango ' ,
            description:
              'Angular Flex Layout provides a sophisticated layout API using FlexBox CSS + mediaQuery.\
              This module provides Angular developers with component layout features using a custom Layout API, \
              mediaQuery observables, and injected DOM flexbox-2016 css stylings.'
          },
          {
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtPqHwYqSLFbMghJ-W8HFqgLN2s9rGuKInfDIIp-0L1ZGHK2Cs',
                title: 'banana ' ,
                description:
                  'Angular Flex Layout provides a sophisticated layout API using FlexBox CSS + mediaQuery.\
                  This module provides Angular developers with component layout features using a custom Layout API, \
                  mediaQuery observables, and injected DOM flexbox-2016 css stylings.'
              },
              {
                imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtPqHwYqSLFbMghJ-W8HFqgLN2s9rGuKInfDIIp-0L1ZGHK2Cs',
                    title: 'apple ' ,
                    description:
                      'Angular Flex Layout provides a sophisticated layout API using FlexBox CSS + mediaQuery.\
                      This module provides Angular developers with component layout features using a custom Layout API, \
                      mediaQuery observables, and injected DOM flexbox-2016 css stylings.'
                  }   ,
     {
                    imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtPqHwYqSLFbMghJ-W8HFqgLN2s9rGuKInfDIIp-0L1ZGHK2Cs',
                        title: 'grapes ' ,
                        description:
                          'Angular Flex Layout provides a sophisticated layout API using FlexBox CSS + mediaQuery.\
                          This module provides Angular developers with component layout features using a custom Layout API, \
                          mediaQuery observables, and injected DOM flexbox-2016 css stylings.'
      }              

  ];
  query:string;

  constructor() { }

  ngOnInit() {
    this.cardListnew = this.cardList;
    //  for (let i = 1; i <= 10; i++) {
    //   this.cardList.push({
    //     imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtPqHwYqSLFbMghJ-W8HFqgLN2s9rGuKInfDIIp-0L1ZGHK2Cs',
    //     title: 'Card No. ' + i,
    //     description:
    //       'Angular Flex Layout provides a sophisticated layout API using FlexBox CSS + mediaQuery.\
    //       This module provides Angular developers with component layout features using a custom Layout API, \
    //       mediaQuery observables, and injected DOM flexbox-2016 css stylings.'
    //   });
    // }
  }

  searchItem(e){
    console.log("serach",e);
 
    var filter;
    var search = e.toLowerCase();
    if(!search || search == undefined || search == ''){
      return  this.cardListnew = this.cardList;
    }
    if(!this.cardList){
      return null
    }
    if(search){
     filter = this.cardListnew.filter((item)=>{
        return JSON.stringify(item.title).toLowerCase().includes(search)
      })
    }
   // console.log("filtered array",filter);
    this.cardListnew = filter;
    //console.log("main array",this.cardList);
  }
  }



export interface CardInterface {
  imgSrc: string;
  title: string;
  description: string;
}