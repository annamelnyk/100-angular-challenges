export const hasValideCharacters = (cardNumber: string): boolean => {
  let isValid = true;

  for (let i = 0; i < cardNumber.length; i++) {
    if (!Number.isInteger(Number(cardNumber[i]))) {
      isValid = false;
      return isValid;
    }
  }

  return isValid;
};

export const hasCorrectLength = (cardNumber: string): boolean => {
  const masterVisaCardLength = 16;
  const americanExpressCardLength = 15;
  const cardNumberLength = cardNumber.length;

  return (
    cardNumberLength === masterVisaCardLength ||
    cardNumberLength === americanExpressCardLength
  );
};

export const typeOfCreditCard = (cardNumber: string): string => {
  let type;

  switch (Number(cardNumber[0])) {
    case 2:
    case 5:
      type = 'mastercard';
      break;

    case 4:
      type = 'visa';
      break;

    case 3:
      type = 'americanExpress';
      break;

    default:
      type = 'default';
  }

  return type;
};

export const creditCardNumberDashed = (creditCardNumber: string): string => {
  const creditCardCharacters = [];
  const SEPARATOR = '-';
  const creditCardLength = creditCardNumber.length;

  for (let i = 0; i < creditCardLength; i++) {
    if (i !== 0 && i % 4 === 0) {
      creditCardCharacters.push(SEPARATOR);
    }

    creditCardCharacters.push(creditCardNumber[i]);
  }

  return creditCardCharacters.join('');
};
