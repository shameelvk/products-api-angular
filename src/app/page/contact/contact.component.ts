import { Component } from '@angular/core';
import { CarouselComponent } from '../../units/carousel/carousel.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CarouselComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
