import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import RMTDashboardHeader from './RMT/RMTDashboardHeader'

const AddAppointment = ({setAuth}) => {

    const {id} = useParams()
    let history = useHistory()

    const [appointment_date, setappointment_date] = useState("")
    const [duration, setDuration] = useState(null)
    const [price, setPrice] = useState("")
    const [treatment_purpose, settreatment_purpose] = useState("")
    const [findings, setFindings] = useState("")
    const [treatment, setTreatment] = useState("SUPINE: mx feet and legs with palm presses. PROM for hips, ankles and knees. Stretch hips through flexion, SLR, and FABER. Spinal twist stretch. SIDELYING: Foot presses along back. Stretch shoulder horizontal abduction. Scap mobilization and kneading to entire shoulder girdle. SEATED: mx shoulder girdle. scap mobs. spine lateral flexion stretch. spine extension stretch. foot presses along back and traps. neck stretches through flexion, extension, lateral flexion and rotation. apley scratch stretches. PRONE: mx feet, legs and back with palm and foot presses. SUPINE: ftk to neck and scalp.")
    const [immediate_results, setimmediate_results] = useState("")
    const [remex, setRemex] = useState("Did not recommend")
    const [treatment_plan, settreatment_plan] = useState("Not indicated")
    const [consent_for_treatment, setconsent_for_treatment] = useState(true)
    const [time, setTime] = useState("")
    const [credit, setCredit] = useState(false)
    const [debit, setDebit] = useState(false)
    const [cash_etransfer, setcash_etransfer] = useState(false)
    const [send_receipt, setsend_receipt] = useState(true)
    const [consent_innerthighs, setConsentThighs] = useState(true)
    const [consent_glutes, setConsentGlutes] = useState(true)
    const [consent_abdomen, setConsentAbdomen] = useState(true)
    const [consent_chest, setConsentChest] = useState(true)
    const [notes, setNotes] = useState('')

    const client_id = id
    const body = {
        client_id,
        appointment_date,
        duration,
        price,
        treatment_purpose,
        findings, 
        treatment, 
        immediate_results,
        remex,
        treatment_plan,
        consent_for_treatment,
        time,
        credit,
        debit,
        cash_etransfer,
        send_receipt,
        consent_glutes,
        consent_innerthighs,
        consent_chest,
        consent_abdomen,
        notes
    }

    const SubmitAddAppointment = async (e) => {
        e.preventDefault()
        try {
            await fetch (`/api/1/clientprofile/${id}/appointments`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            history.push(`/rmt/dashboard/profile/${id}`)
        } catch (error) {
            console.log(error)
        } 
    }

    return (   
            <div>
                <RMTDashboardHeader setAuth={setAuth} />
                <h3>Add an appointment</h3>
                <form className="ui form">
                    <div className="inline field">
                        <div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={consent_for_treatment} onChange={e=>{setconsent_for_treatment(e.target.checked)}} />
                            <label>Consent for treatment given</label>
                        </div>
                        <div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={consent_glutes} onChange={e=>{setConsentGlutes(e.target.checked)}} />
                            <label>Consent for glutes given</label>
                        </div><div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={consent_innerthighs} onChange={e=>{setConsentThighs(e.target.checked)}} />
                            <label>Consent for inner thighs given</label>
                        </div><div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={consent_abdomen} onChange={e=>{setConsentAbdomen(e.target.checked)}} />
                            <label>Consent for abdomen given</label>
                        </div><div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={consent_chest} onChange={e=>{setConsentChest(e.target.checked)}} />
                            <label>Consent for chest given</label>
                        </div>
                    </div>
                    <div className="two fields">
                        <div className="field">
                            <label>Date</label>
                            <input type="date" name="appointment_date" value={appointment_date} onChange={e=>setappointment_date(e.target.value)}/>
                        </div>
                        <div className="field">
                            <label>Time</label>
                            <input type="time" name="time" value={time} onChange={e=>setTime(e.target.value)} />
                        </div>
                        <div className="field">
                            <label>Duration</label>
                            <select value={duration} onChange={e=>setDuration(e.target.value)} name="duration" className="ui search dropdown" placeholder="duration" >
                                <option value="">Select duration</option>
                                <option value="90">90 minutes</option>
                                <option value="75">75 minutes</option>
                                <option value="60">60 minutes</option>
                            </select>
                        </div>
                        <div className="field">
                            <label>Price</label>
                            
    {/* add an if statement to automatically set price based on duration value chosen                         */}

                            <input value={price} onChange={e=>setPrice(e.target.value)} type="text" placeholder="if statement based on duration"/>
                        </div>
                    </div>
                    <div className="field">
                        <label>Purpose for this massage</label>
                        <input value={treatment_purpose} onChange={e=>settreatment_purpose(e.target.value)} type="text" name="treatment_purpose"/>
                    </div>
                    <div className="two fields">
                        <div className="field">
                            <label>Findings</label>
                            <textarea value={findings} onChange={e=>setFindings(e.target.value)} name="findings" rows="4" />
                        </div>
                        <div className="field">
                            <label>Treatment</label>
                            <textarea value={treatment} onChange={e=>setTreatment(e.target.value)} name="treatment" rows="4"/>
                        </div>
                        <div className="field">
                            <label>Results</label>
                            <textarea value={immediate_results} onChange={e=>setimmediate_results(e.target.value)} name="immediate_results" rows="4"/>
                        </div>
                    </div>
                    <div className="two fields">
                        <div className="field">
                            <label>Exercises Prescribed</label>
                            <textarea value={remex} onChange={e=>setRemex(e.target.value)} name="remex" rows="4"/>
                        </div>
                        <div className="field">
                            <label>Treatment Plan</label>
                            <textarea value={treatment_plan} onChange={e=>settreatment_plan(e.target.value)} name="treatment_plan" rows="4"/>
                        </div>
                        <div className="field">
                            <label>Notes</label>
                            <textarea value={notes} onChange={setNotes} name="notes" rows="4" />
                        </div>
                    </div>
                    <div className="inline field">
                        <label>Payment Received</label>
                        <div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={credit} onChange={e=>{setCredit(e.target.checked)}} />
                            <label>Credit Card</label>
                        </div>
                        <div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={debit} onChange={e=>{setDebit(e.target.checked)}} />
                            <label>Debit</label>
                        </div>
                        <div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={cash_etransfer} onChange={e=>{setcash_etransfer(e.target.checked)}} />
                            <label>Cash/E-transfer</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui checkbox" style={{marginRight: '1em'}}>
                            <input type="checkbox" checked={send_receipt} onChange={e=>{setsend_receipt(e.target.checked)}} />
                            <label>Send Receipt</label>
                        </div>
                    </div>
                    
    {/* when clicked, send receipt to client's email */}
                    {/* <div className="field">
                        <div className="ui checkbox">
                            <input type="checkbox"/>
                            <label>Send receipt to email</label>
                        </div>
                    </div>              */}
                    <button onClick={SubmitAddAppointment} className="ui button pink">Submit</button>
                </form>
            </div>
    )
}

export default AddAppointment
