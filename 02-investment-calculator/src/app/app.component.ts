import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { InvestementResultsComponent } from "./investement-results/investement-results.component";
import { UserInputComponent } from "./user-input/user-input.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, InvestementResultsComponent, UserInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'investment-calculator';
}
