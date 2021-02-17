import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();

console.log('user: ', user);
console.log('company: ', company);

new CustomMap('map');
