export class Price {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  split: number;

  extractPrice(data: object): void {
    const val = data['dataset']['data'][0];

    this.date   = val[0];
    this.open   = val[1];
    this.high   = val[2];
    this.low    = val[3];
    this.close  = val[4];
    this.volume = val[5];
    this.split  = val[7];
  }
}
