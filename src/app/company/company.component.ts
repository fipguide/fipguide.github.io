import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface Company {
  name: string;
  abbreviation: string;
  generalInformation: string;
}

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss',
})
export class CompanyComponent {
  @Input() company: Company | undefined;
}
