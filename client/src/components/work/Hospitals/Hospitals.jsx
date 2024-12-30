import React from 'react'
import styles from './Hospitals.module.css'
import { getImageUrl } from '../../../utils'

const Hospitals = ({ isSun, toggleTheme }) => {
    const div_color = isSun ? styles.divider_isSun : styles.divider
    return (
        <div>
            <div>
                <div className={`${styles.section} ${styles.cc_home_wrap}`}>
                    <div className={styles.project_overview_header}>
                        <div className={styles.intro_content}>
                            <div className={styles.heading_jumbo}>Hospitals</div>
                        </div>
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
                                <div className={isSun ? styles.paragraph_light_isSun : styles.paragraph_light}>Welcome to our Residential House Projects Album, where architectural excellence meets the warmth of home. Explore our portfolio of thoughtfully crafted residences, each telling a unique story of design innovation and personalized living. Click on any project to dive into the details and discover what makes each home a masterpiece.</div>
                            </div>
                            
                            <div className={styles.details_wrap}>
                                <div className={isSun ? styles.label_isSun : styles.label}>Explore more Residential House Projects</div>
                                <div className={isSun ? styles.paragraph_light_isSun : styles.paragraph_light}>Click on any project below to explore it's unique features, design elements, and the stories behind the homes. Find inspiration for your dream residence and discover the possibilites of personalized living.</div>
                            </div>

                            <div className={styles.details_wrap}>
                                <div className={isSun ? styles.label_isSun : styles.label}>Ready to begin your home's story?</div>
                                <div className={isSun ? styles.paragraph_light_isSun : styles.paragraph_light}>If you're ready to embark on the journey of creating your dream home, contact Indraprastha Engineers & Architects. Our team is passionate about turning visions into reality, and we're excited to discuss how we can bring your residential dreams to life.</div>
                            </div>
                        </div>

                        <div id={styles.id_387928}>
                            <div className={styles.details_wrap}>
                                <div className={isSun ? styles.label_isSun : styles.label}>what's included in our residential house project series?</div>
                                <div className={isSun ? styles.paragraph_light_isSun : styles.paragraph_light}>Our Residential House Projects Series is curated with a focus on : </div>
                                <ul>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Tailored Designs : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Every project is approached with a customized design philosophy, ensuring that each residence reflects the unique preferences and lifestyle of its occupants.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Functionality & Aesthetics : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>We strike the perfect balance between functionality and aesthetics, creating homes that are not only visually stunning but also designed for practical living.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Sustainability : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>Our commitment to sustainable practices is evident in each project. We incorporate eco-friendly materials and enegry-efficient solutions to minimize environmental impact.</p></li>
                                    <li><strong className={isSun ? styles.sub_label_isSun : styles.sub_label}>Client Collaboration : </strong><p className={isSun ? styles.sub_li_isSun : styles.sub_li}>We believe in collaborative design. Our client's input is invaluable, and we work closely with them to bring their visions to life.</p></li>
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
                    <div className={`${styles.w_layout_grid} ${styles.project_gallery_grid}`}>
                        <div id={styles.id_01}>
                            <div className={isSun ? styles.card_isSun : styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div id={styles.id_02}>
                            <div className={isSun ? styles.card_isSun : styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_03}>
                            <div className={isSun ? styles.card_isSun : styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('resid.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div id={styles.id_04}>
                            <div className={isSun ? styles.card_isSun : styles.card}>
                                <div className={styles.cont}><img src={getImageUrl('pic3.jpg')} alt="" className={styles.image} /></div>
                                <div className={styles.paragraph_light}>
                                    <ul>
                                        <li><strong>Owner : </strong><p>Mr. Saurabh</p></li>
                                        <li><strong>Location : </strong><p>Barabanki</p></li>
                                        <li><strong>Duration : </strong><p>1 year</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={div_color}></div>
                </div>
            </div>
        </div>
        
    )
}

export default Hospitals