import { getParamValidator } from './helpers';

export const NGValidators  = {
  contains: getParamValidator('contains'),
  equals: getParamValidator('equals'),
  isAfter: getParamValidator('isAfter'),
  isAlpha: getParamValidator('isAlpha'),
  isAlphanumeric: getParamValidator('isAlphanumeric'),
  isAscii: getParamValidator('isAscii'),
  isBase64: getParamValidator('isBase64'),
  isBefore: getParamValidator('isBefore'),
  isBoolean: getParamValidator('isBoolean'),
  isByteLength: getParamValidator('isByteLength'),
  isCreditCard: getParamValidator('isCreditCard'),
  isCurrency: getParamValidator('isCurrency'),
  isDataUri: getParamValidator('isDataUri'),
  isDate: getParamValidator('isDate'),
  isDecimal: getParamValidator('isDecimal'),
  isEmail: getParamValidator('isEmail'),
  isFloat: getParamValidator('isFloat'),
  isFQDN: getParamValidator('isFQDN'),
  isHexColor: getParamValidator('isHexColor'),
  isHexaDecimal: getParamValidator('isHexaDecimal'),
  isInt: getParamValidator('isInt'),
  isIP: getParamValidator('isIP'),
  isISBN: getParamValidator('isISBN'),
  isJSON: getParamValidator('isJSON'),
  isLowerCase: getParamValidator('isLowerCase'),
  isMacAddress: getParamValidator('isMacAddress'),
  isNull: getParamValidator('isNull'),
  isNumeric: getParamValidator('isNumeric'),
  isUpperCase: getParamValidator('isUpperCase'),
  isURL: getParamValidator('isURL')
};


