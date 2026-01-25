export class RandomUtils {

 
  static getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

 
  static getRandomEmail(prefix: string, domain: string): string {
    const random = this.getRandomNumber(100, 999);
    return `${prefix}${random}@${domain}`;
  }
}
