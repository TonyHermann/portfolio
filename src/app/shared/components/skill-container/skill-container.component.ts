import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-skill-container',
  templateUrl: './skill-container.component.html',
  styleUrls: ['./skill-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillContainerComponent implements OnInit {
  @Input() svgSource: any = '';
  @Input() name : any = ''
  @Input() alt: any = '';

  constructor() {
    this.svgSource = '';
    this.name = '';
    this.alt = '';
  }

  ngOnInit(): void {
  }

}
