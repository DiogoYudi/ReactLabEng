import { people } from './data.js';
import { getImageUrl } from './utils';

export default function List(){
    let chemists = people.filter(person => person.profession === 'chemist');
    let listItems = chemists.map(person =>
        <li>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                know for {person.accomplishment}
            </p>
        </li>
    );
    return <ul>{listItems}</ul>;
}