import { AbuteComponent } from './../abute/abute.component';
import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { FotterComponent } from '../fotter/fotter.component';
import { HeaderComponent } from '../header/header.component';
import { MyServiceService} from '../my-service.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imgCount = 42;
  imgSrc = '/assets/img/air_temp_max.png';
  goalText = 'My first life goal';
  images = ['/assets/img/air_temp_max.png', '/assets/img/air_temp_max.png', '/assets/img/air_temp_max.png', '/assets/img/air_temp_max.png'];
  options: any = {
    removeOnSpill: true
};


  constructor(private _data: MyServiceService) {
  }

  ngOnInit() {
  }

   doubleClickImg() {
    // const upLoad = document.createElement('INPUT');
    // upLoad.setAttribute('type', 'file');
    // document.getElementById('mainPic').appendChild(upLoad);
    // document.getElementById('demo').setAttribute('src', '/assets/img/imgPlaceHolder.png');
  }

}
