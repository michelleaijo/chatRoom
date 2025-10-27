import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RoomService {
  private rooms = ['General', 'Random', 'Tech'];
  private selectedRoomSubject = new BehaviorSubject<string>(this.rooms[0]);
  selectedRoom$ = this.selectedRoomSubject.asObservable();

  getRooms() { return this.rooms; }
  selectRoom(room: string) { this.selectedRoomSubject.next(room); }
}
