export class Weather {
  constructor(
    public zipCode: string,
    public description: string,
    public temperature: number) {
    this.zipCode = zipCode;
    this.description = description;
    this.temperature = temperature;
  }
}
