export const userConstants = {
    REGISTER_REQUEST: 'USERS_REGISTER_REQUEST',
    REGISTER_SUCCESS: 'USERS_REGISTER_SUCCESS',
    REGISTER_FAILURE: 'USERS_REGISTER_FAILURE',

    LOGIN_REQUEST: 'USERS_LOGIN_REQUEST',
    LOGIN_SUCCESS: 'USERS_LOGIN_SUCCESS',
    LOGIN_FAILURE: 'USERS_LOGIN_FAILURE',
    
    LOGOUT: 'USERS_LOGOUT',

    GETALL_REQUEST: 'USERS_GETALL_REQUEST',
    GETALL_SUCCESS: 'USERS_GETALL_SUCCESS',
    GETALL_FAILURE: 'USERS_GETALL_FAILURE',

    DELETE_REQUEST: 'USERS_DELETE_REQUEST',
    DELETE_SUCCESS: 'USERS_DELETE_SUCCESS',
    DELETE_FAILURE: 'USERS_DELETE_FAILURE'    
};

export const users = [
    {
      "firstName":"peter",
      "lastName":"Parker",
      "username":"peter",
      "password":"eyJhbGci",
      "id":1
    },
    {
      "firstName":"clark",
      "lastName":"methew",
      "username":"clark",
      "password":"xAQK_ZXw",
      "id":2
    }
  ];

export const Projects = [
  {
    "title": "ProWorkflow Kickoff Event",
    "number": "1136",
    "company": {
      "name": "A Big Company"
    },
    "startdate": "2018-07-16",
    "duedate": "2018-12-20",
    "manager": {
      "fullname": "Peter Parker"
    },
    "timeallocated": 120,
    "priority": 1,
    "description": ""
  },
  {
    "title": "Brochure for Widgets Inc",
    "number": "1148",
    "company": {
      "name": "Widgets Inc"
    },
    "startdate": "2018-11-16",
    "duedate": "",
    "manager": {
      "fullname": "Peter Parker"
    },
    "timeallocated": 0,
    "priority": 3,
    "description": "New brochure design, please use the attached styles.<br/>Mark will need to be updated weekly on progress."
  },
  {
    "title": "Website redesign for A Big Company",
    "number": "1147",
    "company": {
      "name": "A Big Company"
    },
    "startdate": "",
    "duedate": "2019-02-16",
    "manager": {
      "fullname": "Peter Parker"
    },
    "timeallocated": 600,
    "priority": 5,
    "description": ""
  },
  {
    "title": "Leaflet for ACME",
    "number": "1152",
    "company": {
      "name": "ACME"
    },
    "startdate": "2018-09-03",
    "duedate": "",
    "manager": {
      "fullname": "Clark Kent"
    },
    "timeallocated": 1200,
    "priority": 4,
    "description": "Launching new line of <em>Road Runner</em> elimination devices. Please ensure W. Coyote is cc'ed on all messages."
  },
  {
    "title": "Server installation for A Big Company",
    "number": "1157",
    "company": {
      "name": "A Big Company"
    },
    "startdate": "",
    "duedate": "",
    "manager": {
      "fullname": "Peter Parker"
    },
    "timeallocated": 600,
    "priority": 1,
    "description": ""
  },
  {
    "title": "Mobile application for Stark Industries",
    "number": "1158",
    "company": {
      "name": "Stark Industries"
    },
    "startdate": "2019-01-01",
    "duedate": "",
    "manager": {
      "fullname": "Peter Parker"
    },
    "timeallocated": 600,
    "priority": 2,
    "description": "Please use codename 'Fe' in all internal communications."
  },
  {
    "title": "Excavation work for Wayne Enterprises",
    "number": "1159",
    "company": {
      "name": "Wayne Enterprises"
    },
    "startdate": "2019-01-01",
    "duedate": "2019-12-31",
    "manager": {
      "fullname": "Peter Parker"
    },
    "timeallocated": 6000,
    "priority": 5,
    "description": ""
  },
  {
    "title": "Review yearly results",
    "number": "1169",
    "company": {
      "name": "Loop Inc"
    },
    "startdate": "2018-12-31",
    "duedate": "2018-12-31",
    "manager": {
      "fullname": "Peter Parker"
    },
    "timeallocated": 600,
    "priority": 1,
    "description": "Please ensure all managers attend:<br><br><ul><li>Alfred</li><li>Charles</li><li>Emma</li><li>Mark</li><li>Robert</li></ul>"
  }

]

