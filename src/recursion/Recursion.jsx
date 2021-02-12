import React from "react";
import RecursiveComponent from "./RecursiveComponent";

const One = (props) => {
    const { ...rest } = props;
    return (
        <div className="box" {...rest}>
            One
            {props.children}
        </div>
    );
};
const Two = (props) => {
    const { ...rest } = props;
    return (
        <div className="box" {...rest}>
            Two
            {props.children}
        </div>
    );
};
const Three = (props) => {
    const { ...rest } = props;
    return (
        <div className="box" {...rest}>
            Three
            {props.children}
        </div>
    );
};

const components = [
    {
        id: 1,
        Component: One,
        childs: [
            {
                id: 2,
                Component: Two,
                childs: [{ id: 3, Component: Three, childs: [] }],
            },
        ],
    },
];

const Recursion = () => {
    return (
        <div className="App-wrapper">
            <RecursiveComponent components={components} />
        </div>
    );
};

export default Recursion;
