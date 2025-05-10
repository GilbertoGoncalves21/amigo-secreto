export const EMPTY: string = '';

export class StringUtils {
  
  static format(value: string): string | null {
    return value ? (value === '-' ? null : value) : EMPTY;
  }

  static toStringParam(param: any) {
    return `${param}`;
  }

  static isString(string: any): boolean {
    return typeof string === 'string' || string instanceof String;
  }

  static isNotEmpty(string: string): boolean | string {
    return string && this.isString(string) && string.trim() && string.trim().length > 0;
  }

  static isEmpty(string: string): boolean {
    return !this.isNotEmpty(string);
  }

  static capitalizeWords(string: string) {
    return string?.replace(/(?:^|\s)\S/g, (value) => value.toUpperCase()) ?? EMPTY;
  }
}
