import { AbuteComponent } from './../abute/abute.component';
import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { FotterComponent } from '../fotter/fotter.component';
import { HeaderComponent } from '../header/header.component';
import { MyServiceService} from '../my-service.service';

declare var firebase: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  mainPic: HTMLImageElement;
  chosenPic: HTMLImageElement;
  inputImg: HTMLInputElement;
  imgCount = 15;
  inputImage = 'conected';
  goalText = 'My first life goal';
  images = ['/assets/img/card.png'];
  options: any = {
    removeOnSpill: true
};
  imgName = 0;
  constructor(private _data: MyServiceService) {
  }

  ngOnInit() {
    for (let i = 0 ; i < 15;) {
      this.images.push('/assets/img/card.png');
      i++;
   }
    this.mainPic = <HTMLImageElement> document.getElementById('mainPic');
    this.inputImg = <HTMLInputElement> document.getElementById('myImage');
    this.inputImg.addEventListener('change', function(e) {
      const file = this.files[0];
      const uid = firebase.auth().currentUser.uid;
      const refToStorage = firebase.storage().ref(uid).child(file.name);
      refToStorage.put(file);
    });
  }

  previewFile(inputImage) {
    const reader = new FileReader();
    reader.readAsDataURL(this.inputImg.files[0]);
    const imgChosen = URL.createObjectURL(this.inputImg.files[0]);
    this.mainPic.src = imgChosen;
    this.chosenPic.src = imgChosen;
    this.fbSetData(imgChosen);
  }

  saveName(event) {
    this.chosenPic = event.target;
  }

  fbSetData(inputImage) {
    firebase.database().ref().child(firebase.auth().currentUser.uid).push({timgUrl: inputImage});
  }
}
