import { BooksService } from './../books.service';
import { UserService } from './../../authentication/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Historics } from './historic';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.css'],
})
export class HistoricComponent implements OnInit {
  public userId!: number | undefined;
  historic!: Historics;

  constructor(
    private userService: UserService,
    private booksService: BooksService
  ) {}

  ngOnInit(): void {
    console.log('oi');
    this.userService.returnUser().subscribe((data) => {
      this.userId = data.id;
    });

    this.booksService.getHistoric(this.userId).subscribe((result) => {
      this.historic = result;
    });
  }
}
