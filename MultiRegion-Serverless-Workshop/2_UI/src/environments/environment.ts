export const environment = {

  production: true,

  // TODO: make sure you have the correct region
  region: 'us-east-1',


  // TODO: This id can be retrieved in output section of the cognito ui
  // cloud formation stack.
  cognitoIdentityPoolId: 'us-east-1:30af43f1-e409-43b8-aba4-a1e03922e871',

  // TODO: Facebook app id can be retrieved from the application in your
  // facebook developer account.
  facebookAppId: '1748873089270065',

  // TODO: The API URL is available in the API Gateway console under Stage
  // NOTE: don't forget trailing "/"  For example:
  // https://api.example.com/prod/
  ticketAPI: 'api.unchartedbigdata.net'

};
