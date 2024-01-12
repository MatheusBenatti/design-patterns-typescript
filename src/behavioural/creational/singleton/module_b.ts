import { DatabaseModule } from './db/database-module';
import { dataBaseClassic as dataBaseA } from './module_a';

const dataBaseClassic = DatabaseModule;
dataBaseClassic.add({ name: 'Matheus', age: 25 });
dataBaseClassic.add({ name: 'Victor', age: 29 });
dataBaseClassic.add({ name: 'Giovanna', age: 24 });
dataBaseClassic.show();

console.log(dataBaseClassic === dataBaseA);
