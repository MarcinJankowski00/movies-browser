import React from "react";
import noPerson from "../../images/noPerson.svg";
import { People, StyledLink, Photo, Wrapper, Name, Role } from "./styled";

export const PeopleList = ({ people = [], baseurl, renderinmoviedetails }) => {

    return (
        <People>
            {people.map((person) => {
                const url = person.profile_path ? `${baseurl}${person.profile_path}` : noPerson;
                const role = `${person.character ? person.character : person.department}`;
                return (
                    <StyledLink to={`/people/${person.id}`} key={person.id}>
                        <Photo photo={url} alt={person.name} />
                        <Wrapper>
                            <Name>{person.name}</Name>
                            {renderinmoviedetails && <Role>{role !== "undefined" ? role : "Unknown"}</Role>}
                        </Wrapper>
                    </StyledLink>
                );
            })}
        </People>
    );
};

export default PeopleList;