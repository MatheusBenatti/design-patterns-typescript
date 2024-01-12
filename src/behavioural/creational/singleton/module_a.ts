import { DatabaseModule } from './db/database-module';

const dataBaseClassic = DatabaseModule;
dataBaseClassic.add({ name: 'Kiryu', age: 37 });
dataBaseClassic.add({ name: 'Goro', age: 41 });
dataBaseClassic.add({ name: 'Ichiban', age: 42 });
dataBaseClassic.remove(1); // remove Goro

export { dataBaseClassic };
