import './learningGit.css';
import SearchBar from './SearchBar';

export default function LearingGit() {
    return(
        <div className='learning'>
            <SearchBar />
            <h1>Getting started with Git and Github</h1>
            <h3>Git and Github are two different things.</h3>
            <ul>
                <li>Git is a vesion control system.</li>
                <li>git helps you keep track of code changes.</li>
                <li>Github is a platform and cloud-based service based on Git.</li>
                <li>Git is used to collaborate on code.</li>
            </ul>
        </div>
    )
}