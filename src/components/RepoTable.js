import React from 'react'
import {motion} from 'framer-motion';
export const RepoTable = (props) => {
    
    const toShortDate = (date) => {
        var d = new Date(date)

        let month = d.getMonth();
        month = (month + 1).toString();

        let year = d.getFullYear().toString().substr(-2);
        return `${month}/${year}`

    }

    const dateCompare = (a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
    }
console.log(props.repos,"this is coming from repo table")
    return (
        <div id="repoTableContainer"
            style={{ marginTop: '85px', height: '500px', overflowY: 'scroll' }}>
            
            <table id="repoTable" >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Created</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        props.repos.map((repo, idx) => {
                            return (
                                <motion.tr key={idx}>
                                    <td>{idx}.</td>
                                    <td>{toShortDate(repo.created_at)}</td>
                                    <td>
                                        <a target="_blank" rel="noopener noreferrer" href={repo.html_url}>
                                            {repo.name}
                                        </a>
                                    </td>
                                    <td>
                                        
                                    </td>
                                </motion.tr>)
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}