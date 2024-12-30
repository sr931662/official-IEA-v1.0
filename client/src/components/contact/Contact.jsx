// import React from "react";
// import styles from './Contact.module.css';
// import { getImageUrl } from "../../utils";
// import { ProjectName } from "../../../public/js/currDate";

// const Contact = ({ isSun, toggleTheme }) => {
//     const bodyBackgroundColor = isSun ? 'black': 'white';
//     document.body.style.backgroundColor = bodyBackgroundColor;
//     const back_set = isSun ? styles.contact_us_form : styles.contact_us_form_sun;
//     const label_set = isSun ? styles.label : styles.label_sun;
//     const input_set = isSun ? styles.input_sun : styles.input;
//     const select_set = isSun ? styles.select_sun : styles.select;
//     const middleHead = isSun ? styles.midhead_sun : styles.midhead;
//     const file_set = isSun ? styles.file_sun : styles.file;
//     return(
//         <div className={`${styles.section} ${styles.cc_home_wrap}`}>
//             <div className={`${styles.intro_header} ${styles.cc_subpage}`}>
//                 <div className={styles.intro_content}>
//                     <div className={styles.heading_jumbo}>
//                         CONTACT<br/>US
//                     </div>
//                     <div className={`${styles.paragraph_bigger} ${styles.cc_bigger_white_light}`}>
//                         WE CAN HELP YOU WITH YOUR QUERIES, AND PROJECTS
//                     </div>
//                 </div>
//             </div>

//             <div className={styles.container}>
//                 <h1>Project Registration Form</h1>
//                 <div className={styles.project_info}>
//                     <form action="https://api.web3forms.com/submit" method="POST" className={styles.project_info}>
//                         <input type="hidden" name="access_key" value="19ac34db-184f-43ae-8f08-56aa15b7d7b4" />
//                         <h2 className={middleHead}>Client Information</h2>
//                         <div className={styles.component}>
//                             <label htmlFor="fullName" className={label_set}>Full Name:</label>
//                             <input type="text" id="fullName" className={input_set} name="fullName" required />

//                             <label htmlFor="phone" className={label_set}>Phone Number:</label>
//                             <input type="text" id="phone" className={input_set} name="phone" required />

//                             <label htmlFor="email" className={label_set}>Email ID:</label>
//                             <input type="email" id="email" className={input_set} name="email" required />
//                             <label htmlFor="idProof" className={label_set}>Identification Proof:</label>
//                             <input type="file" id="idProof" name="idProof" className={file_set} required />
//                         </div>
//                     </form>
//                 </div>

//             </div>

//         </div>
//     )
// }

// export default Contact


















import React from "react";
import styles from './Contact.module.css';
import { getImageUrl } from "../../utils";
import { ProjectName } from "../../../public/js/currDate";

const Contact = ({ isSun, toggleTheme }) => {
    const bodyBackgroundColor = isSun ? 'black': 'white';
    document.body.style.backgroundColor = bodyBackgroundColor;
    const back_set = isSun ? styles.contact_us_form : styles.contact_us_form_sun;
    const label_set = isSun ? styles.label : styles.label_sun;
    const input_set = isSun ? styles.input_sun : styles.input;
    const select_set = isSun ? styles.select_sun : styles.select;
    const middleHead = isSun ? styles.midhead_sun : styles.midhead;
    const file_set = isSun ? styles.file_sun : styles.file;
    return(
        <div className={`${styles.section} ${styles.cc_home_wrap}`}>
            {/* <div className={styles.Contact}>
                <div className={`${styles.intro_content} ${styles.cc_homepage}`}>
                    <div className={styles.intro_text}>
                        <div className={styles.heading_jumbo}>
                            CONTACT<br/>US
                        </div>
                        <div className={`${styles.paragraph_bigger} ${styles.cc_bigger_white_light}`}>
                            WE CAN HELP YOU WITH YOUR QUERIES, AND PROJECTS
                        </div>
                    </div>
                </div>
            </div> */}
            <div className={`${styles.intro_header} ${styles.cc_subpage}`}>
                <div className={styles.intro_content}>
                    <div className={styles.heading_jumbo}>
                        CONTACT<br/>US
                    </div>
                    <div className={`${styles.paragraph_bigger} ${styles.cc_bigger_white_light}`}>
                        WE CAN HELP YOU WITH YOUR QUERIES, AND PROJECTS
                    </div>
                    {/* <div className={styles.heading_jumbo}>About Us<br/></div> */}
                </div>
            </div>

            <div className={styles.container}>
                <h1>Project Registration Form</h1>
                <div className={styles.project_info}>
                    <form action="https://api.web3forms.com/submit" method="POST" className={styles.project_info}>

                        <input type="hidden" name="access_key" value="19ac34db-184f-43ae-8f08-56aa15b7d7b4" />
                        <h2 className={middleHead}>Client Information</h2>
                        <div className={styles.component}>
                            <label htmlFor="fullName" className={label_set}>Full Name:</label>
                            <input type="text" id="fullName" className={input_set} name="fullName" required />

                            <label htmlFor="phone" className={label_set}>Phone Number:</label>
                            <input type="text" id="phone" className={input_set} name="phone" required />

                            <label htmlFor="email" className={label_set}>Email ID:</label>
                            <input type="email" id="email" className={input_set} name="email" required />

                            <label htmlFor="idProof" className={label_set}>Identification Proof:</label>
                            <input type="file" id="idProof" name="idProof" className={file_set} required />
                        </div>


                        <h2 className={middleHead}>Project Information</h2>
                        <div className={styles.component}>
                            <label for="projectType" className={label_set}>Project Type:</label>
                            <select id="projectType" className={select_set} name="projectType" required>
                                <option value="">--Select a Project Type--</option>
                                <option value="Residential House">Residential House</option>
                                <option value="Commercial House">Commercial House</option>
                                <option value="Commercial Infrastructure">Commercial Infrastructure</option>
                                <option value="Hospital">Hospital</option>
                                <option value="Educational Institute">Educational Institution</option>
                                <option value="Land Development">Land Development</option>
                                <option value="Flyover">Flyover</option>
                            </select>

                            <label for="projectLocation" className={label_set}>Project Location:</label>
                            <input type="text" id="projectLocation" className={input_set} name="projectLocation" required />

                            <label for="landOwnershipDocs" className={label_set}>Land Ownership Documents:</label>
                            <input type="text" id="landOwnershipDocs" className={input_set} name="landOwnershipDocs" required />

                            <label for="projectScope" className={label_set}>Project Scope:</label>
                            <textarea id="projectScope" className={input_set} name="projectScope" required></textarea>

                            <label for="estimatedBudget" className={label_set}>Estimated Budget:</label>
                            <input type="number" className={input_set} id="estimatedBudget" name="estimatedBudget" required />
                        </div>


                        <h2 className={middleHead}>Timeline and Milestones</h2>
                        <div className={styles.component}>
                            <label for="startDate" className={label_set}>Project Start Date:</label>
                            <input type="date" id="startDate" className={input_set} name="startDate" required />

                            <label for="completionDate" className={label_set}>Estimated Completion Date:</label>
                            <input type="date" id="completionDate" className={input_set} name="completionDate" required />

                            <label for="milestones" className={label_set}>Key Milestones and Deadlines:</label>
                            <textarea id="milestones" className={input_set} name="milestones" required></textarea>
                        </div>


                        {/* <button type="submit" className={styles.submit}>Submit</button>
                        </form> */}
                        {/* Submit Button */}
                        <button type="submit" className={styles.submit}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact


