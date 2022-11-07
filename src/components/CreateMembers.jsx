// eslint-disable-next-line
import React from "react";
import MembersEntry from "./MembersEntry";

export default function CreateMembers(member) {
    return (
        <MembersEntry
            key={member.id}
            img={member.imageUrl}
            name={member.name}
            position={member.jobPosition}
            alt={member.alt}
        />
    )
}