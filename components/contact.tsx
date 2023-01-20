import { useRef, useState } from 'react';
import styles from './contact.module.scss';
import cn from 'classnames';
import Button from './button';
import { ClipLoader } from 'react-spinners';

const Contact = () => {

    const [ isSubmitting, setIsSubmitting ] = useState(false);
    const [ isFinished, setIsFinished ] = useState(false);
    const [ isError, setIsError ] = useState(false);
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ message, setMessage ] = useState('');

    const [ nameMissing, setNameMissing ] = useState(false);
    const [ emailMissing, setEmailMissing ] = useState(false);
    const [ emailInvalid, setEmailInvalid ] = useState(false);
    const [ messageMissing, setMessageMissing ] = useState(false);

    const validateEmail = () => {
        return String(email)
            .toLowerCase()
            .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    }

    const validateForm = () => {

        let invalid = false;

        if (!name) {
            setNameMissing(true);
            invalid = true;
        } else {
            setNameMissing(false);
        }

        if (!email) {
            setEmailMissing(true);
            invalid = true;
        } else if (!validateEmail()) {
            setEmailMissing(false);
            setEmailInvalid(true);
            invalid = true;
        } else {
            setEmailMissing(false);
            setEmailInvalid(false);
        }

        if (!message) {
            setMessageMissing(true);
            invalid = true;
        } else {
            setMessageMissing(false);
        }

        return !invalid;
    }

    const getMissingString = () => {
        let missing = [];
        if (nameMissing) {
            missing.push("name");
        }
        if (emailMissing) {
            missing.push("email");
        }
        if (messageMissing) {
            missing.push("message");
        }

        return new Intl.ListFormat().format(missing);
    };

    const submitForm = () => {
        if (validateForm()) {
            setIsError(false);
            setIsFinished(false);
            setIsSubmitting(true);
            fetch("https://submit-form.com/WqPuQ7bT", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name, email, phone, message
                }),
            }).then(response => {
                console.log(response);
                setIsSubmitting(false);
                setIsFinished(true);
            }).catch(error => {
                console.log('oh no');
                console.log(error);
                setIsSubmitting(false);
                setIsError(true);
            });
        }
    };

    return (
        <div id="contact-form" className={styles.container}>
            <h1>Ready to get in touch?</h1>
            <form>
                <div className={styles.inputRow}>
                    <input className={cn({[styles.missingField]: nameMissing})} name='name' placeholder='Full Name' value={name} onChange={e => setName(e.target.value)} />
                    <input className={cn({[styles.missingField]: emailInvalid || emailMissing})} name='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                    <input name='phone' placeholder='Phone Number' value={phone} onChange={e => setPhone(e.target.value)} />
                </div>
                <div className={styles.messageContainer}>
                    <h2>Message</h2>
                    <div>Please include the following:</div>
                    <div className={styles.columnList}>
                        <ul>
                            <li>dog breed</li>
                            <li>age</li>
                            <li>problems you are having</li>
                            <li>your training goals</li>
                            <li>whether the dog is aggressive or not</li>
                        </ul>
                        <ul>
                            <li>any health issues</li>
                            <li>details on current vaccination records</li>
                            <li>how many dogs in the house</li>
                            <li>how many dogs you're interested in having trained/boarded</li>
                            <li>best time to contact you</li>
                        </ul>
                    </div>
                    <div>Also please be advised all dogs must be current and up to date regarding shots when it comes to being boarded and trained with us.</div>
                    <textarea className={cn({[styles.missingField]: messageMissing})} name='message' cols={40} rows={5} placeholder='Write your message here' value={message} onChange={e => setMessage(e.target.value)}></textarea>
                </div>
                <div className={styles.errorText}>
                    <div className={cn({[styles.hidden]: !(nameMissing || emailMissing || messageMissing)})}>Missing {getMissingString()}!</div>
                    <div className={cn({[styles.hidden]: !emailInvalid})}>Invalid email address!</div>
                </div>
                <Button onClick={submitForm} isPrimary={true} style={{margin: '20px', fontSize: '24px', display: isSubmitting || isFinished ? 'none' : 'inline-block'}}>SEND MESSAGE!</Button>
                <ClipLoader loading={isSubmitting} color='#f26838' cssOverride={{margin: '20px'}} />
                <div style={{padding: '20px', color: 'darkgreen', display: isFinished ? 'block' : 'none'}}>&#x2713; Your message was sent!</div>
                <div style={{paddingBottom: '20px', color: 'darkred', display: isError ? 'block' : 'none'}}>Uh oh... something went wrong. Please try again.</div>
            </form>
        </div>
    );
}

export default Contact;