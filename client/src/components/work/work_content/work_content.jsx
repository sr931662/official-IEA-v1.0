import React from 'react'
import styles from './work_content.module.css'
import { getImageUrl } from '../../../utils'
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Work_content = ({ isSun, toggleTheme }) => {
    const div_color = isSun ? styles.divider_isSun : styles.divider
    return(
        <>            
            <div className={styles.section}>
                <div className={styles.container}>
                    <div className={div_color}></div>
                    <div className={`${styles.w_layout_grid} ${styles.project_details_grid}`}>
                        <div className={styles.details_wrap}>
                            <div className={isSun ? styles.label_isSun : styles.label}>DESCRIPTION</div>
                            <div className={isSun ? styles.header_paragraph_light_isSun : styles.header_paragraph_light}>Welcome to our portfolio, where we showcase the diverse range of projects we've brought to life. With over two decades of experience, we pride ourselves on delivering excellence across various civil engineering and architectural domains. Each project tells a story of our dedication to quality, innovation, and client satisfaction.</div>
                        </div>
                    </div>
                    <div className={div_color}></div>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.container}>

                    <div className={isSun ? styles.section_heading_wrap_isSun : styles.section_heading_wrap}>
                        <div className={`${styles.label} ${isSun ? styles.cc_light_isSun : styles.cc_light}`}>Our Work</div>
                        <h2>Team Projects</h2>
                    </div>
                    {/* Residential House */}
                    <div className={`${styles.w_layour_grid} ${styles.projects_grid}`}>
                        <div id={styles.id_38cdc}>
                            <Link to="/work/residential-houses" className={`${styles.project_cover_link} ${styles.w_inline_block}`}>
                                <img src={getImageUrl('resid.jpg')} alt=""  className={styles.project_cover_pic} />
                            </Link>
                            <div className={styles.project_name_wrap}>
                                <Link to="/work/residential-houses" className={isSun ? styles.project_name_link_isSun : styles.project_name_link}>Residential House Projects</Link>
                                <div className={isSun ? styles.paragraph_light_isSun : styles.paragraph_light}>Creating homes that merge aesthetics, functionality, and durability, our residential projects are designed to be lived in and loved. From modern villas to compact urban homes, we bring your vision to life with meticulous planning and attention to detail.</div>
                            </div>
                        </div>
                    </div>
                    {/* Commercial House */}
                    <div className={`${styles.w_layour_grid} ${styles.projects_grid}`}>
                        <div id={styles.id_38cdc}>
                            <Link to="/work/commercial-houses" className={`${styles.project_cover_link} ${styles.w_inline_block}`}><img src={getImageUrl('Innovative design.jpg')} alt=""  className={styles.project_cover_pic} /></Link>
                            <div className={styles.project_name_wrap}>
                                <Link to="/work/commercial-houses" className={isSun ? styles.project_name_link_isSun : styles.project_name_link}>Commercial House Projects</Link>
                                <div className={isSun ? styles.paragraph_light_isSun : styles.paragraph_light}>From office complexes to retail centers, our commercial projects are crafted to boost business productivity and client engagement. We focus on functionality, aesthetics, and sustainability to deliver spaces that meet the demands of modern commerce.</div>
                            </div>
                        </div>
                    </div>

                    {/* Commercial Infrastructure */}
                    <div className={`${styles.w_layour_grid} ${styles.projects_grid}`}>
                        <div id={styles.id_38cdc}>
                            <Link to="/work/commercial-infrastructure" className={`${styles.project_cover_link} ${styles.w_inline_block}`}><img src={getImageUrl('commercial house.jpg')} alt=""  className={styles.project_cover_pic} /></Link>
                            <div className={styles.project_name_wrap}>
                                <Link to="/work/commercial-infrastructure" className={isSun ? styles.project_name_link_isSun : styles.project_name_link}>Commercial Infrastructure Projects</Link>
                                <div className={isSun ? styles.paragraph_light_isSun : styles.paragraph_light}>Our commercial infrastructure projects include a wide array of facilities, from industrial complexes to logistic hubs. We understand the complexities involved and aim to provide solutions that maximize efficiency and functionality.</div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Hospitals */}
                    <div className={`${styles.w_layour_grid} ${styles.projects_grid}`}>
                        <div id={styles.id_38cdc}>
                            <Link to="/work/hospital" className={`${styles.project_cover_link} ${styles.w_inline_block}`}><img src={getImageUrl('hospital.jpg')} alt=""  className={styles.project_cover_pic} /></Link>
                            <div className={styles.project_name_wrap}>
                                <Link to="/work/hospital" className={isSun ? styles.project_name_link_isSun : styles.project_name_link}>Hospital Projects</Link>
                                <div className={isSun ? styles.paragraph_light_isSun : styles.paragraph_light}>Our hospital projects are designed with a focus on patient care, safety, and operational efficiency. Each healthcare facility is tailored to provide a safe and healing environment for patients while supporting the functional needs of medical professionals.</div>
                            </div>
                        </div>
                    </div>

                    {/* Land Development */}
                    <div className={`${styles.w_layour_grid} ${styles.projects_grid}`}>
                        <div id={styles.id_38cdc}>
                            <Link to="/work/land-development" className={`${styles.project_cover_link} ${styles.w_inline_block}`}><img src={getImageUrl('land dev.jpg')} alt=""  className={styles.project_cover_pic} /></Link>
                            <div className={styles.project_name_wrap}>
                                <Link to="/work/land-development" className={isSun ? styles.project_name_link_isSun : styles.project_name_link}>Land Development Projects</Link>
                                <div className={isSun ? styles.paragraph_light_isSun : styles.paragraph_light}>From concept to completion, our land development projects lay the groundwork for thriving communities. Whether it’s residential communities, commercial areas, or mixed-use developments, we ensure every detail aligns with long-term sustainability and functionality.</div>
                            </div>
                        </div>
                    </div>

                    {/* Flyover Infrastructure */}
                    <div className={`${styles.w_layour_grid} ${styles.projects_grid}`}>
                        <div id={styles.id_38cdc}>
                            <Link to="/work/flyover-infrastructure" className={`${styles.project_cover_link} ${styles.w_inline_block}`}><img src={getImageUrl('flyover.jpg')} alt=""  className={styles.project_cover_pic} /></Link>
                            <div className={styles.project_name_wrap}>
                                <Link to="/work/flyover-infrastructure" className={isSun ? styles.project_name_link_isSun : styles.project_name_link}>Flyover Infrastructure Projects</Link>
                                <div className={isSun ? styles.paragraph_light_isSun : styles.paragraph_light}>Our flyover projects address the growing need for efficient transportation infrastructure. We take pride in designing and constructing durable, high-capacity flyovers that ease traffic flow and improve connectivity.</div>
                            </div>
                        </div>
                    </div>

                    {/* Educational Institutes */}
                    <div className={`${styles.w_layour_grid} ${styles.projects_grid}`}>
                        <div id={styles.id_38cdc}>
                            <Link to="/work/educational-institutes" className={`${styles.project_cover_link} ${styles.w_inline_block}`}><img src={getImageUrl('edu.jpg')} alt=""  className={styles.project_cover_pic} /></Link>
                            <div className={styles.project_name_wrap}>
                                <Link to="/work/educational-institutes" className={isSun ? styles.project_name_link_isSun : styles.project_name_link}>Educational Institute Projects</Link>
                                <div className={isSun ? styles.paragraph_light_isSun : styles.paragraph_light}>We believe in building educational spaces that inspire learning and foster growth. Our educational institute projects are designed to provide safe, engaging, and adaptable environments for students, faculty, and staff.</div>
                            </div>
                        </div>
                    </div>
                    <div className={div_color}></div>
                </div>
            </div> 
        </>
    )
}
export default Work_content
