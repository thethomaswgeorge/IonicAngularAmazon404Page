import { Component, OnInit } from '@angular/core';
import { Client } from "@petfinder/petfinder-js";
import {AnimalInterface} from "../interfaces/animalInterface";

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.page.html',
  styleUrls: ['./error-page.page.scss'],
})
export class ErrorPagePage implements OnInit {
  client = new Client({apiKey: "0x6B7vWg2R7v4lacPjJUVi0cpqnxMeIVrhR5d3zwJqcsPcmGFy", secret: "XVtHSX4VOIlh8iY0fvjewAY2W8ALIOHtnCwjXOup"});

  public animalInfo: AnimalInterface;
  public datalist;

  constructor() { }

  ngOnInit() {
    this.client.animal.search()
        .then( (response) => {
             this.datalist = response.data.animals[0];
            this.animalInfo = {
                name: this.datalist.name,
                type: this.datalist.type,
                image: this.datalist.photos[0].medium || "",
                url: this.datalist.url,
                status: this.datalist.status,
                description: this.datalist.description
            }
        })
        .catch(function (error) {
          // Handle the error
            console.log("Error: ", error);
        });
  }


}


