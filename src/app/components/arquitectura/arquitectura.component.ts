import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { FootergComponent } from '../footerg/footerg.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ContactoComponent } from '../contacto/contacto.component';

@Component({
  selector: 'app-arquitectura',
  imports: [ FooterComponent, FormsModule, ContactoComponent],
  templateUrl: './arquitectura.component.html',
  styleUrl: './arquitectura.component.css'
})
export class ArquitecturaComponent {

}
