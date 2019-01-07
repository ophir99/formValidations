export class AppValidator {
  static creditCardValidator(fControl) {
    // const pattern = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    if (fControl.value.length <= 5) {
      return null;
    }
    const pattern = /^(?:5[1-5][0-9]{14})$/;
    const result = pattern.test(fControl.value)
      ? null
      : { creditCardError: true };

    return result;
  }
}
