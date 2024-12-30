import React, { useState } from 'react'
import styles from './residential.module.css'
import { getImageUrl } from '../../../utils'

const ITEMS_PER_PAGE = 10;

const Residential = ({ isSun, toggleTheme }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const residentialProjects = [
        // ... your project data here
        { id:'id_01', name: 'Project 1', image: 'resid.jpg', owner: 'Mr. Indrapal Singh', location: 'Barabanki', duration: '1 year' },
        { id:'id_01', name: 'Project 1', image: 'resid.jpg', owner: 'Mr. Indrapal Singh', location: 'Barabanki', duration: '1 year' },
        { id:'id_01', name: 'Project 1', image: 'resid.jpg', owner: 'Mr. Indrapal Singh', location: 'Barabanki', duration: '1 year' },
        { id:'id_01', name: 'Project 1', image: 'resid.jpg', owner: 'Mr. Indrapal Singh', location: 'Barabanki', duration: '1 year' },
        { id:'id_01', name: 'Project 1', image: 'resid.jpg', owner: 'Mr. Indrapal Singh', location: 'Barabanki', duration: '1 year' },
        { id:'id_01', name: 'Project 1', image: 'resid.jpg', owner: 'Mr. Indrapal Singh', location: 'Barabanki', duration: '1 year' },
    ];

    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentItems = residentialProjects.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(residentialProjects.length / ITEMS_PER_PAGE);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const div_color = isSun? styles.divider_isSun : styles.divider
    return(
        <div>
            <div className={`${styles.section} ${styles.cc_home_wrap}`}>
                <div className={styles.project_overview_header}>
                    <div className={styles.intro_content}>
                        <div className={styles.heading_jumbo}>Residential Houses</div>
                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <div className={styles.container}>
                    <div className={div_color}></div>
                    <div className={`${styles.w_layout_grid} ${styles.project_details_grid}`}>
                        <div id={styles.id_387918}>
                            <div className={styles.details_wrap}>
                                <div className={isSun ? styles.label_isSun : styles.label}>DESCRIPTION</div>
                                <div className={isSun ? styles.paragraph_light_isSun : styles.paragraph_light}>Welcome to the heart of our work—Residential Houses. Here, every project is a unique journey, where we blend your dreams with our expertise to build spaces that are more than just walls and roofs; they’re a canvas for your life’s most cherished moments. With over two decades of experience, we’ve learned that a home isn’t just about aesthetics—it’s about creating a sanctuary, a reflection of your lifestyle, and an investment in comfort, security, and memories.</div>
                            </div>
                            
                            {/* <div className={styles.details_wrap}>
                                <div className={isSun ? styles.label_isSun : styles.label}>Explore more Residential House Projects</div>
                                <div className={isSun ? styles.paragraph_light_isSun : styles.paragraph_light}>Click on any project below to explore it's unique features, design elements, and the stories behind the homes. Find inspiration for your dream residence and discover the possibilites of personalized living.</div>
                            </div>

                            <div className={styles.details_wrap}>
                                <div className={isSun ? styles.label_isSun : styles.label}>Ready to begin your home's story?</div>
                                <div className={isSun ? styles.paragraph_light_isSun : styles.paragraph_light}>If you're ready to embark on the journey of creating your dream home, contact Indraprastha Engineers & Architects. Our team is passionate about turning visions into reality, and we're excited to discuss how we can bring your residential dreams to life.</div>
                            </div> */}
                            <div className={styles.details_wrap}>
                                <div className={isSun ? styles.label_isSun : styles.label}>Why Choose Us to Build Your Dream Home?</div>
                                <div className={isSun ? styles.paragraph_light_isSun : styles.paragraph_light}>When you choose us, you’re not just hiring a construction team; you’re gaining a partner in your journey to create a lifetime sanctuary. Here’s what sets us apart: </div>
                                {/* <br /> */}
                                {/* <strong className={isSun ? styles.label_isSun : styles.label}>How we Work : </strong> */}
                                <ul>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Experienced and Passionate Team : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>With years of experience, our team has the expertise to handle diverse and complex projects while staying committed to your vision.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Client-Centric Collaboration : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>We believe in open dialogue, keeping you in the loop at every stage to ensure your ideas are incorporated into the design.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Innovative, Functional Design : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Our approach combines the latest trends and timeless aesthetics, balancing beauty with practicality for a space that’s both elegant and functional.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Eco-Friendly Practices : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Building a home doesn’t mean compromising the environment. We use sustainable materials and energy-efficient solutions to ensure your home is future-ready.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Punctual and Reliable : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Your time is valuable, and so is ours. Our project managers work diligently to deliver on time, providing transparency at every step.</p></li>
                                </ul>
                            </div>
                        </div>

                        <div id={styles.id_387928}>
                            <div className={styles.details_wrap}>
                                <div className={isSun ? styles.label_isSun : styles.label}>Our Promise: Building Dreams with Precision and Heart</div>
                                <div className={isSun ? styles.paragraph_light_isSun : styles.paragraph_light}>We know how important your home is to you. That’s why our approach is rooted in listening, planning, and perfecting every detail to bring your vision to life. We partner closely with you from day one, ensuring that every aspect of your dream home aligns with your vision and values. </div>
                                <br />
                                <strong className={isSun ? styles.label_isSun : styles.label}>How we Work : </strong>
                                <ul>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Listening to Your Vision : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Your ideas, inspirations, and needs are at the heart of our design process. Our first step is a personalized consultation, where we take the time to understand your lifestyle, preferences, and budget, ensuring the foundation of a truly tailored project..</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Detailed Site Analysis : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Every piece of land has a story. Our team conducts a thorough site analysis to optimize natural elements like sunlight, views, and space, creating a design that perfectly blends with its surroundings while meeting all regulatory requirements.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Designing Your Dream : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>This is where the magic begins. With expert architects and designers by your side, we craft a home that not only looks stunning but flows seamlessly. From the layout and materials to the fine details, every choice is made with care to ensure a harmonious living space..</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Building with Quality and Precision : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Our construction phase is where your vision comes to life. With quality materials and skilled workmanship, we’re dedicated to creating homes that last, focusing on timely delivery without compromising on excellence.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Personalizing the Interiors : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Your home should feel like an extension of you. With custom interior solutions, we help you select everything from textures and colors to fixtures and furniture that echo your personal style, making your home uniquely yours.</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={div_color}></div>
                </div>
            </div>

            <div className={styles.section}>
                <div className={styles.container}>
                    <h1>Gallery</h1>
{/*                      */}{/* Display current items */}
{/*                     <div className={`${styles.w_layout_grid} ${styles.project_gallery_grid}`}> */}
{/*                         {currentItems.map((project, index) => ( */}
{/*                             <div key={index} className={styles.projectItem}> */}
{/*                                 <img src={getImageUrl(project.image)} alt={project.name} className={styles.projectImage} /> */}
{/*                                 <h2 className={isSun ? styles.projectName_isSun : styles.projectName}>{project.name}</h2> */}
{/*                                 <p className={isSun ? styles.projectDescription_isSun : styles.projectDescription}>{project.description}</p> */}
{/*                             </div> */}
{/*                         ))} */}
{/*                     </div> */}
                    {/* Display current items */}
                    <div className={`${styles.w_layout_grid} ${styles.project_gallery_grid}`}>
                        {currentItems.map((project, index) => (
                            <div key={index} className={isSun ? styles.card_isSun : styles.card}>
                                <div className={styles.cont}><img src={getImageUrl(project.image)} alt={project.name} className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                     <ul>
                                        <li><strong>Owner : </strong><p>{project.owner}</p></li>
                                        <li><strong>Location : </strong><p>{project.location}</p></li>
                                        <li><strong>Duration : </strong><p>{project.duration}</p></li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Pagination */}
                    <div className={styles.pagination}>
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i}
                                onClick={() => paginate(i + 1)}
                                className={currentPage === i + 1 ? styles.activePage : ''}>
                                {i + 1}
                            </button>
                        ))}
                    </div>
                    <div className={div_color}></div>
                </div>
            </div>
        </div>
    )
}

{/* <div className={styles.label}>What's included in our Residential House Projects Series?</div>
<div className={styles.paragraph_light}>It includes : </div>
<div className={styles.list}><ul>
    <li>Tailored Designs</li>
    </ul></div> */}

export default Residential