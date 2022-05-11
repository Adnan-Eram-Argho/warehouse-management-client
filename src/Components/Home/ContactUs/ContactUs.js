import React, { useState } from 'react';

const ContactUs = () => {
    // var submitButton = document.getElementById("submit_form");
    // var form = document.getElementById("email_form");
    // form.addEventListener("submit", function (e) {

    // });

    const [submitButton, setSubmitButton] = useState();
    const handleFromSubmit = (e) => {

        console.log(e)
        setSubmitButton(e)
        setTimeout(function () {
            submitButton.value = "Sending...";
            submitButton.disabled = true;
        }, 1);
    }
    return (
        <div className='container'>
            <div className='App'>
                <h2>If you have any problem then contact us</h2>
            </div>
            <form action="https://postmail.invotes.com/send"
                method="post" id="email_form" className='d-flex flex-column' >

                <input type="text" name="subject" title='plase give email so we can contact you' placeholder="Email" />
                <textarea name="text" placeholder="Message"></textarea>
                <input type="hidden" name="access_token" value="tvepls2evsgdm4gflvhy1plh" />

                <input type="hidden" name="success_url" value=".?message=Email+Successfully+Sent%21&isError=0" />
                <input type="hidden" name="error_url" value=".?message=Email+could+not+be+sent.&isError=1" />







                <input id="submit_form" type="submit" value="Send" onClick={() => handleFromSubmit()} />


            </form>
        </div>
    );
};

export default ContactUs;