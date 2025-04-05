import {useRef,useState} from 'react';
import emailjs from '@emailjs/browser';

import {userDetail} from "../constants/index.js";

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name:'',
        email:'',
        message:''
    });
    const handleChange = ({target: {name, value}}) =>{
        setForm({...form,[name]: value})
    }
    // service_nnch935
    const handleSubmit = async(e) =>{
        e.preventDefault();
        setLoading(true);
        try{
        await emailjs.send(
            'service_nnch935',
            'template_8qzlat3',
            {
                from_name:form.name,
                to_name:userDetail.Name,
                from_email:form.email,
                to_email:userDetail.Email_id,
                message: form.message
            },'2gvHbxNigGn6WHQ8Q')
            setLoading(false);
            alert('Thank you for your message. I will get back to you as soon as possible.');
            setForm({
                name:'',
                email:'',
                message:''
            })
        }catch (e) {
            setLoading(false);
            console.log(e)
            alert('Something went wrong! Please try again.');
        }
    }
    return (
        <section className="c-space my-20" id="contact">
            <div className="relative  flex items-stretch  justify-center">
                <img src="/assets/terminal.png" alt="terminal background" className="absolute  h-full"  style={{ height: "calc(100% + 25px)" }} />
                <div className="contact-container" >
                    <h3 className="head-text">Let's Connect</h3>
                    <p className="text-lg text-white-600 mt-3">
                        Whether you're looking to build a new website, improve your existing platform, or bring a unique project to
                        Life, I'm here to help.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                required
                                onChange={handleChange}
                                className="field-input"
                                placeholder={userDetail.Name}
                            />

                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                required
                                onChange={handleChange}
                                className="field-input"
                                placeholder={userDetail.Email_id}
                            />

                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                required
                                rows={5}
                                onChange={handleChange}
                                className="field-input"
                                placeholder="Hi, I wanna give you a job . . ."
                            />

                        </label>
                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow"/>
                        </button>
                    </form>
                </div>
            </div>

        </section>
    )
}
export default Contact
