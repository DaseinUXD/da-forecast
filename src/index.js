import DarkSkyApi from 'dark-sky-api';

DarkSkyApi.apiKey = '0ab072376462dd056d5a7f08c9c344a6';

DarkSkyApi.loadCurrent()
.then(result => console.log(result));