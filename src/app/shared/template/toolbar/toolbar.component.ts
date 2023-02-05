import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  faMenu = faBars;

  @Output() toggleEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  toggle() {
    this.toggleEvent.emit();
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
