module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/testapi',
     handler: 'testapi.exampleAction',
     config: {
       policies: [],
       middlewares: [],
       "description": "a testemail api",
       "tag": {
         "plugin": "testapi",
         "name": "Testapi"
       }
     },
    },
  ],
};
