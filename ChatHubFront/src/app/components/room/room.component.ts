import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../../services/chat/chat.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  currentUser = 'User' + Math.floor(Math.random() * 1000);
  newMessage = '';
  messages: Message[] = [];

  constructor(private chat: ChatService) {}

  ngOnInit() {
    this.chat.messages$.subscribe((msg: Message) => {
      this.messages.push(msg);
    });
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.chat.sendMessage(this.currentUser, this.newMessage);
      this.newMessage = '';
    }
  }
}
