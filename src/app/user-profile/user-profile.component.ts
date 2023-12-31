import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  showUpdateProfilePopup: boolean = false
  updateProfile(){
    if(this.showUpdateProfilePopup == false){
      this.showUpdateProfilePopup = true
    } else{
      this.showUpdateProfilePopup = false
    }
  }
  
}
