import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() currentPage : number = 1;
  @Input() totalPage : number = 1;
  @Output() sendPage = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


  onClickPageButton(event: Event) {
    let value = (<HTMLInputElement>event?.target).dataset["value"];

    if (value === "Previous") this.currentPage = this.currentPage - 1 > 0 ? this.currentPage - 1  : 1;
    else if (value === "Next") this.currentPage = this.currentPage + 1 <= this.totalPage ? this.currentPage + 1 : this.currentPage;
    else this.currentPage = value ? parseInt(value) : this.currentPage;

    this.sendPage.emit(this.currentPage.toString());
  }

}
