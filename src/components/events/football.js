import React from "react";

class FootballTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goals: 0
        };
    }

    handleGoalClick = () => {
        this.setState((prevState) => ({
            goals: prevState.goals + 1
        }));
    };

    render() {
        const { goals } = this.state;

        return (
            <div className="FootballTeam">
                <h1>Football Team Goals: {goals}</h1>
                <button onClick={this.handleGoalClick}>Goal!</button>
            </div>
        );
    }
}

export default FootballTeam;
