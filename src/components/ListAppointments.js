import React, { Component } from 'react';
import { FaMinus } from 'react-icons/fa';
import Moment from 'react-moment';

class ListAppointments extends Component {
    render() {
        return (
            <div className="appointment-list item-list mb-3">
                {this.props.appointments.map(item => (
                    <div className="hero-item col media py-3" key={item.aptId}>
                        <div className="mr-3">
                            <button 
                                className="hero-delete btn btn-sm btn-danger"
                                onClick={() => this.props.deleteAppointment(item)}>
                                <FaMinus/>
                            </button>
                        </div>

                    <div className="hero-info media-body">
                        <div className="hero-head d-flex">
                            <span className="hero-name">{item.heroName}</span>
                            <span className="apt-date ml-auto">
                              <Moment
                                date={item.aptDate}
                                parse="YYYY-MM-dd hh:mm"
                                format = "MMM-D h:mma"
                              />
                            </span>
                        </div>

                    <div className="owner-name">
                            <span className="label-item">Owner: </span>
                            <span>{item.ownerName}</span>
                        </div>
                        <div className="apt-notes">{item.aptNotes}</div>
                    </div>
                </div>
            ))}
            </div>
        );
    }
}

export default ListAppointments;