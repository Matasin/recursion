import React from "react";

const RecursiveComponent = ({ components, padding = 0 }) => {
    return (
        <>
            {components.map(({ id, Component, childs }) => (
                <Component key={id} style={{ paddingLeft: padding * 30 }}>
                    {childs && (
                        <RecursiveComponent
                            components={childs}
                            padding={padding + 1}
                        />
                    )}
                </Component>
            ))}
        </>
    );
};

export default RecursiveComponent;
