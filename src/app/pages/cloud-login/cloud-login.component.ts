import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
@Component({
  selector: 'app-cloud-login',
  templateUrl: './cloud-login.component.html',
  styleUrls: ['./cloud-login.component.scss']
})
export class CloudLoginComponent implements OnInit {
  cloudName: string;
  passwordStart: string;
  passwordEnd: string;
  agree = false;
  nameCheck = false;
  posswordCheck = false;
  samePass = false;
  constructor(private notification: NzNotificationService) { }

  ngOnInit(): void {
  }

  nameReg() {
    const nameReg = /[\u4e00-\u9fa5_a-zA-Z]{5,50}/;
    if (!nameReg.test(this.cloudName)) {
      this.nameCheck = true;
    } else {
      this.nameCheck = false;
    }
  }

  posswordReg() {
    const passReg = /^(?=.*[a-zA-Z0-9].*)(?=.*[a-zA-Z\\W].*)(?=.*[0-9\\W].*).{6,20}$/;
    if (!passReg.test(this.passwordStart)) {
      this.posswordCheck = true;
    } else {
      this.posswordCheck = false;
    }
  }

  sameCheck() {
    if (this.passwordEnd !== this.passwordStart) {
      this.samePass = true;
    } else {
      this.samePass = false;
    }
  }

  loginSumit() {
    if (this.nameCheck || this.posswordCheck || this.samePass) {
      return;
    }
    if (!this.agree) {
      this.notification.blank('请同意服务声明', '');
      return;
    }
    // 处理后台逻辑
  }
}
