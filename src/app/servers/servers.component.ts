import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  //selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created.';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver 1', 'Testserver 2'];

  constructor() {

    //Después de 2 seg cambia a True
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  
  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is: ' + this.serverName;
  }

  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
