import { DatabaseClassic } from './db/database-classic';
import './module_a';

const dataBaseClassic = DatabaseClassic.getInstance();
dataBaseClassic.add({ name: 'Matheus', age: 25 });
dataBaseClassic.add({ name: 'Victor', age: 29 });
dataBaseClassic.add({ name: 'Giovanna', age: 24 });
dataBaseClassic.show();
