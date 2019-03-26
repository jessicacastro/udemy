import { Person } from './../Lesson01-Classes/person';
import { PersonDao } from './person-dao';
import { DaoInterface } from './dao.interface';

let personDao: DaoInterface = new PersonDao();
let person: Person = new Person('Fulano');

personDao.insert(person);