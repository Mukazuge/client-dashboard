import { Component, OnInit } from '@angular/core';
import {Note} from "../models/Note";
import {NotesService} from "../services/notes/notes.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notes$: Observable<Note[]>;

  constructor(private notesService: NotesService) {
  }

  ngOnInit() {
    this.notes$ = this.notesService.getNotes();
  }

}
