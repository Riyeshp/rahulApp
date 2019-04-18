import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <h3>Actions</h3>
        <button className="btn">Assign</button>
        <button className="btn">Change Step</button>
        <button className="btn">Add Note</button>
        <button className="btn">View Note</button>
        <button className="btn">Jotter Pad</button>
        <button className="btn">Add Attachment</button>
        <button className="btn">View Attachement</button>
        <button className="btn">Export</button>
        <button className="btn">Print</button>
        <button className="btn">Enquiry Framework</button>
        <button className="btn">Create Case</button>
        <button className="btn">Create Manual Issue</button>
        <button className="btn">View History</button>
      </div>
    );
  }
}

export default Sidebar;
