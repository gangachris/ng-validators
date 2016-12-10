import { getValidator } from './helpers';

export const NG2Validators  = {
  isAfter: getValidator('isAfter'),
  isAlpha: getValidator('isAlpha'),
  isAlphanumeric: getValidator('isAlphanumeric'),
  isAscii: getValidator('isAscii'),
  isBase64: getValidator('isBase64'),
  isBefore: getValidator('isBefore'),
  isBoolean: getValidator('isBoolean'),
  isByteLength: getValidator('isByteLength'),
  isCreditCard: getValidator('isCreditCard'),
  isCurrency: getValidator('isCurrency'),
  isDataUri: getValidator('isDataUri'),
  isDate: getValidator('isDate'),
  isDecimal: getValidator('isDecimal'),
  isEmail: getValidator('isEmail'),
  isFloat: getValidator('isFloat'),
  isFQDN: getValidator('isFQDN'),
  isHexColor: getValidator('isHexColor'),
  isHexaDecimal: getValidator('isHexaDecimal'),
  isInt: getValidator('isInt'),
  isIP: getValidator('isIP'),
  isISBN: getValidator('isISBN'),
  isJSON: getValidator('isJSON'),
  isLowerCase: getValidator('isLowerCase'),
  isMacAddress: getValidator('isMacAddress'),
  isNull: getValidator('isNull'),
  isNumeric: getValidator('isNumeric'),
  isUpperCase: getValidator('isUpperCase'),
  isURL: getValidator('isURL')
};

