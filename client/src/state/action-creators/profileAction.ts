import { Dispatch } from 'redux';
import {ProfileAction} from '../actions'
import {
    fetchProfileDetailFulfilled,
    fetchProfileFulfilled,
    fetchProfilePending,
    fetchProfileRejected,
} from './profileActionCreator'

const url = 'http://localhost:3000/';


export interface Skills {
    javascript: string;
    python: string;
    golang: string;
    php: string;
}

export interface Profile {
    id: number;
    first_name: string;
    last_name: string;
    skills: Skills;
}

export type Profiles = Profile[];

export type newProfiles = { id: number |string; full_name: string; expert_skills: string[] }[]

export const fetchProfiles = () => async (dispatch: Dispatch<ProfileAction>): Promise<newProfiles | undefined> => {
    try {
        dispatch(fetchProfilePending(true))
        const response : Profiles = await (await fetch(url + 'data')).json();
        const newProfiles: newProfiles = [];
        if(!response){
            const error = "No data found"
            throw new Error(error);
        } else {
            response.forEach((profile: Profile) => {
                const {id, first_name, last_name, skills} = profile;
                let key: keyof Skills;
                const full_name = `${first_name} ${last_name}`;
                const expert_skills = [];
                for (key in skills) {
                    if (skills[key] === 'expert') {
                        expert_skills.push(key);
                    }
                }
                newProfiles.push({id, full_name, expert_skills});
            })
            dispatch(fetchProfileFulfilled(newProfiles))
            dispatch(fetchProfilePending(false))
        }
        return Promise.resolve(newProfiles);
    } catch (error) {
        dispatch(fetchProfileRejected(error))
        dispatch(fetchProfilePending(false))
    }
}

export const fetchProfileDetail = (id: string | undefined) => async (dispatch: Dispatch<ProfileAction>): Promise<any> => {
    try {
       dispatch(fetchProfilePending(true))
        const profile = await (await fetch(url + 'data/' + id)).json();let newProfile = {}
        if(!profile){
            const error = "No data found"
            throw new Error(error);
        } else {
            const {id, first_name, last_name, skills} = profile;
            let key: string;
            const full_name = `${first_name} ${last_name}`;
            const expert_skills = [];
            for (key in skills) {
                if (skills[key] === 'expert') {
                    expert_skills.push(key);
                }
            }
            newProfile = {id, full_name, expert_skills};
            dispatch(fetchProfileDetailFulfilled(newProfile))
            dispatch(fetchProfilePending(false))
        }

        return profile;
    } catch (error) {
        dispatch(fetchProfileRejected(error))
        dispatch(fetchProfilePending(false))
    }
}

export const addProfile = (payload: any) => async (dispatch: Dispatch<ProfileAction>) => {
    try {
        const {full_name, expert_skills} = payload;
        const newPayload = {
            first_name: full_name.split(' ')[0],
            last_name: full_name.split(' ')[1],
            skills: {
                javascript: expert_skills.includes('javascript') ? 'expert' : 'basic',
                python: expert_skills.includes('python') ? 'expert' : 'basic',
                golang: expert_skills.includes('golang') ? 'expert' : 'basic',
                php: expert_skills.includes('php') ? 'expert' : 'basic',
            }
        }
        dispatch(fetchProfilePending(true))
        const response = await fetch(url + 'data', {
            method: 'POST',
            body: JSON.stringify(newPayload),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const profile = await response.json();
        if(!response.ok){
            const error = profile && profile.message || response.statusText;
            throw new Error(error);
        }
        dispatch(fetchProfileDetailFulfilled(profile))
        dispatch(fetchProfilePending(false))

        return profile;
    } catch (error) {
        fetchProfileRejected(error)
        dispatch(fetchProfilePending(false))
    } finally {
        setTimeout(() => {
            dispatch(fetchProfilePending(false))
        }, 3000);
    }
}