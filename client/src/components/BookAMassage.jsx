import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

const BookAMassage = () => {

    let history = useHistory();

    //make form fields controlled inputs by giving them their own state
    const [first_name, setfirst_name] = useState("")
    const [last_name, setlast_name] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [date_of_birth, setdate_of_birth] = useState(null)
    const [occupation, setOccupation] = useState("")
    const [doctor_name, setdoctor_name] = useState("")
    const [doctor_address, setdoctor_address] = useState("")
    const [service, setService] = useState("")
    const [reason_for_massage, setreason_for_massage] = useState("")
    const [other_hcp, setother_hcp] = useState("")
    const [massage_history, setmassage_history] = useState("")
    const [cardio_none, setcardio_none] = useState(false)
    const [high_blood_pressure, sethigh_blood_pressure] = useState(false)
    const [low_blood_pressure, setlow_blood_pressure] = useState(false)
    const [heart_attack, setheart_attack] = useState(false)
    const [vericose_veins, setvericose_veins] = useState(false)
    const [stroke, setstroke] = useState(false)
    const [pacemaker, setpacemaker] = useState(false)
    const [heart_disease, setheart_disease] = useState(false)
    const [resp_none, setresp_none] = useState(false)
    const [chronic_cough, setchronic_cough] = useState(false)
    const [bronchitis, setbronchitis] = useState(false)
    const [asthma, setasthma] = useState(false)
    const [emphysema, setemphysema] = useState(false)
    const [skin_conditions, setskin_conditions] = useState("")
    const [other_none, setother_none] = useState(false)
    const [diabetes, setDiabetes] = useState(false)
    const [epilepsy, setEpilepsy] = useState(false)
    const [cancer, setCancer] = useState(false)
    const [arthritis, setArthritis] = useState(false)
    const [chronic_headaches, setchronic_headaches] = useState(false)
    const [migraine_headaches, setmigraine_headaches] = useState(false)
    const [vision_loss, setvision_loss] = useState(false)
    const [hearing_loss, sethearing_loss] = useState(false)
    const [osteoporosis, setOsteoporosis] = useState(false)
    const [haemophilia, setHaemophilia] = useState(false)
    const [medical_conditions, setmedical_conditions] = useState("")
    const [loss_of_feeling, setloss_of_feeling] = useState("")
    const [allergies, setAllergies] = useState("")
    const [pregnant, setPregnant] = useState("")
    const [medications, setMedications] = useState("")
    const [glutes, setGlutes] = useState(false)
    const [inner_thighs, setinner_thighs] = useState(false)
    const [abdomen, setAbdomen] = useState(false)
    const [chest_wall, setchest_wall] = useState(false)
    const [all_areas, setall_areas] = useState(false)
    const [sensitiveAreas, setSensitiveAreas] = useState("")
    const [privacy_policy, setprivacy_policy] = useState(false)
    const [infectious_conditions, setinfectious_conditions] = useState("")
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [pronouns, setPronouns] = useState('')
    const [surgeries, setSurgeries] = useState('')
    const [injuries, setInjuries] = useState('')
    const [general_health, setgeneral_health] = useState('')
    const [date_updated, setDateUpdated] = useState('')

    const body = {first_name, last_name, email, password, other_hcp, service, reason_for_massage, cardio_none, high_blood_pressure, low_blood_pressure, heart_attack, vericose_veins, stroke, pacemaker, heart_disease, resp_none, chronic_cough, bronchitis, asthma, emphysema, skin_conditions, diabetes, epilepsy, cancer, arthritis, chronic_headaches, migraine_headaches, vision_loss, hearing_loss, osteoporosis, haemophilia, medical_conditions, loss_of_feeling, allergies, pregnant, medications, phone, date_of_birth, occupation, infectious_conditions, doctor_name, doctor_address, address, pronouns, injuries, surgeries, general_health }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch ("/api/1/clientprofiles", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            const parseRes = await response.json()
            localStorage.setItem("token", parseRes.token)
            history.push(`/massagedetails`)
            window.location = "/"
        } catch (err) {
            console.log(err)
        }
    }

    const privacyPolicy = () => {
        history.push(`/privacypolicy`)
    }

    return (
    //when adding a new field, remember to add it to 1 and 4 in server.js, as well as clientProfile.jsx list (if to be displayed)

        <div className="tm30 bm30">
            <div>
                <p>The information provided below will help me in treating you safely. All information you provide will be kept confidential in accordance with this <a onClick={privacyPolicy}>privacy policy</a> and will not be shared without your written consent, or as required by law. Information you submit will be encrypted and transferred through a secure network. ​</p>
            </div>
            <h3>Book a Massage</h3>
            <h4 className="ui dividing header">Contact Info</h4>
            <form className="ui form">
                <div className="field">
                    <label>date updated</label>
                    <input type="date" value={date_updated} onChange={e=>setDateUpdated(e.target.value)} />
                </div>
                <div className="two fields">
                    <div className="required field">
                        <label htmlFor="">First Name</label>
                        <input 
                            value={first_name} 
                            onChange={e=>setfirst_name(e.target.value)} 
                            type="text" name="first-name" 
                            placeholder="First Name"
                        />
                    </div>
                    <div className="required field">
                        <label htmlFor="">Last Name</label>
                        <input 
                            value={last_name} 
                            onChange={e=>setlast_name(e.target.value)} 
                            type="text" name="last-name" 
                            placeholder="Last Name"
                        />
                    </div>
                    <div className="field">
                        <label>Preferred pronouns</label>
                        <select value={pronouns} onChange={e=>setPronouns(e.target.value)} className="ui search dropdown" name="pronouns" placeholder="Pronouns">
                            <option value="they">They/them</option>
                            <option value="she">She/her</option>
                            <option value="he">He/him</option>
                            <option value="other">Other</option>
                            <option value="nopreference">No preference</option>       
                        </select>
                    </div>
                </div>
                <div className="two fields">
                    <div className="field">
                        <label>Address</label>
                        <input
                            value={address}
                            onChange={e=>setAddress(e.target.value)}
                            type="text"
                            placeholder="Street #, street name, city and province"
                        />
                    </div>
                    <div className="required field">
                        <label htmlFor="phone">Phone</label>
                        <input 
                            value={phone} 
                            onChange={e=>setPhone(e.target.value)} 
                            type="tel" 
                            placeholder="Telephone number" 
                        />
                    </div> 
                </div>
                <div className="two fields">
                    <div className="required field">
                        <label htmlFor="">Email</label>
                        <input value={email} onChange={e=>setEmail(e.target.value)} type="email" name="email" placeholder="This email will be used as your login and for correspondence"/>
                    </div>
                    <div className="required field">
                        <label htmlFor="">Password</label>
                        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" name="password" placeholder="This will be your password for logging into your account"/>
                    </div>           
                </div>
                <div className="two fields">
                    <div className="required field">
                        <label htmlFor="date_of_birth">Date of Birth</label>
                        <input value={date_of_birth} onChange={e=>setdate_of_birth(e.target.value)} type="date" name="date_of_birth"/>
                    </div>
                    <div className="required field">
                        <label htmlFor="occupation">Occupation</label>
                        <input value={occupation} onChange={e=>setOccupation(e.target.value)} type="text" />
                    </div>            
                </div>
                <h4 className="ui dividing header">Health History</h4>
                <div className="two fields">
                    <div className="required field">
                        <label htmlFor="reason_for_massage">What is your reason_for_massage for seeking Massage Therapy?</label>
                        <input value={reason_for_massage} onChange={e=>setreason_for_massage(e.target.value)}  type="text" name="reason_for_massage" placeholder="Eg. stress management, general wellbeing, pain/discomfort (please indicate areas affected)" />
                    </div>
                    <div className="required field">
                        <label>Service</label>
                        <select value={service} onChange={e=>setService(e.target.value)} className="ui search dropdown" name="service" placeholder="Service">
                            <option disabled value="">Select service</option>
                            <option value="90min">90 min massage ($135)</option>
                            <option value="75min">75 min massage ($115)</option>
                            <option value="60min">60 min massage ($95)</option>
                        </select>
                    </div>                        
                </div>
                <div className="two fields">
                    <div className="field">
                        <label htmlFor="other_hcp">Are you receiving any treatment from another health care provider?</label>
                        <input value={other_hcp} onChange={e=>setother_hcp(e.target.value)} type="text" name="other_hcp" placeholder="Please indicate type of treatment and provider"/>
                    </div>
                    <div className="field">
                        <label htmlFor="massage_history">Please describe your history with Massage Therapy</label>
                        <input value={massage_history} onChange={e=>setmassage_history(e.target.value)} type="text" name="massage_history" />
                    </div>
                </div>               
                <div className="two fields">
                    <div className="required field">
                        <label htmlFor="">Physician's Full Name</label>
                        <input value={doctor_name} onChange={e=>setdoctor_name(e.target.value)} type="text" name="doctor_name" placeholder=""/>
                    </div>
                    <div className="required field">
                        <label htmlFor="phone">Physician's Address</label>
                        <input value={doctor_address} onChange={e=>setdoctor_address(e.target.value)} type="text" placeholder="" />
                    </div>            
                </div>
                <div className="field">
                    <label>How would you describe your general health status?</label>
                    <input type="text" value={general_health} onChange={e=>setgeneral_health(e.target.value)} />
                </div>
                <div className="field">
                        <div className="field">
                            <label>Do you have any of the following medical conditions?</label>
                        </div>
                        <div className=" inline field">
                            <div className="ui checkbox" style={{marginRight: '1em'}}>
                                <input type="checkbox" checked={other_none} onChange={e=>{setother_none(e.target.checked)}} />
                                <label>None</label>
                            </div>
                            <div className="ui checkbox" style={{marginRight: "1em"}}>
                                <input type="checkbox" checked={diabetes} onChange={e=>{setDiabetes(e.target.checked)}} />
                                <label>Diabetes</label>
                            </div>
                            <div className="ui checkbox" style={{marginRight: "1em"}}>
                                <input type="checkbox" checked={epilepsy} onChange={e=>{setEpilepsy(e.target.checked)}} />
                                <label>Epilepsy</label>
                            </div>
                            <div className="ui checkbox" style={{marginRight: "1em"}}>
                                <input type="checkbox" checked={cancer} onChange={e=>{setCancer(e.target.checked)}} />
                                <label>Cancer</label>
                            </div>
                            <div className="ui checkbox" style={{marginRight: "1em"}}>
                                <input type="checkbox" checked={arthritis} onChange={e=>{setArthritis(e.target.checked)}} />
                                <label>Arthritis</label>
                            </div>
                            <div className="ui checkbox" style={{marginRight: "1em"}}>
                                <input type="checkbox" checked={chronic_headaches} onChange={e=>{setchronic_headaches(e.target.checked)}} />
                                <label>Chronic Headaches</label>
                            </div>
                            <div className="ui checkbox" style={{marginRight: "1em"}}>
                                <input type="checkbox" checked={migraine_headaches} onChange={e=>{setmigraine_headaches(e.target.checked)}} />
                                <label>Migraine headaches</label>
                            </div>
                            <div className="ui checkbox" style={{marginRight: "1em"}}>
                                <input type="checkbox" checked={vision_loss} onChange={e=>{setvision_loss(e.target.checked)}} />
                                <label>Vision Loss</label>
                            </div>
                            <div className="ui checkbox" style={{marginRight: "1em"}}>
                                <input type="checkbox" checked={hearing_loss} onChange={e=>{sethearing_loss(e.target.checked)}} />
                                <label>Hearing Loss</label>
                            </div>
                            <div className="ui checkbox" style={{marginRight: "1em"}}>
                                <input type="checkbox" checked={osteoporosis} onChange={e=>{setOsteoporosis(e.target.checked)}} />
                                <label>Osteoporosis</label>
                            </div>
                            <div className="ui checkbox" style={{marginRight: "1em"}}>
                                <input type="checkbox" checked={haemophilia} onChange={e=>{setHaemophilia(e.target.checked)}} />
                                <label>Haemophilia</label>
                            </div>
                        </div>
                    </div>
                <div className="field">
                    <div className="field">
                        <label>Do you have any of the following cardiovascular conditions?</label>
                    </div>
                    <div className="inline field">
                        <div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={cardio_none} onChange={e=>{setcardio_none(e.target.checked)}} />
                            <label>None</label>
                        </div>
                        <div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={high_blood_pressure} onChange={e=>{sethigh_blood_pressure(e.target.checked)}} />
                            <label>High blood pressure</label>
                        </div>
                        <div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={low_blood_pressure} onChange={e=>{setlow_blood_pressure(e.target.checked)}} />
                            <label>Low blood pressure</label>
                        </div>
                        <div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={heart_attack} onChange={e=>{setheart_attack(e.target.checked)}} />
                            <label>History of heart attack(s)</label>
                        </div>
                        <div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={vericose_veins} onChange={e=>{setvericose_veins(e.target.checked)}} />
                            <label>Vericose veins</label>
                        </div>
                        <div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={stroke} onChange={e=>{setstroke(e.target.checked)}} />
                            <label>Stroke</label>
                        </div>
                        <div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={pacemaker} onChange={e=>{setpacemaker(e.target.checked)}} />
                            <label>Pacemaker</label>
                        </div>
                        <div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={heart_disease} onChange={e=>{setheart_disease(e.target.checked)}} />
                            <label>Heart disease</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="field">
                            <label>Do you have any of the following respiratory conditions?</label>
                        </div>
                        <div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={resp_none} onChange={e=>{setresp_none(e.target.checked)}} />
                            <label>None</label>
                        </div>
                        <div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={chronic_cough} onChange={e=>{setchronic_cough(e.target.checked)}} />
                            <label>Chronic Cough</label>
                        </div>
                        <div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={bronchitis} onChange={e=>{setbronchitis(e.target.checked)}} />
                            <label>Bronchitis</label>
                        </div>
                        <div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={asthma} onChange={e=>{setasthma(e.target.checked)}} />
                            <label>Asthma</label>
                        </div>
                        <div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={emphysema} onChange={e=>{setemphysema(e.target.checked)}} />
                            <label>Emphysema</label>
                        </div>
                    </div>
                    <div className="two fields">
                        <div className="field">
                            <label>Do you have any skin conditions?</label>
                            <input type="text" value={skin_conditions} onChange={e=>setskin_conditions(e.target.value)} name="" placeholder="List skin conditions here" />
                        </div>
                        <div className="field">
                            <label>Do you have any infectious conditions?</label>
                            <input type="text" value={infectious_conditions} onChange={e=>setinfectious_conditions(e.target.value)} name="" placeholder="Please include skin, respiratory, blood such as HIV, hepatitis, herpes" />
                        </div>
                    </div>
                    <div className="field">
                        <div className="field">
                            <label>Do you have any other medical conditions?</label>
                            <input type="text" value={medical_conditions} onChange={e=>setmedical_conditions(e.target.value)} name="" placeholder="List here" />
                        </div>
                    </div>
                    <div className="two fields">
                        <div className="field">
                            <label>Please list any surgeries including when they occured:</label>
                            <input value={surgeries} onChange={e=>setSurgeries(e.target.value)} type="text" />
                        </div>
                        <div className="field">
                            <label>Please list any injuries including when they occured:</label>
                            <input value={injuries} onChange={e=>setInjuries(e.target.value)} type="text" />
                        </div>
                    </div>
                    <div className="field">
                        <div className="field">
                            <label>Are you experiencing a loss of feeling or sensation anywhere?</label>
                            <input type="text" value={loss_of_feeling} onChange={e=>setloss_of_feeling(e.target.value)} name="" placeholder="Please describe what you're experiencing and where" />
                        </div>
                    </div>
                    <div className="field">
                        <div className="field">
                            <label>Do you have any allergies?</label>
                            <input type="text" value={allergies} onChange={e=>setAllergies(e.target.value)} name="" placeholder="Please list your allergies" />
                        </div>
                    </div>
                    <div className="field">
                        <div className="field">
                            <label>Are you currently pregnant?</label>
                            <select value={pregnant} onChange={e=>setPregnant(e.target.value)} className="ui search dropdown" name="pregnant" placeholder="N/A">
                            <option value="na">N/A</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        </div>
                    </div>
                    <div className="field">
                        <div className="field">
                            <label>Are you currently taking any medications?</label>
                            <input type="text" value={medications} onChange={e=>setMedications(e.target.value)} name="" placeholder="Please list your medications and conditions being treated" />
                        </div>
                    </div>
                    <div className="field">
                        <h4 className="ui dividing header">Consent for Treatment</h4>
                        <div className="field">
                            <label>Sensitive Areas</label>
                            <p>Thai massage involves close body contact, through clothing. The goal of Thai Massage is to relieve tension throughout the body. All areas are connected, and as such, it is important to release tension in all areas of the body to relieve any pain or stiffness you may be feeling. For example, soreness in the lower back area can be the result of tightness in the thighs, hips, and buttocks. Areas that may be touched include inner thighs, glutes/buttocks, chest wall (not including breat tissue), and abdomen. Areas that will never be touched during a massage include breasts or genital regions. If you do not feel comfortable with any of these sensitive areas being touched, please indicate which areas here:</p>
                            <div className="ui checkbox" style={{marginRight: '1em'}}>
                                <input type="checkbox" checked={glutes} onChange={e=>{setGlutes(e.target.checked)}} />
                                <label>Glutes/buttocks</label>
                            </div>
                            <div className="ui checkbox" style={{marginRight: '1em'}}>
                                <input type="checkbox" checked={inner_thighs} onChange={e=>{setinner_thighs(e.target.checked)}} />
                                <label>Inner thighs</label>
                            </div>
                            <div className="ui checkbox" style={{marginRight: '1em'}}>
                                <input type="checkbox" checked={abdomen} onChange={e=>{setAbdomen(e.target.checked)}} />
                                <label>Abdomen</label>
                            </div>
                            <div className="ui checkbox" style={{marginRight: '1em'}}>
                                <input type="checkbox" checked={chest_wall} onChange={e=>{setchest_wall(e.target.checked)}} />
                                <label>Chest wall</label>
                            </div>
                            <div className="ui checkbox" style={{marginRight: '1em'}}>
                                <input type="checkbox" checked={all_areas} onChange={e=>{setall_areas(e.target.checked)}} />
                                <label>I am comfortable with all of these areas being massaged</label>
                            </div>                       
                        </div>
                        <div className="field">
                            <label>If there are any other areas that you would not like to have massaged, please indicate them here:</label>
                            <input type="text" value={sensitiveAreas} onChange={e=>{setSensitiveAreas(e.target.value)}} />
                        </div>    
                    </div>
                    <label>Privacy Policy</label>
                    <div className="ui checkbox">            
                        <input type="checkbox" checked={privacy_policy} onChange={e=>{setprivacy_policy(e.target.checked)}} />
                        <label>By clicking here you're indicating that you have read and understand the <a onClick={privacyPolicy}>privacy policy</a></label>
                    </div>

                </div>                   
                <div>
                    <button type="submit" onClick={handleSubmit} className="ui button violet">Submit</button>
                </div>
                
            </form>
        </div>
    )
}

export default BookAMassage
