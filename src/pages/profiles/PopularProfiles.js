import React from "react";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import styles from "../../styles/PopularProfiles.module.css";
import Asset from "../../components/Asset";
import Profile from "./Profile";
import { useProfileData } from "../../contexts/ProfileDataContext";

const PopularProfiles = ({ mobile }) => {
    const { popularProfiles } = useProfileData();

    return (
        <Container
            className={`${appStyles.Content} ${
                mobile && "d-lg-none text-center mb-3"
            }`}>
            {popularProfiles.results.length ? (
                <>
                    <p className={`text-center ${styles.Title}`}>Fellow Home Lovers</p>
                    {mobile ? (
                        <div className="d-flex justify-content-around">
                            {popularProfiles.results
                                .slice(0, 4)
                                .map((profile) => (
                                    <Profile
                                        key={profile.id}
                                        profile={profile}
                                        mobile
                                    />
                                ))}
                        </div>
                    ) : (
                        popularProfiles.results.map((profile) => (
                            <Profile key={profile.id} profile={profile} />
                        ))
                    )}
                </>
            ) : (
                <Asset spinner />
            )}
        </Container>
    );
};

export default PopularProfiles;
