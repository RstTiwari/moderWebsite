import React from "react";

const GoogleMap = () => {
    // Construct the URL for the static map image

    return (
        <div>
            <iframe
                title="Google Map"
                width="100%"
                height="450"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9313736346196!2d72.8469593!3d19.1578551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7d42706e4a5%3A0xa2bf87e609d9ff66!2sWeldinghouse!5e0!3m2!1sen!2sin!4v1645356521322!5m2!1sen!2sin"
            >

            </iframe>
        </div>
    );
};

export default GoogleMap;
