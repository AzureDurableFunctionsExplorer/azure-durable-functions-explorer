// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  redirectUri: 'http://localhost:4200/login',
  aadClientId: 'e38a7710-aab9-48bb-8198-8566ed058cf2',
  aadAuthority: 'https://login.microsoftonline.com/organizations',
  azureResourceManagerScope: 'https://management.azure.com/user_impersonation',
  azureResourceManagerApiBase: 'https://management.azure.com/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
