import { Component } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';
import { NGValidators } from 'ng-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  theForm: FormGroup;
  formData: {name: string, validator: string, errorMessage: string, snippet: string, doc?: string}[];

  constructor(private fb: FormBuilder) {
    this.theForm = fb.group({
      contains: ['', [NGValidators.contains('validate')]],
      equals: ['', [NGValidators.equals('validate')]],
      after: ['', [NGValidators.isAfter()]],
      alpha: ['', [NGValidators.isAlpha()]],
      alphanumeric: ['', [NGValidators.isAlphanumeric()]],
      // ascii: ['', [NGValidators.isAscii()]],
      // base64: ['', [NGValidators.isBase64()]],
      // before: ['', [NGValidators.isBefore()]],
      // boolean: ['', [NGValidators.isBoolean()]],
      // byteLength: ['', [NGValidators.isByteLength()]],
      // creditCard: ['', [NGValidators.isCreditCard()]],
      // currency: ['', [NGValidators.isCurrency()]],
      // dataURI: ['', [NGValidators.isDataURI()]],
      // date: ['', [NGValidators.isDate()]],
      // decimal: ['', [NGValidators.isDecimal()]],
      // divisiblyBy: ['', [NGValidators.isDivisibleBy(3)]],
      email: ['', [NGValidators.isEmail()]],
      // empty: ['', [NGValidators.isEmpty()]],
      // FQDN: ['', [NGValidators.isFQDN()]],
      // float: ['', [NGValidators.isFloat()]],
      // fullWidth: ['', [NGValidators.isFullWidth()]],
      // hexColor: ['', [NGValidators.isHexColor()]],
      // hexadecimal: ['', [NGValidators.isHexaDecimal()]],
      // IP: ['', [NGValidators.isIP()]],
      // ISBN: ['', [NGValidators.isISBN()]],
      // ISSN: ['', [NGValidators.isISSN()]],
      // ISIN: ['', [NGValidators.isISIN()]],
      // ISO8601: ['', [NGValidators.isISO8601()]],
      // in: ['', [NGValidators.isIn(['angular', 'validators'])]],
      // int: ['', [NGValidators.isInt()]],
      // JSON: ['', [NGValidators.isJSON()]],
      // length: ['', [NGValidators.isLength()]],
      // lowerCase: ['', [NGValidators.isLowerCase()]],
      // MACAddress: ['', [NGValidators.isMACAddress()]],
      // MD5: ['', [NGValidators.isMD5()]],
      // mobilePhone: ['', [NGValidators.isMobilePhone()]],
      // mongoId: ['', [NGValidators.isMongoId()]],
      // multiByte: ['', [NGValidators.isMultibyte()]],
      // numeric: ['', [NGValidators.isNumeric()]],
      // surrogatePair: ['', [NGValidators.isSurrogatePair()]],
      // URL: ['', [NGValidators.isURL()]],
      // UUID: ['', [NGValidators.isUUID()]],
      // upperCase: ['', [NGValidators.isUpperCase()]],
      // variableWidth: ['', [NGValidators.isVariableWidth()]],
      // whiteListed: ['', [NGValidators.isWhiteListed()]],
      // matches: ['', [NGValidators.matches()]],
    });

    this.formData = [
      {
        name: 'contains',
        validator: 'contains',
        errorMessage: `Must contain 'validate'`,
        snippet: `NGValidators.contains('validate')`
      },
      {
        name: 'equals',
        validator: 'equals',
        errorMessage: `Must equal 'validate'`,
        snippet: `NGValidators.equals('validate')`
      },
      {
        name: 'after',
        validator: 'isAfter',
        errorMessage: `Date must be after today`,
        snippet: `NGValidators.after()`,
        doc: `NGValidators.after('2020-03-09')`
      },
      {
        name: 'alpha',
        validator: 'isAlpha',
        errorMessage: 'Alphabetic characters only',
        snippet: `NGValidators.isAlpha()`
      },
      {
        name: 'alphanumeric',
        validator: 'isAlphanumeric',
        errorMessage: 'Alphanumeric characters only',
        snippet: `NGValidators.isAlphanumeric()`
      },
      {
        name: 'email',
        validator: 'isEmail',
        errorMessage: 'Invalid email address',
        snippet: `NGValidators.isEmail()`
      }
    ];
  }
}
