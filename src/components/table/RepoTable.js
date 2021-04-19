import React from 'react'
import { motion } from 'framer-motion';
import './table.css'
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
    console.log(props.repos, "this is coming from repo table")
    return (
        <>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Created</th>
                    <th>Name</th>
                    <th>Language</th>
                    <th>Last Updated</th>
            
                </tr>
            </thead>
        <div id="repoTableContainer" className="table--container"
            style={{ marginTop: '35px', height: '250px', overflowY: 'scroll' }}>
            <table id="repoTable" >
                <tbody>
                    {
                        props.repos.map((repo, idx) => {
                            console.log(repo)
                            return (
                                <motion.tr key={idx}>
                                    <td>{idx}.</td>
                                    <td>{toShortDate(repo.created_at)}</td>
                                    <td className="repo-URL">
                                        <a  target="_blank" rel="noopener noreferrer" href={repo.html_url}>
                                            {repo.name}
                                        </a>
                                    </td>
                                    <td>
                                        <p target="_blank" rel="noopener noreferrer">
                                            {repo.language}
                                        </p>
                                    </td>
                                    <td>
                                    <p target="_blank" rel="noopener noreferrer">
                                            {toShortDate(repo.updated_at)}
                                        </p>
                                    </td>
                                </motion.tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
        </>
    )
}