import Avatar from './Avatar.js';

function Card({ children }){
    return(
        <div className="card">
            {children}
        </div>
    );
}

export default function Profile(){
    return(
        <Card>
            <Avatar
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
            />
        </Card>
    );
}

export function getImageUrl(person, size = 's'){
    return(
        'https://i.imgur.com/' +
        person.imageId +
        size +
        '.jpg'
    );
}