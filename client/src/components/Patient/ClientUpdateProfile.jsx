import React, {useEffect, useState} from 'react'
import {useHistory, Link} from 'react-router-dom'
import Header from '../../components/Header'

const ClientUpdateProfile = () => {

    let history = useHistory();

    const getData = async () => {
        try {
            const response = await fetch ("http://localhost:5000/api/1/profile", {
                method: "GET",
                headers: {token: localStorage.token}
            })
            const parseRes = await response.json()
            const {id, first_name, last_name, email, password, other_hcp, cardio_none, high_blood_pressure, low_blood_pressure, heart_attack, vericose_veins, stroke, pacemaker, heart_disease, resp_none, chronic_cough, bronchitis, asthma, emphysema, skin_conditions, diabetes, epilepsy, cancer, arthritis, chronic_headaches, migraine_headaches, vision_loss, hearing_loss, osteoporosis, haemophilia, medical_conditions, loss_of_feeling, allergies, pregnant, medications, phone, date_of_birth, occupation, infectious_conditions, doctor_name, doctor_address, address, pronouns, injuries, surgeries, general_health} = parseRes
            setId(id)
            setfirst_name(first_name)
            setlast_name(last_name)
            setEmail(email)
            setPhone(phone)
            setdate_of_birth(date_of_birth)
            setOccupation(occupation)
            setdoctor_name(doctor_name)
            setdoctor_address(doctor_address)
            setPassword(password)
            setother_hcp(other_hcp)
            setcardio_none(cardio_none)
            sethigh_blood_pressure(high_blood_pressure)
            setlow_blood_pressure(low_blood_pressure)
            setheart_disease(heart_disease)
            setheart_attack(heart_attack)
            setvericose_veins(vericose_veins)
            setstroke(stroke)
            setpacemaker(pacemaker)
            setresp_none(resp_none)
            setasthma(asthma)
            setbronchitis(bronchitis)
            setchronic_cough(chronic_cough)
            setemphysema(emphysema)
            setskin_conditions(skin_conditions)
            setDiabetes(diabetes)
            setEpilepsy(epilepsy)
            setCancer(cancer)
            setArthritis(arthritis)
            setchronic_headaches(chronic_headaches)
            setmigraine_headaches(migraine_headaches)
            setvision_loss(vision_loss)
            sethearing_loss(hearing_loss)
            setOsteoporosis(osteoporosis)
            setHaemophilia(haemophilia)
            setloss_of_feeling(loss_of_feeling)
            setmedical_conditions(medical_conditions)
            setAllergies(allergies)
            setPregnant(pregnant)
            setMedications(medications)
            setinfectious_conditions(infectious_conditions)
            setAddress(address)
            setPronouns(pronouns)
            setInjuries(injuries)
            setSurgeries(surgeries)
            setgeneral_health(general_health)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(()=>{
        getData()
    },[])

    const [id, setId] = useState("")
    const [first_name, setfirst_name] = useState("")
    const [last_name, setlast_name] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [date_of_birth, setdate_of_birth] = useState("")
    const [occupation, setOccupation] = useState("")
    const [doctor_name, setdoctor_name] = useState("")
    const [doctor_address, setdoctor_address] = useState("")
    const [other_hcp, setother_hcp] = useState("")
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
    const [infectious_conditions, setinfectious_conditions] = useState("")
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [pronouns, setPronouns] = useState('')
    const [injuries, setInjuries] = useState('')
    const [surgeries, setSurgeries] = useState('')
    const [general_health, setgeneral_health] = useState('')

    const body = {id, first_name, last_name, email, password, other_hcp, cardio_none, high_blood_pressure, low_blood_pressure, heart_attack, vericose_veins, stroke, pacemaker, heart_disease, resp_none, chronic_cough, bronchitis, asthma, emphysema, skin_conditions, diabetes, epilepsy, cancer, arthritis, chronic_headaches, migraine_headaches, vision_loss, hearing_loss, osteoporosis, haemophilia, medical_conditions, loss_of_feeling, allergies, pregnant, medications, phone, date_of_birth, occupation, infectious_conditions, doctor_name, doctor_address, address, pronouns, injuries, surgeries, general_health }

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            await fetch (`http://localhost:5000/api/1/profile/update/${id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })        
            history.push('/client/dashboard')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
        <Header />
        <div className="tm30 bm30">
            <h3>Update Your Profile</h3>
            <div>
                <p>The information provided below will help me in treating you safely. All information you provide will be kept confidential in accordance with this <Link to="/privacypolicy">privacy policy</Link> and will not be shared without your written consent, or as required by law. Information you submit will be encrypted and transferred through a secure network. ​</p>
            </div>
            <h4 className="ui dividing header">Personal Info</h4>
            <form className="ui form">
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
                        <label>Pronouns</label>
                        <select value={pronouns} onChange={e=>setPronouns(e.target.value)} className="ui search dropdown" name="pronouns" placeholder="Pronouns">
                            <option value="they">They/them</option>
                            <option value="she">She/her</option>
                            <option value="he">He/him</option>
                            <option value="nopreference">No preference</option>
                            <option value="prefernottosay">Prefer not to say</option>
                        </select>
                    </div>
                </div>
                <div className="two fields">
                        <div className="required field">
                            <label htmlFor="phone">Phone</label>
                            <input 
                                value={phone} 
                                onChange={e=>setPhone(e.target.value)} 
                                type="tel" 
                                placeholder="Telephone number" 
                            />
                        </div>
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
                        <label htmlFor="occupation">Occupation</label>
                        <input value={occupation} onChange={e=>setOccupation(e.target.value)} type="text" />
                    </div>            
                </div>
                <h4 className="ui dividing header">Login credentials</h4>
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
                <h4 className="ui dividing header">Health History</h4>
                <div className="field">
                    <label htmlFor="other_hcp">Are you receiving any treatment from another health care provider?</label>
                    <input value={other_hcp} onChange={e=>setother_hcp(e.target.value)} type="text" name="other_hcp" placeholder="Please indicate type of treatment and provider"/>
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
                </div>                   
                <div>
                    <button type="submit" onClick={handleUpdate} className="ui button violet">Update</button>
                </div>
                
            </form>
        </div>
        </>
    )
}

export default ClientUpdateProfile

