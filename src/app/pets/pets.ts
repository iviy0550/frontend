import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-pets',
  imports: [],
  templateUrl: './pets.html',
  styleUrl: './pets.css'
})
export class Pets implements OnInit {

  pets: any[] = [];
  filteredPets: any[] = [];

  selectedPet: any = null;
  applicationSubmitted = signal(false);

  constructor(
    private petService: PetService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.petService.getPets().subscribe((response: any) => {

      this.pets = response.data.pets;
      this.filteredPets = this.pets;

      this.route.queryParams.subscribe(params => {

        const type = params['type'];

        if (type) {
          this.filteredPets = this.pets.filter(
            pet => pet.type === type
          );
        } else {
          this.filteredPets = this.pets;
        }

      });

    });
  }

  showMore(pet: any) {
    pet.showMore = !pet.showMore;
  }

  startAdoption(pet: any) {
    this.selectedPet = pet;
    this.applicationSubmitted.set(false);
  }

  submitApplication() {
    this.applicationSubmitted.set(true);
  }

  cancelApplication() {
    this.selectedPet = null;
    this.applicationSubmitted.set(false);
  }

  adoptPet(pet: any) {
    pet.adopted = true;
  }
}