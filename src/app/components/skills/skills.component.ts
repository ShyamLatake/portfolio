import { Component } from '@angular/core';
// Imported directive for scroll animations
import { AnimateOnScrollDirective } from '../../shared/directives/scroll-reveal.directive';
import { SkillBarDirective } from '../../shared/directives/skill-bar.directive';
import { GitIconComponent } from "../../shared/icons/skills/git-icon.component";
import { JavascriptIconComponent } from "../../shared/icons/javascript-icon.component";
import { ShieldIconComponent } from "../../shared/icons/angular.component";
import { HtmlIconComponent } from "../../shared/icons/skills/html-icon.component";
import { CSS3IconComponent } from "../../shared/icons/skills/css3-icon.component";
import { DatabaseIconComponent } from "../../shared/icons/home/database.component";
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [AnimateOnScrollDirective, SkillBarDirective, GitIconComponent, JavascriptIconComponent, ShieldIconComponent, HtmlIconComponent, CSS3IconComponent, DatabaseIconComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {

}
