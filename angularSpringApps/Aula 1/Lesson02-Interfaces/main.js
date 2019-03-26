"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./../Lesson01-Classes/person");
var person_dao_1 = require("./person-dao");
var personDao = new person_dao_1.PersonDao();
var person = new person_1.Person('Fulano');
personDao.insert(person);
//# sourceMappingURL=main.js.map