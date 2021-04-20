import React from 'react'
import { motion } from 'framer-motion';
import {toShortDate} from '../../helpers/dataHelper'
import './table.css'
export const RepoTable = (props) => {

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