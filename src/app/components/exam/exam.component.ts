import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
 
  questions = [
    {
      text: "1) 2,4,6,8,..?",
      options: ['12', '10', '6','8'],
    },
    {
      text:"2) 1,3,5,7,..?" ,
      options: ['9', '11', '15','13'],
    },
    {
      text: "3) 4,8,12,16,..?",
      options: ['18', '10', '20','30'],
    },
    {
      text:"4) 5,10,15,20,..?" ,
      options: ['15', '10', '25','30'],
    },
    {
      text:"5) 6,12,18,24,..?" ,
      options: ['12', '30', '36','48'],
    },
    {
      text:"6) 7,14,21,28,..?" ,
      options: ['32', '30', '36','35'],
    },
    {
      text:"7) 8,16,24,32,..?" ,
      options: ['36', '40', '56','48'],
    },
    {
      text:"8) 16,12,8,4,..?" ,
      options: ['12', '0', '6','8'],
    },
    {
      text: "9) 6,12,8,24,..?",
      options: ['12', '30', '6','8'],
    },
    {
      text: "10) 36,42,48,54,..?",
      options: ['66', '60', '64','80'],
    }
  ];
  GetSelectedOptions() {
    this.questions.forEach((val) => {
      console.log(val.options);
    })
  }
  constructor() { }

  ngOnInit(): void {
  }
}
