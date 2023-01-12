import React from 'react'

export const Skill = () => {
    return (
        <div className='section-skill'>
            <h1 className='section-title' id='skill'>Skill</h1>
            <div className='skill'>
                
                {/* <div className='skills'> */}
        {/* Design */}
                <div className='card-top'>
                    <div className='skill-desc'>
                        <h3>Design/Coding</h3>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th scope='col'>技術</th>
                                    <th scope='col'>経験年数</th>
                                    <th scope='col'>スキル</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope='row'>HTML</th>
                                    <td>１年未満</td>
                                    <td>
                                        <span className='rating-html'></span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope='row'>CSS</th>
                                    <td>１年未満</td>
                                    <td>
                                        <span className='rating-css'></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                    
        {/* FrontEnd */}
                <div className='card'>
                    <div className='skill-desc'>
                        <h3>Frontend</h3>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th scope='col'>技術</th>
                                    <th scope='col'>経験年数</th>
                                    <th scope='col'>スキル</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope='row'>JavaScript</th>
                                    <td>１年未満</td>
                                    <td>
                                        <span className='rating-js'></span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope='row'>React</th>
                                    <td>１年未満</td>
                                    <td>
                                        <span className='rating-react'></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                    
        {/* BackEnd */}
                <div className='card'>
                    <div className='skill-desc'>
                        <h3>Backend</h3>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th scope='col'>技術</th>
                                    <th scope='col'>経験年数</th>
                                    <th scope='col'>スキル</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope='row'>Laravel (5,9)</th>
                                    <td>１年未満</td>
                                    <td>
                                        <span className='rating-laravel'></span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope='row'>----</th>
                                    <td>----</td>
                                    <td>
                                        <span className='rating-css'></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                    
        {/* DB */}
                <div className='card'>
                    <div className='skill-desc'>
                        <h3>DB</h3>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th scope='col'>技術</th>
                                    <th scope='col'>経験年数</th>
                                    <th scope='col'>スキル</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope='row'>MySQL</th>
                                    <td>1年</td>
                                    <td>
                                        <span className='rating-mysql'></span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope='row'>Postgres</th>
                                    <td>2年</td>
                                    <td>
                                        <span className='rating-postgres'></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                    
        {/* Server */}
                <div className='card'>
                    <div className='skill-desc'>
                        <h3>Server</h3>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th scope='col'>技術</th>
                                    <th scope='col'>経験年数</th>
                                    <th scope='col'>スキル</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope='row'>xServer</th>
                                    <td>１年未満</td>
                                    <td>
                                        <span className='rating-xserv'></span>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope='row'>AWS</th>
                                    <td>１年未満</td>
                                    <td>
                                        <span className='rating-aws'></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}