import "./TopContainer.css";

const Map = () => (
  <div className="child">
    <iframe
      title="Sultan Hospital and Research Centre"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.755181750802!2d92.34493827579678!3d26.23714318879559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375ad1b671e47671%3A0xaed416cbce1bbfca!2sSultan%20Hospital%20and%20Research%20Centre!5e0!3m2!1sen!2sin!4v1722503189907!5m2!1sen!2sin"
      width="100%"
      height="100%"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="map"
    ></iframe>
  </div>
);

const Facilities = () => (
  <div className="child">
    <h3 style={{ fontWeight: "bold", color: "white" }}>Top Facilities</h3>
    <div className="inner-child">
      <b className="inner-child-1">ICU</b>
      <b className="inner-child-2">NICU</b>
      <b className="inner-child-3">OT</b>
      <b className="inner-child-4">OPD/IPD</b>
    </div>
  </div>
);

const TopContainer = () => {
  return (
    <div className="parent">
      <Facilities />
      <Map />
    </div>
  );
};

export default TopContainer;
