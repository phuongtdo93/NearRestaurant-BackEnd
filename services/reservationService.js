import Users from "../models/user.js";
import {ObjectId} from "mongodb";
import User from "../models/user.js";

const ReservationService = {
   addReservation: async function (reservation){
        //Add all fields to newReservation excepts userId
       const { userId , ...newReservation } = reservation;
       const res = await Users.updateOne(
            {_id: reservation.userId},
            {$push: {reservations: newReservation}})
       return res;
   },
    updateReservation: async function(reservationId, numberOfPeople, status){
        const res = await User.updateOne(
            {"reservations._id": reservationId},
            {$set: {"reservations.$.status": status, "reservations.$.numberOfPeople": numberOfPeople}})
    },
    getReservationOfUser: async function(userId) {
        const res =  await Users.aggregate([
            {$match: {_id: new ObjectId(userId)}},
            {$project: {_id: 0, reservations: 1}},
            {$unwind: "$reservations"},
        ])
        return res
    },
}

export default ReservationService;