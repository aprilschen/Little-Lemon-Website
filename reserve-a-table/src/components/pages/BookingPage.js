import Heading from '../sections/reservePages/Heading';
import ReservationForm from '../sections/reservePages/BookingForm';
import {useEffect, useReducer} from 'react';
import {seededRandom, fetchAPI, submitAPI} from '../../bookingsAPI'
export default function BookingPage() {

    function updateTimes(date) {
        console.log(date);

        return (
            fetchAPI(date)
        );
    }

    const output = fetchAPI(new Date());

    const [availableTimes, dispatch] = useReducer(updateTimes, output);

    return (
        <>
            <Heading/>
            <ReservationForm availableTimes={availableTimes} updateTimes={dispatch}/>
        </>
    );
}