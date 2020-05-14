import React from 'react';

import './ModuleTabs.css';

class ModuleTabs extends React.Component {
    constructor() {
        super();

        this.state = {
            selectedTab: 0,
        };
    }

    render() {
        const currentTab = this.state.selectedTab;

        const findTabLabel = (index) => {
            if (this.props.titles && this.props.titles[index]) {
                return this.props.titles[index];
            } else {
                return `Tab #${index}`;
            }
        };

        return (
            <div className="module-tabs">
                <div className="module-tabs__toolbar">
                    {
                        this.props.children.map(
                            (_, index) => currentTab === index
                                ? <span>{findTabLabel(index)}</span>
                                : <a
                                    href="#"
                                    onClick={() => this.setState({ selectedTab: index})}
                                  >
                                    {findTabLabel(index)}
                                    </a>
                        )
                    }
                </div>

                <div className="module-tabs__content">
                    {this.props.children[currentTab]}
                </div>
            </div>
        );
    }
}

export default ModuleTabs;
