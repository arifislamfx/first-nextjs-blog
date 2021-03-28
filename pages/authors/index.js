import Link from 'next/link'
import {developer__list, developer} from '../../styles/About.module.css'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { users: data}
    }
}

const authors = ({users }) => {
    return (
        <div>
            <h1 className={developer__list}>Here is Our Developer</h1>
            {
                users.map (user => (
                    <Link href = { '/authors/' + user.id} key={user.id}>
                        <a>
                            <h3 className={developer}>{user.name}</h3>
                        </a>
                    </Link>
                ))
            }
        </div>
    )
}

export default authors
