import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import logo from '../../logo.svg'
import './ShroomCreator.css';

import QuadraticButton from "../../components/vume-base-components/QuadraticButton/QuadraticButton";

class ShroomCreatorContainer extends React.Component {

    state = {
        pdf: null,
        shroomKey: ''
    };

    handlePresentationUpload = (url, data) => {
        // start loader

        // get presentation file


        // build fetch request (to cloud convert api)
        // execute fetch request

        // Default options are marked with *
        fetch(url, {
            body: JSON.stringify(data), // must match 'Content-Type' header
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, same-origin, *omit
            headers: {
                'user-agent': 'Mozilla/4.0 MDN Example',
                'content-type': 'application/json'
            },
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // *client, no-referrer
        })
            .then(response => response.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));

        // send fetch request result to firebase

        // after all requests succeed, redirect to the presenterShroom

    };

    handleFileChange = (event) => {
        event.preventDefault();

        if (event.target.files.length < 1) {
            return;
        }

        let reader = new FileReader();
        let file = event.target.files[0];

        console.log(event);
        console.log("event.target.files", event.target.files);
        console.log("event.target.files[0]", file);

        reader.onloadend = () => {
            this.setState({pdf: file});
        };

        reader.readAsDataURL(file);
    };

    render() {
        return (
            <div className="shroom-creator">
                <div className="div-block-2">
                    <div className="div-block-3">
                        <img src={logo} className="logo" alt="logo"/>
                        <div className="tagline">everything, everytime for everyone</div>
                    </div>
                    <div className="div-block">
                        <input id="hidden-file-input" type="file" accept="application/pdf" onChange={this.handleFileChange} style={{display:'none'}}/>
                        <QuadraticButton text={'Upload PDF'} icon={'+'} onClick={() => document.getElementById("hidden-file-input").click()}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch) => (bindActionCreators({}, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(ShroomCreatorContainer);