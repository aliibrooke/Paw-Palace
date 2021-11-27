import React, { Component } from 'react';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: [
               {
                   id: 0,
                   name: 'Doggie Daycare',
                   image: 'assets/images/daycare.jpg',
                   description: "Allow your furry friend the ability to run with the pack and hang out with their dog friends while you're away."
               },
               {
                   id: 1,
                   name: 'Best Friend Boarding',
                   image: 'assets/images/boarding.jpg',
                   description: "Every human needs a night off once in a while, we can come to you or let your best friend have a sleepover with theirs."
               },
               {
                   id: 2,
                   name: 'On the Go Walking',
                   image: 'assets/images/walking.jpg',
                   description: "Eight hours is a long time in a crate or just home alone, let us do the walking for you and get your pup to burn off some energy."
               },
               {
                   id: 3,
                   name: "Gorgeous Grooming",
                   image: 'assets/images/grooming.jpg',
                   description: "It's time for your loved one to be pampered and get them smelling and looking their best, just for you."
               }
            ]
        };
    }

    render() {
        const directory = this.state.services.map(service => {
            return (
                <div key={service.id} className="col">
                    <img src={service.image} alt={service.name} />
                    <h2>{service.name}</h2>
                    <p>{service.description}</p>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}

export default Directory;