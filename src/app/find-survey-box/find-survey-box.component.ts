import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-find-survey-box',
  templateUrl: './find-survey-box.component.html',
  styleUrls: ['./find-survey-box.component.css']
})
export class FindSurveyBoxComponent implements OnInit {

  @Input() id: string;

  constructor() { }

  ngOnInit() { }

  contactServer() {
    console.log(this.id);
  }
}
