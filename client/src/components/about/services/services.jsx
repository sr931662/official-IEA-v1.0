import React from 'react'
import styles from './services.module.css'
import { getImageUrl } from '../../../utils'

const Service = ({ isSun, toggleTheme }) => {

    const cl = isSun ? styles.cc_light_isSun : styles.cc_light;
    const pb_color = isSun ? styles.paragraph_bigger_isSun : styles.paragraph_bigger;
    const pl_color = isSun ? styles.paragraph_light_isSun : styles.paragraph_light;
    const divi = isSun ? styles.divider_isSun : styles.divider

    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <div className={styles.section_heading_wrap}>
                    <div className={`${styles.label} ${cl}`}>What we are best at</div>
                    <h2 className={styles.header2}>Our Services</h2>
                </div>
                <div className={`${styles.w_layout_grid} ${styles.our_services_grid}`}>
                    <div id={styles.id_118e6}>
                        <img src={getImageUrl("building.gif")} alt="" width="50" className={styles.service_icon} />
                        <div className={pb_color}>Architectural Design</div>
                        <div className={pl_color}>Our team of visionary architects transforms concepts into captivating designs. From residential spaces that reflect your lifestyle to commercial structures that captivate clients, we bring your vision to life with creativity, precision, and functionality.</div>
                    </div>

                    <div id={styles.id_118ec}>
                        <img src={getImageUrl("engineer.gif")} alt="" width="50" className={styles.service_icon} />
                        <div className={pb_color}>Civil Engineering</div>
                        <div className={pl_color}>Navigate the complexities of infrastructure development with our experienced civil engineering team. We specialize in site planning, structural design, and project management, ensuring that every element aligns seamlessly for a robust and enduring result.</div>
                    </div>
                    
                    <div id={styles.id_118f2}>
                        <img src={getImageUrl("bricks.gif")} alt="" width="50" className={styles.service_icon} />
                        <div className={pb_color}>Construction Management</div>
                        <div className={pl_color}>Entrust your project to our seasoned construction management professionals. We oversee every aspect of the construction process, from scheduling and budgeting to quality control, ensuring that your project is delivered on time and within budget.</div>
                    </div>

                    <div id={styles.id_118f8}>
                        <img src={getImageUrl("plan.gif")} alt="" width="50" className={styles.service_icon} />
                        <div className={pb_color}>Sustainable Design</div>
                        <div className={pl_color}>Embrace a greener future with our sustainable design solutions. We integrate eco-friendly practices into our designs, optimizing energy efficiency, minimizing environmental impact, and creating spaces that contribute to a sustainable world.</div>
                    </div>

                    <div id={styles.id_118fe}>
                        <img src={getImageUrl("map.gif")} alt="" width="50" className={styles.service_icon} />
                        <div className={pb_color}>Interior Design</div>
                        <div className={pl_color}>Elevate your space with our expert interior design services. Our team combines aesthetics and functionality to create interiors that not only complement the architecture but also enhance the overall user experience.</div>
                    </div>

                    <div id={styles.id_11905}>
                        <img src={getImageUrl("crane.gif")} alt="" width="50" className={styles.service_icon} />
                        <div className={pb_color}>Renovation and Restoration</div>
                        <div className={pl_color}>Breathe new life into existing structures with our renovation and restoration expertise. Whether preserving historical charm or modernizing outdated spaces, we approach each project with respect for the past and a vision for the future.</div>
                    </div>
                </div>
            </div>
            <div className={divi}></div>
        </div>
    )
}

export default Service