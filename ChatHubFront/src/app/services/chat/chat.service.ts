import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { Subject } from 'rxjs';

export interface Message {
  user: string;
  text: string;
}

@Injectable({ providedIn: 'root' })
export class ChatService {
  private hubConnection: signalR.HubConnection;
  public messages$ = new Subject<Message>();

  constructor() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:5167/chathub', { withCredentials: true })
      .withAutomaticReconnect()
      .build();

this.hubConnection.on('ReceiveMessage', (user: string, text: string) => {
  console.log('[CLIENT] Message received:', user, text);
  this.messages$.next({ user, text });
});


    this.hubConnection
      .start()
      .then(() => console.log('[CLIENT] SignalR connected'))
      .catch(err => console.error('[CLIENT] Connection error:', err));
  }

  sendMessage(user: string, text: string) {
    this.hubConnection.invoke('SendMessage', user, text)
      .catch(err => console.error('[CLIENT] Send error:', err));
  }
}
