export function Profile(){
    return(
        <img
            src='https://i.imgur.com/yXOvdOSs.jpg'
            alt="Wut?"
        />
    );
}

export default function Gallery(){
    return(
        <section>
            <h1>Amazing</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );
}