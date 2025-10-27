import { Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/room/room.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {
  rooms: string[] = [];
  selectedRoom: string = '';

  constructor(private roomService: RoomService) {}

  ngOnInit() {
    this.rooms = this.roomService.getRooms();
    this.roomService.selectedRoom$.subscribe(room => this.selectedRoom = room);
  }

  selectRoom(room: string) {
    this.roomService.selectRoom(room);
  }
}
