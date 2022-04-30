export class ReportFilterDto {
  month: number;
  year: number;
  userId: string;

  constructor(month: number, year: number, userId: string) {
    this.month = month;
    this.year = year;
    this.userId = userId;
  }
}
